import React, { useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
	"If it hurts, do it more often",
	"Adding manpower to a late software project makes it later!",
	"The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
	"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
	"Premature optimization is the root of all evil.",
	"Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
	"Holaaaa Dani!"
];

let anecdotePosition = 0;

const votes = Array(anecdotes.length).fill(0);
const votesCopy = [...votes]


const getRandomInt = (props) => { 
	anecdotePosition = Math.floor(Math.random() * props);
	return anecdotePosition;
}


const App = (props) => {
	const [selected, setSelected] = useState(0);
	const [votes, setVote] = useState([])
	console.log(votesCopy);
	
	const addVote = (vote) => { 
		setVote(...votesCopy, vote)
	}

  return (
		<div>
			<p>{props.anecdotes[selected]}</p>
			<button
				onClick={() =>
				  addVote(votesCopy[anecdotePosition]+= 1)
				}
			>
				vote
			</button>
			<button
				onClick={() =>
					setSelected(() => getRandomInt(props.anecdotes.length))
				}
			>
				next anecdote
		  </button>
		</div>
  );
};


ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
