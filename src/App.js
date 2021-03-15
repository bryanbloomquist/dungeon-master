import React from "react";
import { Provider } from "./AppContext";
import Banner from "./Components/Banner/Banner";
import Login from "./Components/Login/Login";
import Confirm from "./Components/Login/Confirm/Confirm";
import MainBody from "./Components/MainBody/MainBody";
import Sidebar from "./Components/MainBody/Sidebar/Sidebar";
import CombatTable from "./Components/MainBody/CombatTable/CombatTable";

import "./SCSS/main.scss";

const App = () => {
	return (
		<Provider>
			<Banner />
			<Login />
			<Confirm />
			<MainBody>
				<Sidebar />
				<CombatTable />
			</MainBody>
		</Provider>
	);
};

export default App;
