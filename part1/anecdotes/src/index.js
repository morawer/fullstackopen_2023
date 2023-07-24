import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
	"If it hurts, do it more often",
	"Adding manpower to a late software project makes it later!",
	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	"Premature optimization is the root of all evil.",
	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
	"Holaaaa Dani!",
];

let anecdotePosition = 0;

const votesWithZeros = Array(anecdotes.length).fill(0);

const getRandomInt = (props) => {
	anecdotePosition = Math.floor(Math.random() * props);
	return anecdotePosition;
};

const App = (props) => {
	const [selected, setSelected] = useState(0);
	const [votes, setVote] = useState(votesWithZeros);
	console.log(votes);

	const addVote = () => {
		const updatedVote = [...votes];
		updatedVote[selected] += 1;
		setVote(updatedVote);
	};

	const getAnecdoteMostVoted = () => {
		const maxVoted = Math.max(...votes);
		const position = votes.indexOf(maxVoted);
		console.log(maxVoted, position, ...votes);
		return position;
	};

	return (
		<div>
			<h2>Anecdote of the day</h2>
			<p>{props.anecdotes[selected]}</p>
			<p>has {votes[selected]} votes </p>
			<button onClick={addVote}>vote</button>
			<button
				onClick={() =>
					setSelected(() => getRandomInt(props.anecdotes.length))
				}
			>
				next anecdote
			</button>
			<h2>Anecdote with most votes</h2>
			<p>{props.anecdotes[getAnecdoteMostVoted()]}</p>
			<p>has {votes[getAnecdoteMostVoted()]} voted</p>
		</div>
	);
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
