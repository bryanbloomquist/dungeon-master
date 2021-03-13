import React, { useContext } from "react";
import { Context } from "../../../../AppContext";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

const PlayerInput = (props) => {
	const { testContext, handleInputChange } = useContext(Context);

	return (
		<div className={props.classname}>
			<h2>Add Player</h2>
			<Input
				type='text'
				text='Add Character Name...'
				changed={handleInputChange}
				value={testContext}
			/>
			<Input
				type='number'
				text='Add Initiative Rol...'
				changed={handleInputChange}
				value={testContext}
			/>
			<Input
				type='number'
				text='Add Armor Class...'
				changed={handleInputChange}
				value={testContext}
			/>
			<Input
				type='number'
				text='Add Hit Points...'
				changed={handleInputChange}
				value={testContext}
			/>
			<Button clicked={props.clickedPc} title={"submit"} />
		</div>
	);
};

export default PlayerInput;
