import React, { useContext } from "react";
import { Context } from "../../../AppContext";

const InitiativeModalContent = () => {
	const { handleNewInit, submitNewInit } = useContext(Context);
	return (
		<div className='characterModal'>
			<span>Enter new initiative value:</span>
			<input onChange={handleNewInit} type='number' min='-5' max='30' />
			<button onClick={submitNewInit}>Submit</button>
		</div>
	);
};

export default InitiativeModalContent;
