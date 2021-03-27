import React, { useContext } from "react";
import { Context } from "../../../AppContext";
import Input from "../../Input/Input";
import Label from "../../Label/Label";

const CharcacterModalContent = () => {
	const {
		newInitValue,
		newArmrValue,
		newHlthValue,
		stats2Update,
		handleNewInit,
		handleNewArmr,
		handleNewHlth,
		submitNewStats,
	} = useContext(Context);

	return (
		<div className='characterModal'>
			<Label for='newInit'>New Initiative:</Label>
			<Input
				type='num'
				placeholder={newInitValue}
				value={newInitValue}
				changed={handleNewInit}
				id='newInit'
				min={-5}
				max={30}
			/>
			<Label for='newArmr'>New Armor Class:</Label>
			<Input
				type='num'
				placeholder={stats2Update.armr}
				value={newArmrValue}
				changed={handleNewArmr}
				id='newArmr'
				min={0}
				max={25}
			/>
			<Label for='newHlth'>New Hit Points:</Label>
			<Input
				type='num'
				placeholder={stats2Update.hlth}
				value={newHlthValue}
				changed={handleNewHlth}
				id='newHlth'
				min={0}
				max={500}
			/>
			<button onClick={submitNewStats}>Update {stats2Update.name}</button>
		</div>
	);
};

export default CharcacterModalContent;
