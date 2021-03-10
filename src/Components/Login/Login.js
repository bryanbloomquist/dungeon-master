import React from "react";
import Button from "../Button/Button";

const login = (props) => (
	<div className='login'>
		<input
			type='text'
			placeholder='Enter Group Name...'
			onChange={props.changed}
			value={props.name}
			onKeyPress={props.enter}
		/>
		<Button clicked={props.clicked} title={"submit"} />
	</div>
);

export default login;
