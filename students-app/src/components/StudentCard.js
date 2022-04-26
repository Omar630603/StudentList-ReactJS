import React from "react";
import { Link } from "react-router-dom";
import "./Component.css";

const StudentCard = (props) => {
  const { id, studentNumber, name, phone, year } = props.student;
  const StudyProgram = props.StudyProgram;
  const Status = props.Status;

  return (
    <div className="card">
      <div>
        <div className="headerText">
          <h4 className="header">{name}</h4>
          <h4 className="header noBold">{studentNumber}</h4>
        </div>
        <small>Phone</small>
        <p className="bio">{phone}</p>
        <small>Year</small>
        <p className="bio">{year}</p>
        <small>Study Program</small>
        <p className="bio">{StudyProgram}</p>
        <small>Status</small>
        <p className="bio">{Status}</p>
        <button
          className="delete-button"
          onClick={() => props.clickHandler(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default StudentCard;
