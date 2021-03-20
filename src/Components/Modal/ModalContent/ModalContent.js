import React, { useContext } from "react";
import { Context } from "../../../AppContext";
import Aux from "../../../HOC/Aux";
import styled from "styled-components";

const Title = styled.h2`
	font-size: 4rem;
	margin-bottom: 1rem;
`;

const Row = styled.div`
	margin-bottom: 0.5rem;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-end;
`;

const Attr = styled.span`
	font-size: 1.8rem;
	text-transform: uppercase;
	margin-right: 0.5rem;
`;

const Data = styled.span`
	font-size: 2.4rem;
	margin: 0 2rem 0 0.5rem;
	text-transform: capitalize;
	color: #c41520;
`;

const ModalContent = () => {
	const { monsterManual } = useContext(Context);
	const stats = { ...monsterManual };
	return (
		<Aux>
			<Title>{stats.name}</Title>
			{/* Alignment / Type / Subtype / Size / CR / XP */}
			<Row>
				<Attr>
					Alignment:<Data>{stats.alignment}</Data>
				</Attr>
				<Attr>
					Type:<Data>{stats.type}</Data>
				</Attr>
				{stats.subtype ? (
					<Attr>
						Subtype:<Data>{stats.subtype}</Data>
					</Attr>
				) : null}
				<Attr>
					Size:<Data>{stats.size}</Data>
				</Attr>
				<Attr>
					CR:<Data>{stats.challenge_rating}</Data>
				</Attr>
				<Attr>
					XP:<Data>{stats.xp}</Data>
				</Attr>
			</Row>
			{/* Armor Class / Hit Points / Hit Dice */}
			<Row>
				<Attr>
					AC:<Data>{stats.armor_class}</Data>
				</Attr>
				<Attr>
					HP:<Data>{stats.hit_points}</Data>
				</Attr>
				<Attr>
					Hit Dice:<Data>{stats.hit_dice}</Data>
				</Attr>
			</Row>
			{/* STR / CON / DEX / INT / WIS / CHA */}
			<Row>
				<Attr>
					STR:<Data>{stats.strength}</Data>
				</Attr>
				<Attr>
					CON:<Data>{stats.constitution}</Data>
				</Attr>
				<Attr>
					DEX:<Data>{stats.dexterity}</Data>
				</Attr>
				<Attr>
					INT:<Data>{stats.intelligence}</Data>
				</Attr>
				<Attr>
					WIS:<Data>{stats.wisdom}</Data>
				</Attr>
				<Attr>
					CHA:<Data>{stats.charisma}</Data>
				</Attr>
			</Row>
			{/* Speed */}
			{stats.speed ? (
				<Row>
					<Attr>
						Speed:&nbsp;
						{stats.speed.walk ? (
							<Attr>
								walk -<Data>{stats.speed.walk}</Data>
							</Attr>
						) : null}
						{stats.speed.fly ? (
							<Attr>
								fly -<Data>{stats.speed.fly}</Data>
							</Attr>
						) : null}
						{stats.speed.swim ? (
							<Attr>
								swim -<Data>{stats.speed.swim}</Data>
							</Attr>
						) : null}
					</Attr>
				</Row>
			) : null}
			{/* Proficiencies */}
			{stats.proficiencies ? (
				<Row>
					{stats.proficiencies.map((el) => (
						<span>
							<Attr key={el.proficiency.name}>
								{el.proficiency.name}
								<Data>+{el.value}</Data>
							</Attr>
						</span>
					))}
				</Row>
			) : null}
			<Row>
				{/* Damage Vulnerablities */}
				<Attr>
					Damage Vulnerablities:
					<Data>
						{stats.damage_vulnerabilities &&
						stats.damage_vulnerabilities.length > 0
							? stats.damage_vulnerabilities.join(", ")
							: "None"}
					</Data>
				</Attr>
				{/* Damage Resistances */}
				<Attr>
					Damage Resistances:
					<Data>
						{stats.damage_resistances && stats.damage_resistances.length > 0
							? stats.damage_resistances.join(", ")
							: "None"}
					</Data>
				</Attr>
				{/* Damage Immunities */}
				<Attr>
					Damage Immunities:
					<Data>
						{stats.damage_immunities && stats.damage_immunities.length > 0
							? stats.damage_immunities.join(", ")
							: "None"}
					</Data>
				</Attr>
				{/* Condition Immunities */}
				<Attr>
					Condition Immunities:
					<Data>
						{stats.condition_immunities && stats.condition_immunities.length > 0
							? stats.condition_immunities.join(", ")
							: "None"}
					</Data>
				</Attr>
			</Row>
			{/* Senses */}
			{/* <Row>
				<Attr>Senses:</Attr>
			</Row> */}
		</Aux>
	);
};

export default ModalContent;
