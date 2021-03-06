import React, { useState, useEffect } from "react";
import Firebase from "./Firebase";

const db = Firebase.firestore();

const keygen = require("keygenerator");

const Context = React.createContext({});

const Provider = ({ children }) => {
	// *** Firestore Data *** //

	const [monsterNamesArray, setMonsterNamesArray] = useState([]);
	const [monsterStatsArray, setMonsterStatsArray] = useState([]);
	const [monsterOptions, setMonsterOptions] = useState([]);

	const fetchFirestore = () => {
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
		if (groupName) {
			db.collection("table__groups")
				.doc(groupName)
				.get()
				.then((doc) => (doc.exists ? setGroupExst(true) : null));
			setNameEntrd(true);
		}
	};

	const handleGroupVerify = (el) => {
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
		key: "",
	});

	const npcChangeHandler = (event) => setNpcSelected(event.value);

	const numChangeHandler = (event) => setNumSelected(event.target.value);

	const loadMonsterStats = () => {
		if (npcSelected && numSelected) {
			const tempArr = [...monsterStatsArray];
			const selectedNPC = tempArr.filter((el) => el.index === npcSelected);
			const newMonsterDext = selectedNPC[0].dexterity;
			const newMonsterInit = rollInitiative(newMonsterDext);
			const newMonsterName = selectedNPC[0].name;
			const newMonsterArmr = selectedNPC[0].armor_class;
			const newMonsterHlth = selectedNPC[0].hit_points;
			const newMonsterKey = keygen.session_id();
			const newMonster = {
				init: newMonsterInit,
				name: newMonsterName,
				armr: newMonsterArmr,
				hlth: newMonsterHlth,
				dmge: newMonsterHlth,
				type: "monster",
				key: newMonsterKey,
			};
			// setAddMonster(newMonster);
			addToTableData(newMonster);
			setAddMonster(newMonster);
		}
	};

	// *** Add Player *** //

	const [charName, setCharName] = useState("");
	const [charInit, setCharInit] = useState("");
	const [charArmr, setCharArmr] = useState("");
	const [charHlth, setCharHlth] = useState("");
	const [charDmge, setCharDmge] = useState("");
	const [charStat, setCharStat] = useState({});

	const handleCharNameChange = (event) => setCharName(event.target.value);

	const handleCharInitChange = (event) => setCharInit(event.target.value);

	const handleCharArmrChange = (event) => setCharArmr(event.target.value);

	const handleCharHlthChange = (event) => {
		setCharHlth(event.target.value);
		setCharDmge(event.target.value);
	};

	const addNewChar = () => {
		if (charName && charInit && charArmr && charHlth) {
			const newCharacter = {
				init: parseInt(charInit),
				name: charName,
				armr: parseInt(charArmr),
				hlth: parseInt(charHlth),
				dmge: parseInt(charDmge),
				type: "player",
				key: keygen.session_id(),
			};
			addToTableData(newCharacter);
			setCharStat(newCharacter);
		}
	};

	// *** Combat Table *** //

	const [tableData, setTableData] = useState([]);
	const [healthValue, setHealthValue] = useState(0);

	const loadTable = () => {
		db.collection("table__groups")
			.doc(groupName)
			.get()
			.then((doc) => {
				let arr1 = doc.data().table__data;
				let arr2 = arr1 ? [...JSON.parse(arr1)] : [];
				setTableData(arr2);
			});
	};

	const addToTableData = (newEntry) => {
		const tempArr = [...tableData];
		for (let i = 0; i < numSelected; i++) {
			const singleMonster = { ...newEntry };
			singleMonster.key = keygen.session_id();
			tempArr.push(singleMonster);
		}
		const finalArr = sortTableData(tempArr);
		setTableData(finalArr);
		updateTableData(finalArr);
		setNumSelected(1);
		setCharName("");
	};

	const updateTableData = (newData) => {
		setTableData(newData);
		db.collection("table__groups")
			.doc(groupName)
			.set({ table__data: JSON.stringify(newData) });
	};

	const sortTableData = (arr) => {
		let unsorted = [...arr];
		unsorted.sort((a, b) => parseFloat(b.init) - parseFloat(a.init));
		return unsorted;
	};

	const rollInitiative = (dex) => {
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

	const handleValueChange = (event) => setHealthValue(event.target.value);

	const handleHealthButton = (target) => {
		let tableArray = [...tableData];
		let index = tableArray.map((e) => e.key).indexOf(target);
		let update = tableArray[index];
		update.dmge = parseInt(update.dmge) + parseInt(healthValue);
		tableArray[index] = update;
		updateTableData(tableArray);
	};

	const handleDmgeButton = (target) => {
		let tableArray = [...tableData];
		let index = tableArray.map((e) => e.key).indexOf(target);
		let update = tableArray[index];
		update.dmge = parseInt(update.dmge) - parseInt(healthValue);
		tableArray[index] = update;
		updateTableData(tableArray);
	};

	const handleDeathButton = (target) => {
		let tableArray = [...tableData];
		let index = tableArray.map((e) => e.key).indexOf(target);
		tableArray.splice(index, 1);
		updateTableData(tableArray);
	};

	// *** Change Initiative Value *** //

	const [newInitValue, setNewInitValue] = useState(0);
	const [newArmrValue, setNewArmrValue] = useState(0);
	const [newHlthValue, setNewHlthValue] = useState(0);
	const [stats2Update, setStats2Update] = useState([]);
	const [updateInitTarget, setUpdateInitTarget] = useState("");

	const handleCharUpdate = (target) => {
		let tableArray = [...tableData];
		let index = tableArray.map((e) => e.key).indexOf(target);
		let update = tableArray[index];
		setNewInitValue(parseInt(update.init));
		setNewArmrValue(parseInt(update.armr));
		setNewHlthValue(parseInt(update.hlth));
		setStats2Update(tableArray[index]);
		setUpdateInitTarget(target);
		setIsMonsterManual(false);
		const bool = !showModal;
		setShowModal(bool);
	};

	const handleNewInit = (event) => setNewInitValue(event.target.value);

	const handleNewArmr = (event) => setNewArmrValue(event.target.value);

	const handleNewHlth = (event) => setNewHlthValue(event.target.value);

	const submitNewStats = () => {
		let newCharStats = { ...stats2Update };
		newCharStats.init = newInitValue;
		newCharStats.armr = newArmrValue;
		newCharStats.hlth = newHlthValue;
		newCharStats.dmge = newHlthValue;
		let tableArray = [...tableData];
		let index = tableArray.map((e) => e.key).indexOf(updateInitTarget);
		tableArray[index] = newCharStats;
		let finalArray = sortTableData(tableArray);
		updateTableData(finalArray);
		setShowModal(false);
	};

	// *** Modal *** //

	const [showModal, setShowModal] = useState(false);
	const [monsterLoaded, setMonsterLoaded] = useState(false);
	const [isMonsterManual, setIsMonsterManual] = useState(true);
	const [monsterManual, setMonsterManual] = useState({});

	const handleLoadStats = (target) => {
		const monster = monsterStatsArray.find((e) => e.name === target);
		if (monster) {
			const bool = !showModal;
			setIsMonsterManual(true);
			setMonsterLoaded(bool);
			setMonsterManual(monster);
			setShowModal(bool);
		}
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<Context.Provider
			value={{
				monsterNamesArray,
				monsterStatsArray,
				monsterOptions,
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
				tableData,
				healthValue,
				handleValueChange,
				handleHealthButton,
				handleDmgeButton,
				handleDeathButton,
				newInitValue,
				newArmrValue,
				newHlthValue,
				stats2Update,
				handleCharUpdate,
				handleNewInit,
				handleNewArmr,
				handleNewHlth,
				submitNewStats,
				showModal,
				monsterManual,
				isMonsterManual,
				monsterLoaded,
				handleLoadStats,
				closeModal,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { Context, Provider };
