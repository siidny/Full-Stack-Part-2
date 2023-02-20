const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        const total = course.parts.reduce(
          (sum, part) => sum + part.exercises,
          0
        );

        return (
          <div key={course.id}>
            <h1>{course.name}</h1>
            {course.parts.map((part) => (
              <p key={part.id}>
                {part.name} {part.exercises}
              </p>
            ))}
            <p>
              <strong>total of {total} exercises</strong>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Course;
