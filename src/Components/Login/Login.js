import React from "react";

const login = (props) => (
	<div className='login'>
		<input
			type='text'
			placeholder='Enter Your Group Name...'
			onChange={props.changed}
			value={props.name}
			onKeyPress={props.enter}
		></input>
		<button onClick={props.clicked}>Submit</button>
	</div>
);

export default login;
