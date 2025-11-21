export default function Courses() {
  const courses = ["Javascript", "HTML", "CSS"];

  const renderUi = () => {
    return (
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      Courses
      {renderUi()}
    </div>  
  );
}
