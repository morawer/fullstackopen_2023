import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
	return (
		<>
			<Header title={course} />
			<Content course={course} />	
			<Total course={course}/>
		</>
	);
};
export default Course;
