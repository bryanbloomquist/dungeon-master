import React, { useState, useEffect } from "react";
import Firebase from "./Firebase";

const db = Firebase.firestore();

const Context = React.createContext({});

const Provider = ({ children }) => {
	// *** Firestore Data *** //

	const [monsterNamesArray, setMonsterNamesArray] = useState([]);
	const [monsterStatsArray, setMonsterStatsArray] = useState([]);
	const [monsterOptions, setMonsterOptions] = useState([]);

	const fetchFirestore = () => {
		console.log("***FUNC*** fechFirestore");
		db.collection("srd__monsters")
			.doc("monster__names")
			.get()
			.then((doc) => {
				const tempArr = doc.data().namesArray;
				setMonsterNamesArray(tempArr);
			});
		db.collection("srd__monsters")
			.doc("monster__stats")
			.get()
			.then((doc) => {
				const arr1 = doc.data().monsterData;
				const arr2 = [];
				arr1.forEach((el) => arr2.push(JSON.parse(el)));
				setMonsterStatsArray(arr2);
			});
	};

	const createMonsterOptions = () => {
		console.log("***FUNC*** createMonsterOptions");
		let arr1 = [...monsterNamesArray];
		let arr2 = [];
		arr1.forEach((el) => arr2.push({ label: el.name, value: el.index }));
		setMonsterOptions(arr2);
	};

	useEffect(() => {
		fetchFirestore();
	}, []);

	// *** Login *** //

	const [groupName, setGroupName] = useState("");
	const [groupExst, setGroupExst] = useState(false);
	const [nameEntrd, setNameEntrd] = useState(false);
	const [nameVrify, setNameVrify] = useState(false);

	const handleGroupChange = (event) => setGroupName(event.target.value);

	const handleLoginSubmit = () => {
		console.log("***FUNC*** handleLoginSubmit");
		if (groupName) {
			db.collection("table__groups")
				.doc(groupName)
				.get()
				.then((doc) => (doc.exists ? setGroupExst(true) : null));
		}
		setNameEntrd(true);
	};

	const handleGroupVerify = (el) => {
		console.log("***FUNC*** handleGroupVerify");
		const choice = el.target.value;
		const exists = groupExst;
		if (choice === "yes" && exists === true) {
			setNameVrify(true);
			createMonsterOptions();
			loadTable();
		} else if (choice === "yes" && exists === false) {
			setNameVrify(true);
			db.collection("table__groups")
				.doc(groupName)
				.set({ created: new Date() });
			createMonsterOptions();
		} else if (choice === "no") {
			setNameEntrd(null);
			setGroupExst(false);
			setGroupName("");
		}
	};

	// *** Sidebar Toggle *** //

	const [showDice, setShowDice] = useState(false);
	const [showNpc, setShowNpc] = useState(false);
	const [showPc, setShowPc] = useState(false);

	const sidebarHandler = (e) => {
		console.log("***FUNC*** sidebarHandler");
		const target = e.target.value;
		let boolean;
		switch (target) {
			case "dice":
				boolean = !showDice;
				setShowDice(boolean);
				setShowNpc(false);
				setShowPc(false);
				break;
			case "monster":
				boolean = !showNpc;
				setShowDice(false);
				setShowNpc(boolean);
				setShowPc(false);
				break;
			case "players":
				boolean = !showPc;
				setShowDice(false);
				setShowNpc(false);
				setShowPc(boolean);
				break;
			default:
				break;
		}
	};

	// *** Dice Roller *** //

	// *** Add Monster *** //

	const [npcSelected, setNpcSelected] = useState(null);
	const [numSelected, setNumSelected] = useState(1);
	const [addMonster, setAddMonster] = useState({
		init: "",
		name: "",
		armr: "",
		hlth: "",
	});

	const npcChangeHandler = (event) => setNpcSelected(event.value);

	const numChangeHandler = (event) => setNumSelected(event.target.value);

	const loadMonsterStats = () => {
		console.log("***FUNC*** loadMonsterStats");
		if (npcSelected && numSelected) {
			const tempArr = [...monsterStatsArray];
			const selectedNPC = tempArr.filter((el) => el.index === npcSelected);
			console.log(selectedNPC);
			const newMonsterDext = selectedNPC[0].dexterity;
			const newMonsterInit = rollInitiative(newMonsterDext);
			const newMonsterName = selectedNPC[0].name;
			const newMonsterArmr = selectedNPC[0].armor_class;
			const newMonsterHlth = selectedNPC[0].hit_points;
			const newMonster = {
				init: newMonsterInit,
				name: newMonsterName,
				armr: newMonsterArmr,
				hlth: newMonsterHlth,
			};
			// setAddMonster(newMonster);
			addToTable(newMonster);
			setAddMonster(newMonster);
		}
	};

	// *** Add Player *** //

	const [charName, setCharName] = useState("");
	const [charInit, setCharInit] = useState("");
	const [charArmr, setCharArmr] = useState("");
	const [charHlth, setCharHlth] = useState("");
	const [charStat, setCharStat] = useState({});

	const handleCharNameChange = (event) => setCharName(event.target.value);

	const handleCharInitChange = (event) => setCharInit(event.target.value);

	const handleCharArmrChange = (event) => setCharArmr(event.target.value);

	const handleCharHlthChange = (event) => setCharHlth(event.target.value);

	const addNewChar = () => {
		console.log("***FUNC*** addNewChar");
		if (charName && charInit && charArmr && charHlth) {
			const newCharacter = {
				init: parseInt(charInit),
				name: charName,
				armr: parseInt(charArmr),
				hlth: parseInt(charHlth),
			};
			addToTable(newCharacter);
			setCharStat(newCharacter);
		}
	};

	// *** Combat Table *** //

	const [tableData, setTableData] = useState([]);

	const loadTable = () => {
		console.log("***FUNC*** loadTable");
	};

	const addToTable = (newEntry) => {
		console.log("***FUNC*** addToTable");
		// setAddMonster(newEntry);
		db.collection("table__groups")
			.doc(groupName)
			.get()
			.then((doc) => {
				let arr1 = doc.data().table__data;
				let arr2 = arr1 ? [...JSON.parse(arr1)] : [];
				for (let i = 0; i < numSelected; i++) {
					arr2.push(newEntry);
				}
				console.log(arr2);
				const finalArr = sortTable(arr2);
				setTableData(finalArr);
				updateTable(finalArr);
			});
	};

	const updateTable = (arr2) => {
		console.log("***FUNC*** updateTable");
		console.log(arr2);
		db.collection("table__groups")
			.doc(groupName)
			.set({ table__data: JSON.stringify(arr2) });
	};

	// useEffect(() => {
	const sortTable = (arr) => {
		console.log("***FUNC*** sortTable");
		let unsorted = [...arr];
		unsorted.sort((a, b) => parseFloat(b.init) - parseFloat(a.init));
		return unsorted;
	};
	// 	sortTable();
	// }, []);

	const rollInitiative = (dex) => {
		console.log("***FUNC*** rollInitiative");
		let initiative = Math.floor(Math.random() * 20) + 1;
		if (dex === 1) {
			initiative -= 5;
		} else if (dex === 2 || 3) {
			initiative -= 4;
		} else if (dex === 4 || 5) {
			initiative -= 3;
		} else if (dex === 6 || 7) {
			initiative -= 2;
		} else if (dex === 8 || 9) {
			initiative -= 1;
		} else if (dex === 12 || 13) {
			initiative += 1;
		} else if (dex === 14 || 15) {
			initiative += 2;
		} else if (dex === 16 || 17) {
			initiative += 3;
		} else if (dex === 18 || 19) {
			initiative += 4;
		} else if (dex === 20 || 21) {
			initiative += 5;
		} else if (dex === 22 || 23) {
			initiative += 6;
		} else if (dex === 24 || 25) {
			initiative += 7;
		} else if (dex === 26 || 27) {
			initiative += 8;
		} else if (dex === 28 || 29) {
			initiative += 9;
		} else if (dex === 30) {
			initiative += 10;
		}
		return initiative;
	};

	return (
		<Context.Provider
			value={{
				monsterNamesArray,
				monsterStatsArray,
				monsterOptions,
				fetchFirestore,
				groupName,
				groupExst,
				nameEntrd,
				nameVrify,
				handleGroupChange,
				handleLoginSubmit,
				handleGroupVerify,
				showDice,
				showNpc,
				showPc,
				sidebarHandler,
				npcSelected,
				numSelected,
				addMonster,
				tableData,
				npcChangeHandler,
				numChangeHandler,
				loadMonsterStats,
				charName,
				charInit,
				charArmr,
				charHlth,
				charStat,
				handleCharNameChange,
				handleCharInitChange,
				handleCharArmrChange,
				handleCharHlthChange,
				addNewChar,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { Context, Provider };
