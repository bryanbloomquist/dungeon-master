// Set global variables
const database = firebase.database();
let base;
let isLoggedIn = false;

$(document).ready(function () {
	// Fill table with elements from the firebase
	database
		.ref()
		.child("Characters")
		.on(
			"child_added",
			function (snapshot) {
				$("#combat-tracker").append(
					"<tr class='transparent text-dark animated flipInX' id=" +
						snapshot.key +
						"-remove>" +
						// Figuring out how to update initiative without removing/adding character
						// "<td><input class='initiative' id='"+snapshot.key+"-reroll' type='number' name='quantity' min='-5' max='50' value='"+snapshot.child("initiativeNumber").val()+"'></td>" +
						"<td>" +
						snapshot.child("initiativeNumber").val() +
						"</td>" +
						"<td>" +
						snapshot.child("name").val() +
						"</td>" +
						"<td>" +
						snapshot.child("armorClass").val() +
						"</td>" +
						"<td id=" +
						snapshot.key +
						"-HP value=" +
						snapshot.child("currentHP").val() +
						">" +
						snapshot.child("currentHP").val() +
						"/" +
						snapshot.child("maxHP").val() +
						"</td>" +
						"<td><input class='form-control healthInput' id='" +
						snapshot.key +
						"-HPInput' type='number' name='quantity' min='1' max='500'></td>" +
						"<td><button type='button' class='btn btn-success btn-block heal' id=" +
						snapshot.key +
						"><i class='fas fa-heart'></i></button></td>" +
						"<td><button type='button' class='btn btn-danger btn-block damage' id=" +
						snapshot.key +
						"><i class='fas fa-heart-broken'></i></button></td>" +
						"<td><button type='button' class='btn btn-dark btn-block remove' id=" +
						snapshot.key +
						"><i class='fas fa-skull-crossbones'></i></button></td>" +
						"</tr>"
				);
				// Place them in initiative order
				orderCombat();
			},
			function (errorObject) {
				console.log("Errors handled: " + errorObject.code);
			}
		);

	// Remove combatant from firebase
	database
		.ref()
		.child("Characters")
		.on(
			"child_removed",
			function (snapshot) {
				event.preventDefault();
				const removeId = snapshot.key;
				const removeVar = "#" + removeId + "-remove";
				$(removeVar).remove();
			},
			function (errorObject) {
				console.log("Errors handled: " + errorObject.code);
			}
		);

	// Sorts table so highest inititiatve is on top
	const orderCombat = () => {
		let table, rows, switching, i, x, y, shouldSwitch;
		table = document.getElementById("combat-table");
		switching = true;
		// make a loop that will continue until no switching has been done
		while (switching) {
			// start by saying no switching is done
			switching = false;
			rows = table.rows;
			// loop through all table rows (except the first, which contains table headers <th>)
			for (i = 1; i < rows.length - 1; i++) {
				// start by saying there should be no switching
				shouldSwitch = false;
				// get the two elements as integers you want to compare, one from current row and one from the next
				x = parseInt(rows[i].cells[0].innerText);
				y = parseInt(rows[i + 1].cells[0].innerText);
				// check if the two rows should switch place
				if (x < y) {
					// if so, mark as a switch and break the loop
					shouldSwitch = true;
					break;
				}
			}
			if (shouldSwitch) {
				// if a switch has been marked, make the switch and mark that a switch has been done
				rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
				switching = true;
			}
		}
	};

	// Write JSON into readible format
	const output = (inp) => {
		$("#monster-info-body").empty();
		document
			.getElementById("monster-info-body")
			.appendChild(document.createElement("pre")).innerHTML = inp;
	};

	// Colorize the formatted JSON object because it looks nicer
	const syntaxHighlight = (json) => {
		json = json
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;");
		return json.replace(
			/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
			function (match) {
				var cls = "number";
				if (/^"/.test(match)) {
					if (/:$/.test(match)) {
						cls = "key";
					} else {
						cls = "string";
					}
				} else if (/true|false/.test(match)) {
					cls = "boolean";
				} else if (/null/.test(match)) {
					cls = "null";
				}
				return '<span class="' + cls + '">' + match + "</span>";
			}
		);
	};

	// Monster Info Button
	$(document).on("click", ".info", function () {
		const x = $(this).attr("id");
		const y = x.slice(2);
		const queryURL =
			"https://frozen-ridge-34491.herokuapp.com/api/monsters/" + y;
		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			let monsterArray = [];
			monsterArray.push(response);
			const obj = monsterArray[0];
			const str = JSON.stringify(obj, undefined, 2);
			$("#monster-info-title").html(monsterArray[0].name);
			monsterArray[0].toString();
			output(syntaxHighlight(str));
		});
	});

	// Heal Button
	$(document).on("click", ".heal", function () {
		const HPId = $(this).attr("id");
		base = HPId;
		currentHP = $("#" + HPId + "-HP").attr("value");
		currentHP =
			parseInt(currentHP) + parseInt($("#" + HPId + "-HPInput").val());
		$("#" + HPId + "-HPInput").val("");
		database.ref().child("Characters").child(HPId).update({
			currentHP: currentHP,
		});
	});

	// Damage Button
	$(document).on("click", ".damage", function () {
		const HPId = $(this).attr("id");
		base = HPId;
		currentHP = $("#" + HPId + "-HP").attr("value");
		currentHP =
			parseInt(currentHP) - parseInt($("#" + HPId + "-HPInput").val());
		$("#" + HPId + "-HPInput").val("");
		database.ref().child("Characters").child(HPId).update({
			currentHP: currentHP,
		});
	});

	// Update HTML on damage or heal
	database
		.ref()
		.child("Characters")
		.on(
			"value",
			function (snapshot) {
				$("#" + base + "-HP").text(
					snapshot.child(base).child("currentHP").val() +
						"/" +
						snapshot.child(base).child("maxHP").val()
				);
				$("#" + base + "-HP").attr(
					"value",
					snapshot.child(base).child("currentHP").val()
				);
			},
			function (errorObject) {
				console.log("Errors handled: " + errorObject.code);
			}
		);

	// Remove combatant from firebase
	database.ref().on(
		"child_removed",
		function (snapshot) {
			event.preventDefault();
			const removeId = snapshot.key;
			var removeVar = "#" + removeId + "-remove";
			$(removeVar).remove();
		},
		function (errorObject) {
			console.log("Errors handled: " + errorObject.code);
		}
	);

	// Remove combatant from table
	$(document).on("click", ".remove", function () {
		const removeId = $(this).attr("id");
		database.ref().child("Characters").child(removeId).remove();
	});

	// When Add Character button is clicked
	$("#new-character").on("click", function (event) {
		event.preventDefault();
		const name = $("#input-name").val().trim();
		const maxHP = $("#input-max-hp").val().trim();
		const currentHP = $("#input-current-hp").val().trim();
		const armorClass = $("#input-ac").val().trim();
		const initiativeNumber = $("#input-initiative").val().trim();
		database.ref().child("Characters").push({
			name: name,
			maxHP: maxHP,
			currentHP: currentHP,
			armorClass: armorClass,
			initiativeNumber: initiativeNumber,
		});
		$("form").trigger("reset");
	});

	// When Load Monster button is clicked
	$("#load-monster").on("click", function (event) {
		event.preventDefault();
		const monster = $("#user-monster").val().trim();
		const quantity = $("#how-many").val().trim();
		let upperCaseMonster = "";
		// Adds monster name to array to convert it to proper format
		const monsterWords = monster.split(" ");
		for (let i = 0; i < monsterWords.length; i++) {
			let monster = monsterWords[i];
			// Converts all letters in name to lower case
			let lowerCaseMonster = monster.toLowerCase();
			// Capitalizes the first letter of each name
			monster =
				lowerCaseMonster.charAt(0).toUpperCase() + lowerCaseMonster.slice(1);
			upperCaseMonster = upperCaseMonster + monster + " ";
		}
		upperCaseMonster.trim();
		const queryURL =
			"https://frozen-ridge-34491.herokuapp.com/api/monsters/?name=" +
			upperCaseMonster;
		$.ajax({
			url: queryURL,
			method: "GET",
		}).then(function (response) {
			// Checks to see if ajax query comes back with result
			if (response.results.length === 0) {
				noSuchMonster();
			} else {
				isSuchMonster();
				const results = response.results[0].url;
				$.ajax({
					url: results,
					method: "GET",
				}).then(function (response) {
					const userMonsterButton =
						"<button type='button' class='btn btn-sm btn-secondary info tblbtn' id='id" +
						response.index +
						"' data-toggle='modal' data-target='#info-modal'>?</button>";
					const userMonsterHP = response.hit_points;
					const userMonsterAC = response.armor_class;
					const userMonsterURL = results;
					const userMonsterName = response.name + userMonsterButton;
					const userMonsterDex = response.dexterity;
					const monsterInitiative = rollInitiative(userMonsterDex);
					let i;
					for (i = 0; i < quantity; i++) {
						database.ref().child("Characters").push({
							armorClass: userMonsterAC,
							initiativeNumber: monsterInitiative,
							currentHP: userMonsterHP,
							maxHP: userMonsterHP,
							name: userMonsterName,
							URL: userMonsterURL,
						});
					}
				});
			}
		});
		$("form").trigger("reset");
	});
});
