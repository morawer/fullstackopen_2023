import React, { useState } from "react";
import ReactDOM from "react-dom";

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

const Statistics = () => {
	return (
		<div>
			<h3>statistics</h3>
		</div>
	);
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

	const giveFeedback = (feedback) => {
		if (feedback === "good") {
			setGood(good + 1);
		}
		if (feedback === "neutral") {
			setNeutral(neutral + 1);
		}
		if (feedback === "bad") {
			setBad(bad + 1);
		}
	};

	return (
		<div>
			<Header title={"give your feedback"} />
			<Button feedback={() => giveFeedback("good")} text="GOOD" />
			<Button feedback={() => giveFeedback("neutral")} text="NEUTRAL" />
			<Button feedback={() => giveFeedback("bad")} text="BAD" />
			<Statistics />
			<FeedbackCounter text="good" value={good} />
			<FeedbackCounter text="neutral" value={neutral} />
			<FeedbackCounter text="bad" value={bad} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
