import React from "react";
import Button from "../Button/Button";

const confirm = (props) => {
	return (
		<div className='login'>
			<p>
				{props.exists
					? props.name + " exists, do you want to join?"
					: props.name + " does not exist, do you wish to create this group?"}
			</p>
			<Button clicked={props.clicked} value='yes' title='yes' />
			<Button clicked={props.clicked} value='no' title='no' />
		</div>
	);
};

export default confirm;
