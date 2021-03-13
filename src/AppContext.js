import React, { useState } from "react";

const Context = React.createContext({});

const Provider = ({ children }) => {
	const [testContext, setTestContext] = useState("Context is working!");

	const handleInputChange = (event) => setTestContext(event.target.value);

	return (
		<Context.Provider value={{ testContext, handleInputChange }}>
			{children}
		</Context.Provider>
	);
};

export { Context, Provider };
