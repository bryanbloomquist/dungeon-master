import React from "react";

const backdrop = (props) =>
	props.show ? (
		<div className='modal__backdrop' onClick={props.clicked} />
	) : null;

export default backdrop;
