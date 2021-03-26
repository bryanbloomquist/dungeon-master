const input = (props) => (
	<input
		type={props.type}
		placeholder={props.text}
		onChange={props.changed}
		value={props.value}
		id={props.id ? props.id : null}
	/>
);

export default input;
