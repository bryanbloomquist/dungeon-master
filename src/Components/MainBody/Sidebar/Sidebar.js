import React, { useContext } from "react";
import { Context } from "../../../AppContext";
import Button from "../../Button/Button";
import Accordion from "./Accordion/Accordion";
import { D20 } from "../../Icons/Icons";

const Sidebar = (props) => {
	const { sidebarHandler } = useContext(Context);

	return (
		<div className='sidebar'>
			<Button clicked={sidebarHandler} value='dice' title={<D20 />} />
			<Button clicked={sidebarHandler} value='monster' title='add NPC' />
			<Button clicked={sidebarHandler} value='players' title='add PC' />
			<Accordion />
		</div>
	);
};

export default Sidebar;
