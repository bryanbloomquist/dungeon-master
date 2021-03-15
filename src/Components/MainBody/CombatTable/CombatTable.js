import React, { useContext } from "react";
import { Context } from "../../../AppContext";

const CombatTable = () => {
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
			<tbody id='combatTable-Body'></tbody>
		</table>
	);
};

export default CombatTable;
