import React, { useContext } from "react";
import { Context } from "../../../AppContext";

import Button from "../../Button/Button";

const Confirm = (props) => {
	const {
		groupName,
		groupExst,
		nameEntrd,
		nameVrify,
		handleGroupVerify,
	} = useContext(Context);
	return nameEntrd && !nameVrify ? (
		<div className='login'>
			<p>
				{groupExst
					? groupName + " exists, do you want to join?"
					: groupName + " does not exist, do you wish to create this group?"}
			</p>
			<Button clicked={handleGroupVerify} value='yes' title='yes' />
			<Button clicked={handleGroupVerify} value='no' title='no' />
		</div>
	) : null;
};

export default Confirm;
