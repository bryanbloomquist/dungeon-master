import React, { useContext } from "react";
import { Context } from "../../../../../AppContext";
import Select from "react-select";
import Button from "../../../../Button/Button";

const MonsterInput = () => {
	const {
		monsterOptions,
		showNpc,
		npcChangeHandler,
		numChangeHandler,
		loadMonsterStats,
	} = useContext(Context);

	return (
		<div className={showNpc ? "addMonster" : "addMonster hidden"}>
			<h2>Add Monster</h2>
			<Select
				className='addMonster__input--mon'
				options={monsterOptions}
				onChange={npcChangeHandler}
				isSearchable={true}
			/>
			<input
				className='addMonster__input--num'
				type='number'
				min='1'
				max='12'
				placeholder='How Many?'
				onChange={numChangeHandler}
			/>
			<Button clicked={loadMonsterStats} title={"submit"} />
		</div>
	);
};

export default MonsterInput;
