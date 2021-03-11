import React, { Component } from "react";
import Firebase from "./Components/Firebase/Firebase";
import Aux from "./Containers/HOC/Aux";
import Banner from "./Components/Banner/Banner";
import Login from "./Components/Login/Login";
import Confirm from "./Components/Confirm/Confirm";
import MainBody from "./Components/MainBody/MainBody";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./SCSS/main.scss";

const db = Firebase.firestore();

class App extends Component {
	state = {
		nameEntered: null,
		groupExists: false,
		nameVerified: null,
		groupName: "",
		selectedNPC: "",
		numberSelected: null,
		namesArray: [],
		monstersArray: [],
		monsterOptions: [],
	};

	fetchFirestore = () => {
		db.collection("srd__monsters")
			.doc("monster__names")
			.get()
			.then((doc) => {
				const tempArr = doc.data().namesArray;
				this.setState({ namesArray: tempArr });
				this.createMonsterOptions();
			});
		db.collection("srd__monsters")
			.doc("monster__stats")
			.get()
			.then((doc) => {
				const arr1 = doc.data().monsterData;
				const arr2 = [];
				arr1.forEach((el) => arr2.push(JSON.parse(el)));
				this.setState({ monstersArray: arr2 });
			});
	};

	createMonsterOptions = () => {
		let arr1 = [...this.state.namesArray];
		console.log(arr1);
		let arr2 = [];
		arr1.forEach((monster) =>
			arr2.push({ label: monster.name, value: monster.index })
		);
		this.setState({ monsterOptions: arr2 });
	};

	loginHandler = () => {
		if (this.state.groupName) {
			db.collection("table__groups")
				.doc(this.state.groupName)
				.get()
				.then((doc) =>
					doc.exists ? this.setState({ groupExists: true }) : null
				);

			this.setState({ nameEntered: true });
		}
	};

	confirmHandler = (el) => {
		const choice = el.target.value;
		const exists = this.state.groupExists;
		if (choice === "yes" && exists === true) {
			this.setState({ nameVerified: true });
		} else if (choice === "yes" && exists === false) {
			this.setState({ nameVerified: true });
			db.collection("table__groups")
				.doc(this.state.groupName)
				.set({ created: new Date() });
		} else if (choice === "no") {
			this.setState({
				nameEntered: null,
				groupExists: false,
				groupName: "",
			});
		}
	};

	groupNameChangeHandler = (event) =>
		this.setState({ groupName: event.target.value });

	sidebarHandler = (e) => {
		console.log(e.target.value);
	};

	npcChangeHandler = (event) => this.setState({ selectedNPC: event.value });

	numChangeHandler = (event) =>
		this.setState({ numberSelected: event.target.value });

	loadMonster = () => {
		if (this.state.selectedNPC && this.state.numberSelected) {
			const tempArr = [...this.state.monstersArray];
			const selectedNPC = tempArr.filter((el) => {
				return el.index === this.state.selectedNPC;
			});
			console.log(selectedNPC);
		}
	};

	componentDidMount() {
		if (!this.state.nameEntered) {
			this.fetchFirestore();
		}
	}

	render() {
		return (
			<Aux>
				<Banner />
				{!this.state.nameVerified ? (
					!this.state.nameEntered ? (
						<Login
							clicked={this.loginHandler}
							name={this.state.groupName}
							changed={this.groupNameChangeHandler}
							enter={(e) => (e.key === "Enter" ? this.loginHandler() : null)}
						/>
					) : (
						<Confirm
							name={this.state.groupName}
							exists={this.state.groupExists}
							clicked={(el) => this.confirmHandler(el)}
						/>
					)
				) : (
					<MainBody>
						<Sidebar
							clicked={(el) => this.sidebarHandler(el)}
							optionsNpc={this.state.monsterOptions}
							clickedNpc={this.loadMonster}
							changedNpc={this.npcChangeHandler.bind(this)}
							changedNpcNum={(el) => this.numChangeHandler(el)}
						/>
						<div>Combat Tracker</div>
					</MainBody>
				)}
			</Aux>
		);
	}
}

export default App;
