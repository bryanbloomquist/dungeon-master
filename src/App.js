import React, { Component } from "react";
import Firebase from "./Components/Firebase/Firebase";
import Aux from "./Containers/HOC/Aux";
import Banner from "./Components/Banner/Banner";
import Login from "./Components/Login/Login";
import MainBody from "./Components/MainBody/MainBody";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./SCSS/main.scss";

const db = Firebase.firestore();

class App extends Component {
	state = {
		nameEntered: null,
		groupName: "",
		namesArray: [],
		monstersArray: [],
	};

	fetchFirestore = () => {
		console.log("Fetch Firestore Here!");
		db.collection("srd__monsters")
			.doc("monster__names")
			.get()
			.then((doc) => {
				const tempArr = doc.data().namesArray;
				this.setState({ namesArray: tempArr });
				console.log("Set Names Array Here!");
			});
		db.collection("srd__monsters")
			.doc("monster__stats")
			.get()
			.then((doc) => {
				const arr1 = doc.data().monsterData;
				const arr2 = [];
				arr1.forEach((el) => arr2.push(JSON.parse(el)));
				this.setState({ monstersArray: arr2 });
				console.log("Set Monsters Array Here!");
			});
	};

	loginHandler = () => {
		if (this.state.groupName) {
			this.setState({ nameEntered: true });
			console.log(this.state.groupName);
			console.log(this.state.monstersArray);
		}
	};

	groupNameChangeHandler = (event) => {
		const typedGroup = event.target.value;
		this.setState({ groupName: typedGroup });
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
				{!this.state.nameEntered ? (
					<Login
						clicked={this.loginHandler}
						name={this.state.groupName}
						changed={this.groupNameChangeHandler}
						enter={(e) => (e.key === "Enter" ? this.loginHandler() : null)}
					/>
				) : (
					<MainBody>
						<Sidebar>
							<div>DiceRoller</div>
							<div>Add NPC</div>
							<div>Add PC</div>
						</Sidebar>
						<div>Combat Tracker</div>
					</MainBody>
				)}
			</Aux>
		);
	}
}

export default App;
