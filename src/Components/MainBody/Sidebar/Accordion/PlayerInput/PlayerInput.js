import React, { useContext } from "react";
import { Context } from "../../../../../AppContext";
import Button from "../../../../Button/Button";
import Input from "../../../../Input/Input";

const PlayerInput = (props) => {
	const {
		showPc,
		charName,
		charInit,
		charArmr,
		charHlth,
		handleCharNameChange,
		handleCharInitChange,
		handleCharArmrChange,
		handleCharHlthChange,
		addNewChar,
	} = useContext(Context);

	return (
		<div className={showPc ? "addPc" : "addPc hidden"}>
			<h2>Add Player</h2>
			<Input
				type='text'
				text='Add Character Name...'
				changed={handleCharNameChange}
				value={charName}
			/>
			<Input
				type='number'
				text='Add Initiative Roll...'
				changed={handleCharInitChange}
				value={charInit}
			/>
			<Input
				type='number'
				text='Add Armor Class...'
				changed={handleCharArmrChange}
				value={charArmr}
			/>
			<Input
				type='number'
				text='Add Hit Points...'
				changed={handleCharHlthChange}
				value={charHlth}
			/>
			<Button clicked={addNewChar} title={"submit"} />
		</div>
	);
};

export default PlayerInput;
