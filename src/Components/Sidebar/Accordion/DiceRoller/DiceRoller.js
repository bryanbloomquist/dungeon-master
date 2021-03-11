import React, { Component } from "react";
import Button from "../../../Button/Button";
import axios from "axios";

class DiceRoller extends Component {
	state = {
		numDice: 1,
		numSides: 4,
		modifier: 0,
		numDiceArray: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		line1: "Dice:",
		line2: "Results:",
		line3: "Total:",
	};

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
				details.splice(0, 2);
				details.splice(-2, 2);
				const input = response.data.input;
				const result = response.data.result;
				const total = parseInt(result) + modifier;
				const line1 = "Dice: " + input + "+" + modifier;
				const line2 =
					"Results: " + details.join("").replace(/ /g, "") + "+" + modifier;
				const line3 = "Total:" + total;
				this.setState({ line1: line1, line2: line2, line3: line3 });
			});
	};

	render() {
		return (
			<div className='diceRoller'>
				<h2>Dice Roller</h2>
				<label htmlFor='numDice'>Number of Dice:</label>
				<select id='numDice' onChange={(el) => this.changeNumDice(el)}>
					{this.state.numDiceArray.slice(1).map((num) => {
						return (
							<option key={num} value={num}>
								{num}
							</option>
						);
					})}
				</select>
				<label htmlFor='numSides'>Number of Sides:</label>
				<select id='numSides' onChange={(el) => this.changeNumSides(el)}>
					<option value='4'>4</option>
					<option value='6'>6</option>
					<option value='8'>8</option>
					<option value='10'>10</option>
					<option value='12'>12</option>
					<option value='20'>20</option>
				</select>
				<label htmlFor='modifer'>Modifier</label>
				<select id='modifier' onChange={(el) => this.changeModifier(el)}>
					{this.state.numDiceArray.map((num) => {
						return (
							<option key={num} value={num}>
								{num}
							</option>
						);
					})}
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
