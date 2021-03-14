import React, { useContext } from "react";
import { Context } from "../../AppContext";

const MainBody = (props) => {
	const { nameEntrd, nameVrify } = useContext(Context);

	return nameEntrd && nameVrify ? (
		<div className='mainBody'>{props.children}</div>
	) : null;
};

export default MainBody;
