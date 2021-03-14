import React, { useState, useEffect } from "react";
import Firebase from "./Components/Firebase/Firebase";

const db = Firebase.firestore();

const Context = React.createContext({});

const Provider = ({ children }) => {
	// *** Firestore Data *** //

	const [monsterNamesArray, setMonsterNamesArray] = useState([]);
	const [monsterStatsArray, setMonsterStatsArray] = useState([]);
	const [monsterOptions, setMonsterOptions] = useState([]);
	const fetchFirestore = () => {
		console.log("Hello World");
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
		console.log("Hello");
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
		}
		setNameEntrd(true);
	};
	const handleGroupVerify = (el) => {
		const choice = el.target.value;
		const exists = groupExst;
		if (choice === "yes" && exists === true) {
			setNameVrify(true);
			createMonsterOptions();
		} else if (choice === "yes" && exists === false) {
			setNameVrify(false);
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
		console.log(target);
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
	const npcChangeHandler = (event) => setNpcSelected(event.value);
	const numChangeHandler = (event) => setNumSelected(event.target.value);
	const loadMonsterStats = () => {
		if (npcSelected && numSelected) {
			const tempArr = [...monsterStatsArray];
			const selectedNPC = tempArr.filter((el) => {
				return el.index === npcSelected;
			});
			console.log(selectedNPC);
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
		if (charName && charInit && charArmr && charHlth) {
			setCharStat({
				name: charName,
				init: charInit,
				armr: charArmr,
				hlth: charHlth,
			});
		}
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
