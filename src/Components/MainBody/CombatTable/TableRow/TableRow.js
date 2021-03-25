import React from "react";
import Button from "../../../Button/Button";
import * as Icon from "../../../Icons/Icons";

const TableRow = (props) => {
	return (
		<tr>
			<td>
				{props.type === "player" ? (
					<Button
						class='initBtn'
						clicked={props.update}
						title={<Icon.Edit />}
					/>
				) : (
					<Button
						class='initBtn'
						clicked={props.loadStats}
						title={<Icon.Info />}
					/>
				)}
			</td>
			<td>{props.init}</td>
			<td>{props.name}</td>
			<td>{props.armr}</td>
			<td>
				{props.dmge}/{props.hlth}
			</td>
			<td>
				<input type='number' onChange={props.changed} />
			</td>
			<td>
				<Button class='healBtn' clicked={props.healed} title={<Icon.Heart />} />
			</td>
			<td>
				<Button
					class='dmgeBtn'
					clicked={props.attacked}
					title={<Icon.Damage />}
				/>
			</td>
			<td>
				<Button class='deadBtn' clicked={props.killed} title={<Icon.Skull />} />
			</td>
		</tr>
	);
};

export default TableRow;
