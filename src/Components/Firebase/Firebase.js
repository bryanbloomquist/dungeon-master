import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCa1EKt3Y1EfURzp0TyfH3KDLvFcDH_Od0",
	authDomain: "bluequest-dungeon-master.firebaseapp.com",
	projectId: "bluequest-dungeon-master",
	storageBucket: "bluequest-dungeon-master.appspot.com",
	messagingSenderId: "535063050679",
	appId: "1:535063050679:web:ec855131e8e8c3809dd032",
	measurementId: "G-4RDXHG3E6Z",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
