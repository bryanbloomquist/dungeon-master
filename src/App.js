import React, { Component } from "react";
import firebase from "./Components/Firebase/Firebase";

const db = firebase.firestore();

class App extends Component {
	state = {
		namesArray: [],
		monstersArray: [],
	};

	fetchFirestore = () => {
		db.collection("srd__monsters")
			.doc("monster__names")
			.get()
			.then((doc) => {
				const tempArray = doc.data().namesArray;
				this.setState({ namesArray: tempArray });
			});
		db.collection("srd__monsters")
			.doc("monster__stats")
			.get()
			.then((doc) => {
				const tempArray = doc.data().monsterData;
				let tempArr2 = [];
				tempArray.forEach((item) => {
					tempArr2.push(JSON.parse(item));
				});

				this.setState({ monstersArray: tempArr2 });
			});
	};

	componentDidMount() {
		this.fetchFirestore();
	}

	render() {
		return (
			<div className='App'>
				<h1>Coming Soon</h1>
			</div>
		);
	}
}

export default App;
