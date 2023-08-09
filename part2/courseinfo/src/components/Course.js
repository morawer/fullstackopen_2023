import Header from "./Header";


const Course = ({ course }) => {
	console.log(course);
	return (
		<>
			{course.map((course) => (
				<div key={course.id}>
					<Header title={course.name} />
					{course.parts.map((part) => (
						<p key={part.id}>
							{part.name} {part.exercises}
						</p>
					))}
					<p>
						<strong>
							Total exercises{" "}
							{course.parts.reduce(
								(acc, part) => acc + part.exercises,
								0
							)}
						</strong>
					</p>
				</div>
			))}
		</>
	);
};
export default Course;
