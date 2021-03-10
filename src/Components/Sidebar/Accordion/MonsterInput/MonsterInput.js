import React from "react";
import Select from "react-select";
import Button from "../../../Button/Button";

const monsterInput = (props) => (
	<div className='addMonster'>
		<h2>Add Monster:</h2>
		<Select
			className='addMonster__input--mon'
			options={props.optionsNpc}
			onChange={props.changedNpc}
			isSearchable={true}
		/>
		<input
			className='addMonster__input--num'
			type='number'
			min='1'
			max='12'
			placeholder='How Many?'
			onChange={props.changedNpcNum}
		/>
		<Button clicked={props.clickedNpc} title={"submit"} />
	</div>
);

export default monsterInput;
