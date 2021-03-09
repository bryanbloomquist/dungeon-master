import React from "react";
import MonsterInput from "./MonsterInput/MonsterInput";

const accordion = (props) => {
	return (
		<div className='accordion'>
			<div>Dice Roller</div>
			<div className='addMonster'>
				<MonsterInput
					options={props.options}
					clicked={props.clicked}
					changedNpc={props.changedNpc}
					changedNum={props.changedNum}
				/>
			</div>
			<div>Add PC</div>
		</div>
	);
};

export default accordion;
