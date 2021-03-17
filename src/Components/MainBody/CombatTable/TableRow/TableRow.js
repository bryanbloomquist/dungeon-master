import React from "react";
import Button from "../../../Button/Button";

const TableRow = (props) => {
	return (
		<tr>
			<td>{props.init}</td>
			<td>{props.name}</td>
			<td>{props.armr}</td>
			<td>
				{props.dmge}/{props.hlth}
			</td>
			<td>
				<input
					type='number'
					onChange={props.changed}
					// value={props.value}
				/>
			</td>
			<td>
				<Button
					class='healBtn'
					clicked={props.healed}
					title={<i className='fas fa-heart'></i>}
				/>
			</td>
			<td>
				<Button
					class='dmgeBtn'
					clicked={props.attacked}
					title={<i className='fas fa-heart-broken'></i>}
				/>
			</td>
			<td>
				<Button
					class='deadBtn'
					clicked={props.killed}
					title={<i className='fas fa-skull-crossbones'></i>}
				/>
			</td>
		</tr>
	);
};

export default TableRow;
