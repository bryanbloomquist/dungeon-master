import firebase from "./Components/Firebase/Firebase";

const db = firebase.firestore();

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