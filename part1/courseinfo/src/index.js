import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
	return (
		<>
			<h1>{props.title}</h1>
		</>
	);
};

const Content = (props) => {
	return (
		<div>
			<p>
				{props.name1} {props.exercises1}
			</p>
			<p>
				{props.name2} {props.exercises2}
			</p>
			<p>
				{props.name3} {props.exercises3}
			</p>
		</div>
	);
};

const Total = (proper) => {
	return (
		<>
			<p>
				Number of exercises{" "}
				{proper.exercises1 + proper.exercises2 + proper.exercises3}
			</p>
		</>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const part1 = {
		name: "Fundamentals of React",
		exercises: 10,
	};
	const part2 = {
		name: "Using props to pass data",
		exercises: 7,
	};
	const part3 = {
		name: "State of a component",
		exercises: 14,
	};

	return (
		<div>
			<Header title={course} />
			<Content
				name1={part1.name}
				exercises1={part1.exercises}
				name2={part2.name}
				exercises2={part2.exercises}
				name3={part3.name}
				exercises3={part3.exercises}
			/>
			<Total
				exercises1={part1.exercises}
				exercises2={part2.exercises}
				exercises3={part3.exercises}
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
