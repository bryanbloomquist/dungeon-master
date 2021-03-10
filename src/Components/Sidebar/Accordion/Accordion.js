import React from "react";
import DiceRoller from "./DiceRoller/DiceRoller";
import MonsterInput from "./MonsterInput/MonsterInput";
import PlayerInput from "./PlayerInput/PlayerInput";

const accordion = (props) => {
	return (
		<div className='accordion'>
			<DiceRoller />
			<MonsterInput
				optionsNpc={props.optionsNpc}
				clickedNpc={props.clickedNpc}
				changedNpc={props.changedNpc}
				changedNpcNum={props.changedNpcNum}
			/>
			<PlayerInput />
		</div>
	);
};

export default accordion;
