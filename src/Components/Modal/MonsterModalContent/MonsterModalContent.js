import React, { useContext } from "react";
import { Context } from "../../../AppContext";

const MonsterModalContent = () => {
	const { monsterManual, monsterLoaded } = useContext(Context);
	const stats = { ...monsterManual };
	return (
		monsterLoaded && (
			<div className='monsterManual'>
				<h2 className='monsterManual__title'>{stats.name}</h2>
				<h4 className='monsterManual__subtitle'>
					{stats.size}&nbsp;
					{stats.type}
					{stats.subtype ? " (" + stats.subtype + ")" : null},&nbsp;
					{stats.alignment}
				</h4>
				<hr className='monsterManual__hr' />
				{/* Armor Class / Hit Points / Hit Dice */}
				<div className='monsterManual__row'>
					<span className='monsterManual__attr'>
						Armor Class:{" "}
						<span className='monsterManual__data'>{stats.armor_class}</span>
					</span>
				</div>
				<div className='monsterManual__row'>
					<span className='monsterManual__attr'>
						hit points:&nbsp;
						<span className='monsterManual__data'>
							{stats.hit_points} ({stats.hit_dice})
						</span>
					</span>
				</div>
				{/* Speed */}
				<div className='monsterManual__row'>
					<span className='monsterManual__attr'>
						Speed:&nbsp;
						{stats.speed.walk && (
							<span className='monsterManual__data'>
								walk {stats.speed.walk}
							</span>
						)}
						&nbsp;&nbsp;
						{stats.speed.fly && (
							<span className='monsterManual__data'>fly {stats.speed.fly}</span>
						)}
						&nbsp;&nbsp;
						{stats.speed.swim && (
							<span className='monsterManual__data'>
								swim {stats.speed.swim}
							</span>
						)}
					</span>
				</div>
				<hr className='monsterManual__hr' />
				{/* STR / CON / DEX / INT / WIS / CHA */}
				<div className='monsterManual__row'>
					<span className='monsterManual__attr'>
						STR: <span className='monsterManual__data'>{stats.strength}</span>
						&nbsp;
					</span>
					<span className='monsterManual__attr'>
						CON:{" "}
						<span className='monsterManual__data'>{stats.constitution}</span>
						&nbsp;
					</span>
					<span className='monsterManual__attr'>
						DEX: <span className='monsterManual__data'>{stats.dexterity}</span>
						&nbsp;
					</span>
					<span className='monsterManual__attr'>
						INT:{" "}
						<span className='monsterManual__data'>{stats.intelligence}</span>
						&nbsp;
					</span>
					<span className='monsterManual__attr'>
						WIS: <span className='monsterManual__data'>{stats.wisdom}</span>
						&nbsp;
					</span>
					<span className='monsterManual__attr'>
						CHA: <span className='monsterManual__data'>{stats.charisma}</span>
					</span>
				</div>
				<hr className='monsterManual__hr' />
				{/* Proficiencies */}
				{stats.proficiencies.length > 0 && (
					<div className='monsterManual__row'>
						<span className='monsterManual__attr'>
							Savings Throws & Skills:&nbsp;
							{stats.proficiencies.map((el, i) => {
								const name = el.proficiency.name;
								const save = name.includes("Saving Throw:");
								const skll = name.includes("Skill:");
								return (
									<span className='monsterManual__data' key={name}>
										{i > 0 && ", "}
										{save && name.replace("Saving Throw: ", "")}
										{skll && name.replace("Skill: ", "")}+{el.value}
									</span>
								);
							})}
						</span>
					</div>
				)}
				{/* Damage Vulnerablities */}
				{stats.damage_vulnerabilities.length > 0 && (
					<div className='monsterManual__row'>
						<span className='monsterManual__attr'>
							damage vulnerabilities:
							<span className='monsterManual__data'>
								{" "}
								{stats.damage_vulnerabilities.join(", ")}
							</span>
						</span>
					</div>
				)}
				{/* Damage Resistances */}
				{stats.damage_resistances.length > 0 && (
					<div className='monsterManual__row'>
						<span className='monsterManual__attr'>
							damage resistances:
							<span className='monsterManual__data'>
								{" "}
								{stats.damage_resistances.join(", ")}
							</span>
						</span>
					</div>
				)}
				{/* Damage Immunities */}
				{stats.damage_immunities.length > 0 && (
					<div className='monsterManual__row'>
						<span className='monsterManual__attr'>
							damage immunities:
							<span className='monsterManual__data'>
								{" "}
								{stats.damage_immunities.join(", ")}
							</span>
						</span>
					</div>
				)}
				{/* Condition Immunities */}
				{stats.condition_immunities.length > 0 && (
					<div className='monsterManual__row'>
						<span className='monsterManual__attr'>
							condition immunities:&nbsp;
							<span className='monsterManual__data'>
								{stats.condition_immunities.map((cond, i) => {
									return i > 0 ? ", " + cond.index : cond.index;
								})}
							</span>
						</span>
					</div>
				)}
				{/* Senses */}
				<div className='monsterManual__row'>
					<span className='monsterManual__attr'>
						Senses:&nbsp;
						<span className='monsterManual__data'>
							Passive Perception {stats.senses.passive_perception},{" "}
						</span>
						{stats.senses.darkvision && (
							<span className='monsterManual__data'>
								darkvision {stats.senses.darkvision},{" "}
							</span>
						)}
						{stats.senses.blindsight && (
							<span className='monsterManual__data'>
								blindsight {stats.senses.blindsight},{" "}
							</span>
						)}
						{stats.senses.truesight && (
							<span className='monsterManual__data'>
								truesight {stats.senses.truesight},{" "}
							</span>
						)}
						{stats.senses.tremorsense && (
							<span className='monsterManual__data'>
								tremorsense {stats.senses.tremorsense},{" "}
							</span>
						)}
					</span>
				</div>
				{/* Languages */}
				{stats.languages.length > 0 && (
					<div className='monsterManual__row'>
						<span className='monsterManual__attr'>
							languages:&nbsp;
							<span className='monsterManual__data'>{stats.languages}</span>
						</span>
					</div>
				)}
				{/* Challenge Rating / Experience Points */}
				<div className='monsterManual__row'>
					<span className='monsterManual__attr'>
						Challenge Rating:&nbsp;
						<span className='monsterManual__data'>
							{stats.challenge_rating} ({stats.xp}XP)
						</span>
					</span>
				</div>
				<hr className='monsterManual__hr' />
				{/* Special Abilities */}
				{stats.special_abilities && stats.special_abilities.length > 0 && (
					<div>
						<div className='monsterManual__row'>
							{stats.special_abilities.map((ability) => {
								return (
									<span className='monsterManual__attr' key={ability.name}>
										<span className='monsterManual__data'>
											{ability.name}:{" "}
										</span>
										<span className='monsterManual__desc'>{ability.desc}</span>
									</span>
								);
							})}
						</div>
						<hr className='monsterManual__hr' />
					</div>
				)}
				{/* Actions */}
				<div className='monsterManual__row'>
					<span className='monsterManual__attr'>Actions:</span>
				</div>
				<div className='monsterManual__row'>
					{stats.actions.map((action) => {
						return (
							<span className='monsterManual__attr' key={action.name}>
								<span className='monsterManual__data'>{action.name}: </span>
								<span className='monsterManual__desc'>{action.desc}</span>
							</span>
						);
					})}
				</div>
				{/* Legendary Actions */}
				{stats.legendary_actions && (
					<div>
						<hr className='monsterManual__hr' />
						<div className='monsterManual__row'>
							<span className='monsterManual__attr'>Legendary Actions</span>
							<span className='monsterManual__desc'>
								This creature can take 3 legendary actions, choosing from the
								options below. Only one legendary action option can be used at a
								time and only at the end of another creature's turn. The
								creature regains spent legendary actions at the start of its
								turn.
							</span>
						</div>
						<div className='monsterManual__row'>
							{stats.legendary_actions.map((action) => {
								return (
									<span className='monsterManual__attr' key={action.name}>
										<span className='monsterManual__data'>{action.name}: </span>
										<span className='monsterManual__desc'>{action.desc}</span>
									</span>
								);
							})}
						</div>
					</div>
				)}
			</div>
		)
	);
};

export default MonsterModalContent;
