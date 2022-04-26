import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";

const StudentList = (props) => {
  const deleteStudentHandler = (id) => {
    props.getStudentNumber(id);
  };
  function findStudyProgram(id) {
    var studyProgram = "";
    for (let index = 0; index < props.StudyPrograms.length; index++) {
      if (props.StudyPrograms[index].id == id) {
        studyProgram = props.StudyPrograms[index].name;
      }
    }
    return studyProgram;
  }
  function findStatus(id) {
    var status = "";
    for (let index = 0; index < props.Statuses.length; index++) {
      if (props.Statuses[index].id == id) {
        status = props.Statuses[index].name;
      }
    }
    return status;
  }
  const renderStudentList = props.Students.map((student) => {
    return (
      <StudentCard
        student={student}
        StudyProgram={findStudyProgram(student.studyProgramId)}
        Status={findStatus(student.statusId)}
        clickHandler={deleteStudentHandler}
        key={student.studentNumber}
      />
    );
  });
  return (
    <div className="list-container">
      <h2>
        Student List
        <br />
        <Link to="/add">
          <button className="button-add">Add Student</button>
        </Link>
      </h2>
      <div className="card-container">{renderStudentList}</div>
    </div>
  );
};

export default StudentList;
