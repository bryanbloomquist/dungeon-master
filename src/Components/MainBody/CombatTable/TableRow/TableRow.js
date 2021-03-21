import React from "react";
import Button from "../../../Button/Button";

const TableRow = (props) => {
	return (
		<tr>
			<td>
				{props.type === "player" ? (
					<Button class='initBtn' clicked={props.update} title={props.init} />
				) : (
					props.init
				)}
			</td>
			<td onClick={props.loadStats}>{props.name}</td>
			<td>{props.armr}</td>
			<td>
				{props.dmge}/{props.hlth}
			</td>
			<td>
				<input type='number' onChange={props.changed} />
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
