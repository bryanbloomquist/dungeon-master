import React from "react";
import Button from "../Button/Button";
import Accordion from "./Accordion/Accordion";

const sidebar = (props) => {
	return (
		<div className='sidebar'>
			<Button
				clicked={props.clicked}
				value='dice'
				title={<i class='fas fa-dice-d20 fa-spin'></i>}
			/>
			<Button clicked={props.clicked} value='monster' title='add NPC' />
			<Button clicked={props.clicked} value='players' title='add PC' />
			<Accordion
				showDice={props.showDice}
				showNpc={props.showNpc}
				showPc={props.showPc}
				optionsNpc={props.optionsNpc}
				clickedNpc={props.clickedNpc}
				changedNpc={props.changedNpc}
				changedNpcNum={props.changedNpcNum}
			/>
		</div>
	);
};

export default sidebar;
