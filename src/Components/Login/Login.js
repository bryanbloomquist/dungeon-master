import React, { useContext } from "react";
import { Context } from "../../AppContext";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Login = () => {
	const {
		groupName,
		nameEntrd,
		nameVrify,
		handleGroupChange,
		handleLoginSubmit,
	} = useContext(Context);

	return !nameEntrd && !nameVrify ? (
		<div className='login'>
			<Input
				type='text'
				text='Enter Group Name'
				changed={handleGroupChange}
				value={groupName}
			/>
			<Button clicked={handleLoginSubmit} title={"submit"} />
		</div>
	) : null;
};
export default Login;
