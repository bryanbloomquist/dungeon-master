import React, { useContext } from "react";
import { Context } from "../../../../AppContext";
import DiceRoller from "./DiceRoller/DiceRoller";
import MonsterInput from "./MonsterInput/MonsterInput";
import PlayerInput from "./PlayerInput/PlayerInput";

const Accordion = () => {
	const { showDice } = useContext(Context);
	return (
		<div className='accordion'>
			<DiceRoller classname={showDice ? "diceRoller" : "diceRoller hidden"} />
			<MonsterInput />
			<PlayerInput />
		</div>
	);
};

export default Accordion;
