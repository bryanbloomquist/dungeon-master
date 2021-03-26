const button = (props) => (
	<button
		onClick={props.clicked}
		value={props.value}
		className={props.class ? props.class : null}
	>
		{props.title}
	</button>
);

export default button;
