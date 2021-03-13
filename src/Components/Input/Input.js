import React from "react";

const input = (props) => (
	<input
		type={props.type}
		placeholder={props.text}
		onChange={props.changed}
		value={props.value}
		onKeyPress={props.enter}
	/>
);

export default input;
