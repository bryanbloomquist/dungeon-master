import React from "react";

const button = (props) => (
	<button
		className='sidebar__button'
		onClick={props.clicked}
		value={props.value}
	>
		{props.name}
	</button>
);

export default button;
