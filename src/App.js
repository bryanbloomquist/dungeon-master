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
			db.collection("table__groups")
				.doc(this.state.groupName)
				.get()
				.then((doc) =>
					doc.exists ? this.setState({ groupExists: true }) : null
				);

			this.setState({ nameEntered: true });
			console.log(this.state.groupName);
			console.log(this.state.monstersArray);
			console.log(this.state.nameVerified);
		}
	};

	confirmHandler = (el) => {
		const choice = el.target.value;
		const exists = this.state.groupExists;
		console.log(choice);
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
				groupName: "",
			});
		}
		console.log(this.state.nameVerified);
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
		// let display;
		// if (!this.state.nameVerified && !this.state.nameEntered) {
		// 	display = (
		// 		<Login
		// 			clicked={this.loginHandler}
		// 			name={this.state.groupName}
		// 			changed={this.groupNameChangeHandler}
		// 			enter={(e) => (e.key === "Enter" ? this.loginHandler() : null)}
		// 		/>
		// 	);
		// } else if (!this.state.nameVerified && this.state.nameEntered) {
		// 	display = (
		// 		<Confirm
		// 			name={this.state.groupName}
		// 			exists={this.state.groupExists}
		// 			clicked={(el) => this.confirmHandler(el)}
		// 		/>
		// 	);
		// } else {
		// 	display = (
		// 		<MainBody>
		// 			<Sidebar>
		// 				<div>DiceRoller</div>
		// 				<div>Add NPC</div>
		// 				<div>Add PC</div>
		// 			</Sidebar>
		// 			<div>Combat Tracker</div>
		// 		</MainBody>
		// 	);
		// }
		return (
			// 	<Aux>
			// 		<Banner />
			// 		{display}
			// 	</Aux>
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
