import React, { Component } from "react";
import Button from "../../../../Button/Button";
import axios from "axios";

class DiceRoller extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numDice: 1,
			numSides: 4,
			modifier: 0,
			numDiceArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			numSidesArray: [4, 6, 8, 10, 12, 20, 100],
			line1: "[ Dice ]",
			line2: "[ Results ]",
			line3: "[ Total ]",
		};
	}

	changeNumDice = (event) =>
		this.setState({ numDice: parseInt(event.target.value) });

	changeNumSides = (event) =>
		this.setState({ numSides: parseInt(event.target.value) });

	changeModifier = (event) =>
		this.setState({ modifier: parseInt(event.target.value) });

	rollDice = () => {
		axios
			.get(
				"https://rolz.org/api/?" +
					this.state.numDice +
					"d" +
					this.state.numSides +
					".json"
			)
			.then((response) => {
				const modifier = this.state.modifier;
				let details = response.data.details.split("");
				if (this.state.numDice > 1) {
					details.splice(0, 2);
					details.splice(-2, 2);
				}
				const input = response.data.input;
				const result = response.data.result;
				const total = parseInt(result) + modifier;
				const line1 = modifier > 0 ? input + "+" + modifier : input;
				const line2 =
					modifier > 0
						? "[" + details.join("").replace(/ /g, "") + "] +" + modifier
						: details.join("").replace(/ /g, "");
				const line3 = "Total: " + total;
				this.setState({ line1: line1, line2: line2, line3: line3 });
			});
	};

	render() {
		return (
			<div className={this.props.classname}>
				<h2>Dice Roller</h2>
				<label htmlFor='numDice'>Number of Dice:</label>
				<select id='numDice' onChange={(el) => this.changeNumDice(el)}>
					{this.state.numDiceArray.slice(1).map((num) => (
						<option key={num} value={num}>
							{num}
						</option>
					))}
				</select>
				<label htmlFor='numSides'>Number of Sides:</label>
				<select id='numSides' onChange={(el) => this.changeNumSides(el)}>
					{this.state.numSidesArray.map((num) => (
						<option key={num} value={num}>
							{num}
						</option>
					))}
				</select>
				<label htmlFor='modifer'>Modifier</label>
				<select id='modifier' onChange={(el) => this.changeModifier(el)}>
					{this.state.numDiceArray.map((num) => (
						<option key={num} value={num}>
							{num}
						</option>
					))}
				</select>
				<Button clicked={this.rollDice} title='Roll Dice' />
				<div className='diceTray'>
					<p>{this.state.line1}</p>
					<p>{this.state.line2}</p>
					<p>{this.state.line3}</p>
				</div>
			</div>
		);
	}
}

export default DiceRoller;
