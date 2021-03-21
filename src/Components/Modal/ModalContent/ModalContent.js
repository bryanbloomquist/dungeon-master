import React, { useContext } from "react";
import { Context } from "../../../AppContext";
import Aux from "../../../HOC/Aux";
import styled from "styled-components";

const Title = styled.h2`
	font-size: 4rem;
	margin-bottom: 1rem;
`;

const Sub = styled.p`
	font-size: 1.8rem;
	font-style: italic;
	color: #666666;
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
	font-size: 1.8rem;
	text-transform: capitalize;
	color: #c41520;
`;

const Desc = styled.span`
	font-family: serif;
	font-style: italic;
	text-transform: none;
	color: #666666;
`;

const HR = styled.hr`
	margin: 1rem 0;
	border: 2px solid #ffbf00;
`;

const ModalContent = () => {
	const { monsterManual, monsterLoaded } = useContext(Context);
	const stats = { ...monsterManual };
	return (
		monsterLoaded && (
			<Aux>
				<Title>{stats.name}</Title>
				<Sub>
					{stats.size}&nbsp;
					{stats.type}
					{stats.subtype ? " (" + stats.subtype + ")" : null},&nbsp;
					{stats.alignment}
				</Sub>
				<HR />
				{/* Armor Class / Hit Points / Hit Dice */}
				<Row>
					<Attr>
						Armor Class: <Data>{stats.armor_class}</Data>
					</Attr>
				</Row>
				<Row>
					<Attr>
						hit points:&nbsp;
						<Data>
							{stats.hit_points} ({stats.hit_dice})
						</Data>
					</Attr>
				</Row>
				{/* Speed */}
				<Row>
					<Attr>
						Speed:&nbsp;
						{stats.speed.walk && <Data>walk {stats.speed.walk}</Data>}
						&nbsp;&nbsp;
						{stats.speed.fly && <Data>fly {stats.speed.fly}</Data>}&nbsp;&nbsp;
						{stats.speed.swim && <Data>swim {stats.speed.swim}</Data>}
					</Attr>
				</Row>
				<HR />
				{/* STR / CON / DEX / INT / WIS / CHA */}
				<Row>
					<Attr>
						STR: <Data>{stats.strength}</Data>&nbsp;
					</Attr>
					<Attr>
						CON: <Data>{stats.constitution}</Data>&nbsp;
					</Attr>
					<Attr>
						DEX: <Data>{stats.dexterity}</Data>&nbsp;
					</Attr>
					<Attr>
						INT: <Data>{stats.intelligence}</Data>&nbsp;
					</Attr>
					<Attr>
						WIS: <Data>{stats.wisdom}</Data>&nbsp;
					</Attr>
					<Attr>
						CHA: <Data>{stats.charisma}</Data>
					</Attr>
				</Row>
				<HR />
				{/* Proficiencies */}
				{stats.proficiencies.length > 0 && (
					<Row>
						<Attr>
							Savings Throws & Proficiencies:&nbsp;
							{stats.proficiencies.map((el) => (
								<Data>
									{el.proficiency.name}+{el.value}&nbsp;
								</Data>
							))}
						</Attr>
					</Row>
				)}
				{/* Damage Vulnerablities */}
				{stats.damage_vulnerabilities.length > 0 && (
					<Row>
						<Attr>
							damage vulnerabilities:
							<Data> {stats.damage_vulnerabilities.join(", ")}</Data>
						</Attr>
					</Row>
				)}
				{/* Damage Resistances */}
				{stats.damage_resistances.length > 0 && (
					<Row>
						<Attr>
							damage resistances:
							<Data> {stats.damage_resistances.join(", ")}</Data>
						</Attr>
					</Row>
				)}
				{/* Damage Immunities */}
				{stats.damage_immunities.length > 0 && (
					<Row>
						<Attr>
							damage immunities:
							<Data> {stats.damage_immunities.join(", ")}</Data>
						</Attr>
					</Row>
				)}
				{/* Condition Immunities */}
				{stats.condition_immunities.length > 0 && (
					<Row>
						<Attr>
							condition immunities:&nbsp;
							<Data>
								{stats.condition_immunities.map((cond, i) => {
									return i > 0 ? ", " + cond.index : cond.index;
								})}
							</Data>
						</Attr>
					</Row>
				)}
				{/* Senses */}
				<Row>
					<Attr>
						Senses:&nbsp;
						<Data>Passive Perception {stats.senses.passive_perception}, </Data>
						{stats.senses.darkvision && (
							<Data>darkvision {stats.senses.darkvision}, </Data>
						)}
						{stats.senses.blindsight && (
							<Data>blindsight {stats.senses.blindsight}, </Data>
						)}
						{stats.senses.truesight && (
							<Data>truesight {stats.senses.truesight}, </Data>
						)}
						{stats.senses.tremorsense && (
							<Data>tremorsense {stats.senses.tremorsense}, </Data>
						)}
					</Attr>
				</Row>
				{/* Languages */}
				{stats.languages.length > 0 && (
					<Row>
						<Attr>
							languages:&nbsp;
							<Data>{stats.languages}</Data>
						</Attr>
					</Row>
				)}
				{/* Challenge Rating / Experience Points */}
				<Row>
					<Attr>
						Challenge Rating:&nbsp;
						<Data>
							{stats.challenge_rating} ({stats.xp}XP)
						</Data>
					</Attr>
				</Row>
				<HR />
				{/* Special Abilities */}
				{stats.special_abilities && stats.special_abilities.length > 0 && (
					<div>
						<Row>
							{stats.special_abilities.map((ability) => {
								return (
									<Attr>
										<Data>{ability.name}: </Data>
										<Desc>{ability.desc}</Desc>
									</Attr>
								);
							})}
						</Row>
						<HR />
					</div>
				)}
				{/* Actions */}
				<Row>
					<Attr>Actions:</Attr>
				</Row>
				<Row>
					{stats.actions.map((action) => {
						return (
							<Attr key={action.name}>
								<Data>{action.name}: </Data>
								<Desc>{action.desc}</Desc>
							</Attr>
						);
					})}
				</Row>
				{/* Legendary Actions */}
				{stats.legendary_actions && (
					<div>
						<HR />
						<Row>
							<Attr>Legendary Actions</Attr>
							<Desc>
								This creature can take 3 legendary actions, choosing from the
								options below. Only one legendary action option can be used at a
								time and only at the end of another creature's turn. The
								creature regains spent legendary actions at the start of its
								turn.
							</Desc>
						</Row>
						<Row>
							{stats.legendary_actions.map((action) => {
								return (
									<Attr key={action.name}>
										<Data>{action.name}: </Data>
										<Desc>{action.desc}</Desc>
									</Attr>
								);
							})}
						</Row>
					</div>
				)}
			</Aux>
		)
	);
};

export default ModalContent;
