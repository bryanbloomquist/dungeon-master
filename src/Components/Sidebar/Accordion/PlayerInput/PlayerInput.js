import React from "react";
import Button from "../../../Button/Button";

const playerInput = (props) => (
	<div className={props.classname}>
		<h2>Add Player</h2>
		<h3>Character Name</h3>
		<h3>Initiative Roll</h3>
		<h3>Armor Class</h3>
		<h3>Max Health</h3>
		<Button clicked={props.clickedPc} title={"submit"} />
	</div>
);

export default playerInput;
