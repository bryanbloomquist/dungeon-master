import React from "react";

const button = (props) => (
	<button onClick={props.clicked} value={props.value}>
		{props.title}
	</button>
);

export default button;
