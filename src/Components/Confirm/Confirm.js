import React from "react";

const confirm = (props) => {
	return (
		<div className='login'>
			<p>
				{props.exists
					? props.name + " exists, do you want to join?"
					: props.name + " does not exist, do you wish to create this group?"}
			</p>
			<button onClick={props.clicked} value='yes'>
				Yes
			</button>
			<button onClick={props.clicked} value='no'>
				No
			</button>
		</div>
	);
};

export default confirm;
