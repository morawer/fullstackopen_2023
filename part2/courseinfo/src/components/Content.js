import Part from "./Part";

const Content = ({ course }) => {
        console.log(course.parts);

	return (
		<div>
			<Part course={course.parts}/>
		</div>
	);
};

export default Content;