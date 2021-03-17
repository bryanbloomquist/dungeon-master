import React, { useContext } from "react";
import { Context } from "../../../AppContext";
import TableRow from "./TableRow/TableRow";

const CombatTable = () => {
	const {
		tableData,
		handleValueChange,
		handleHealthButton,
		handleDmgeButton,
		handleDeathButton,
	} = useContext(Context);
	return (
		<table className='combatTable' id='combatTable'>
			<thead className='combatTable__header'>
				<tr>
					<th>Init.</th>
					<th>Name</th>
					<th>A.C.</th>
					<th>H.P.</th>
					<th>Amount (+/-)</th>
					<th>Heal</th>
					<th>Damage</th>
					<th>Dead</th>
				</tr>
			</thead>
			<tbody id='combatTable-Body'>
				{tableData
					? tableData.map((char) => (
							<TableRow
								key={char.key}
								init={char.init}
								name={char.name}
								armr={char.armr}
								dmge={char.dmge}
								hlth={char.hlth}
								changed={handleValueChange}
								healed={() => handleHealthButton(char.key)}
								attacked={() => handleDmgeButton(char.key)}
								killed={() => handleDeathButton(char.key)}
							/>
					  ))
					: null}
			</tbody>
		</table>
	);
};

export default CombatTable;
