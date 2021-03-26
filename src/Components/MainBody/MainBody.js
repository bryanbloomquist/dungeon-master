import React, { useContext } from "react";
import { Context } from "../../AppContext";
import Sidebar from "./Sidebar/Sidebar";
import CombatTable from "./CombatTable/CombatTable";

const MainBody = (props) => {
	const { nameEntrd, nameVrify } = useContext(Context);

	return nameEntrd && nameVrify ? (
		<div className='mainBody'>
			<Sidebar />
			<CombatTable />
		</div>
	) : null;
};

export default MainBody;
