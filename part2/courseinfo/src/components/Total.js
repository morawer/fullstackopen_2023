const Total = ({ course }) => {
	console.log(course[0].parts);
	const totalExercises = course.parts.reduce(
		(acc, part) => acc + part.exercises,
		0
	);

	return (
		<div>
			<p>
				<strong>Total of {totalExercises} exercises</strong>
			</p>
		</div>
	);
};

export default Total;
