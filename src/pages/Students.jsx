
import StudentCard from "../components/StudentCard";

function Students() {
    return (
        <div className="page">
            <h1>Students</h1>
            <p>Student Information</p>

            <div className="card-container">
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
            </div>
        </div>
    );
}

export default Students;
