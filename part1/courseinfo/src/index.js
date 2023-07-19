import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
	return (
		<>
			<h1>{props.title}</h1>
		</>
	);
};

const Part = (props) => {
	return (
		<div>
			<p>
				{props.part.name} {props.part.exercises}
			</p>
		</div>
	);
};

const Content = (props) => {
	return (
		<div>
			<Part part={props.part[0]} />
			<Part part={props.part[1]} />
			<Part part={props.part[2]} />
		</div>
	);
};

const Total = (proper) => {
	return (
		<>
			<p>
				Number of exercises{" "}
				{proper.part[0].exercises +
					proper.part[1].exercises +
					proper.part[2].exercises}
			</p>
		</>
	);
};

const App = () => {
	const course = "Half Stack application development";
	const parts = [
		{
			name: "Fundamentals of React",
			exercises: 10,
		},
		{
			name: "Using props to pass data",
			exercises: 7,
		},
		{
			name: "State of a component",
			exercises: 14,
		},
	];

	return (
		<div>
			<Header title={course} />
			<Content part={parts} />
			<Total part={parts} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
