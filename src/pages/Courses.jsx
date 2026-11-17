
import CourseCard from "../components/CourseCard";

function Courses() {
    return (
        <div className="page">
            <h1>Courses</h1>
            <p>Available Courses</p>

            <div className="card-container">
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    );
}

export default Courses;
