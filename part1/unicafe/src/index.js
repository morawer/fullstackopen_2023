import React, { useState } from "react";
import ReactDOM from "react-dom";

let totalValue = 0;
let average = 0;
let avgArray = [];

const Header = (props) => (
	<div>
		<h1>{props.title}</h1>
	</div>
);

const Button = (props) => {
	return (
		<div>
			<button onClick={props.feedback}>{props.text}</button>
		</div>
	);
};

const Statistics = (props) => {
	if (props.totalValue === 0) {
		return (
			<div>
				<h3>statistics</h3>
				<p>No feedback given</p>
			</div>
		);
	} else {

		return (
			<div>
				<h3>statistics</h3>
				<FeedbackCounter text="good" value={props.good} />
				<FeedbackCounter text="neutral" value={props.neutral} />
				<FeedbackCounter text="bad" value={props.bad} />
				<FeedbackCounter text="all" value={props.totalValue} />
				<FeedbackCounter text="average" value={props.average} />
				<FeedbackCounter
					text="positive"
					value={(props.good / props.totalValue) * 100}
				/>
			</div>
		);
	}
};

const FeedbackCounter = (props) => {
	return (
		<div>
			<p>
				{props.text} {props.value}
			</p>
		</div>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	let sum = 0;

	const giveAverage = (array) =>
		array.forEach((element) => {
			sum += element;
			console.log(array.length, "==>>", sum);
			return (average = sum / array.length);
		});
	const giveFeedback = (feedback) => {
		if (feedback === "good") {
			setGood(good + 1);
			avgArray = avgArray.concat(1);
		}
		if (feedback === "neutral") {
			setNeutral(neutral + 1);
			avgArray = avgArray.concat(0);
		}
		if (feedback === "bad") {
			setBad(bad + 1);
			avgArray = avgArray.concat(-1);
		}
		totalValue += 1;
		console.log(avgArray);
		giveAverage(avgArray);
	};

	return (
		<div>
			<Header title={"give your feedback"} />
			<Button feedback={() => giveFeedback("good")} text="GOOD" />
			<Button feedback={() => giveFeedback("neutral")} text="NEUTRAL" />
			<Button feedback={() => giveFeedback("bad")} text="BAD" />
			<Statistics
				good={good}
				neutral={neutral}
				bad={bad}
				totalValue={totalValue}
				average={average}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
