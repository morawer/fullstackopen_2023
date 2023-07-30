import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
	return (
		<>
			<Header title={course} />
			<Content course={course} />
		</>
	);
};
export default Course;
