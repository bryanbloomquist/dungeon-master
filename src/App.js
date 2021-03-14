import React from "react";
import { Provider } from "./AppContext";
import Banner from "./Components/Banner/Banner";
import Login from "./Components/Login/Login";
import Confirm from "./Components/Confirm/Confirm";
import MainBody from "./Components/MainBody/MainBody";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./SCSS/main.scss";

const App = () => {
	return (
		<Provider>
			<Banner />
			<Login />
			<Confirm />
			<MainBody>
				<Sidebar />
				<div>Combat Tracker</div>
			</MainBody>
		</Provider>
	);
};

export default App;
