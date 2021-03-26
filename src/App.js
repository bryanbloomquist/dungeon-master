import React from "react";
import { Provider } from "./AppContext";
import Banner from "./Components/Banner/Banner";
import Login from "./Components/Login/Login";
import Confirm from "./Components/Login/Confirm/Confirm";
import MainBody from "./Components/MainBody/MainBody";
import Modal from "./Components/Modal/Modal";

import "./SCSS/main.scss";

const App = () => {
	return (
		<Provider>
			<Banner />
			<Login />
			<Confirm />
			<MainBody />
			<Modal />
		</Provider>
	);
};

export default App;
