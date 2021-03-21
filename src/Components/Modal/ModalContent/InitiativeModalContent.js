import React, { useContext } from "react";
import { Context } from "../../../AppContext";

const InitiativeModalContent = () => {
	const { handleNewInit, submitNewInit } = useContext(Context);
	return (
		<div className='initiative_modal'>
			<span>Enter new initiative value:</span>
			<input onChange={handleNewInit} />
			<button onClick={submitNewInit}>Submit</button>
		</div>
	);
};

export default InitiativeModalContent;
