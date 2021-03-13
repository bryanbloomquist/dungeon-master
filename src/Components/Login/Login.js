import React from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

const login = (props) => (
	<div className='login'>
		<Input
			type='text'
			text='Enter Group Name'
			changed={props.changed}
			value={props.name}
			enter={props.enter}
		/>
		<Button clicked={props.clicked} title={"submit"} />
	</div>
);

export default login;
