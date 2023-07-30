const Part = props => {
    const { course } = props;
    return (
        <div>
            {course.map(course => (
                <p key={course.id}> {course.name} { course.exercises}</p>
            ))}	
        </div>
	);
};


export default Part;