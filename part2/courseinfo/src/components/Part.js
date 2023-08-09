const Part = (props) => {
	const { course } = props;
	console.log("JEYY", course);
	return (
		<div>
			{course.map((course) => (
				<p key={course.id}>
					{course.name} {course.exercises}
				</p>
			))}
		</div>
	);
};

export default Part;
