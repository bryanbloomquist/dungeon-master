import React from "react";
import DiceRoller from "./DiceRoller/DiceRoller";
import MonsterInput from "./MonsterInput/MonsterInput";
import PlayerInput from "./PlayerInput/PlayerInput";

const accordion = (props) => {
	return (
		<div className='accordion'>
			<DiceRoller
				classname={props.showDice ? "diceRoller" : "diceRoller hidden"}
			/>
			<MonsterInput
				classname={props.showNpc ? "addMonster" : "addMonster hidden"}
				optionsNpc={props.optionsNpc}
				clickedNpc={props.clickedNpc}
				changedNpc={props.changedNpc}
				changedNpcNum={props.changedNpcNum}
			/>
			<PlayerInput classname={props.showPc ? "addPc" : "addPc hidden"} />
		</div>
	);
};

export default accordion;
