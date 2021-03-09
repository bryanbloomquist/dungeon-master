import React from "react";
import Select from "react-select";
import Aux from "../../../../Containers/HOC/Aux";

const monsterInput = (props) => (
	<Aux>
		<h2>Add Monster:</h2>
		<Select
			className='addMonster__input--mon'
			options={props.options}
			onChange={props.changedNpc}
			isSearchable={true}
		/>
		<input
			className='addMonster__input--num'
			type='number'
			min='1'
			max='12'
			placeholder='How Many?'
			onChange={props.changedNum}
		/>
		<button onClick={props.clicked}>Submit</button>
	</Aux>
);

export default monsterInput;
