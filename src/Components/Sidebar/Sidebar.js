import React, { useContext } from "react";
import { Context } from "../../AppContext";
import Button from "../Button/Button";
import Accordion from "./Accordion/Accordion";

const Sidebar = (props) => {
	const { sidebarHandler } = useContext(Context);

	return (
		<div className='sidebar'>
			<Button
				clicked={sidebarHandler}
				value='dice'
				title={<i className='fas fa-dice-d20 fa-spin'></i>}
			/>
			<Button clicked={sidebarHandler} value='monster' title='add NPC' />
			<Button clicked={sidebarHandler} value='players' title='add PC' />
			<Accordion />
		</div>
	);
};

export default Sidebar;
