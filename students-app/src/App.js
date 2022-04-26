import React, { useEffect, useState } from "react";
import "./App.css";
import api from "./api/student";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudent] = useState([]);
  const [statuses, setStatuses] = useState([]);
  const [studyPrograms, setStudyPrograms] = useState([]);

  // retrieve student data
  const retrieveStudent = async () => {
    const response = await api.get("students");
    return response.data;
  };

  const retrieveStatuses = async () => {
    const response = await api.get("statuses");
    return response.data;
  };

  const retrieveStudyPrograms = async () => {
    const response = await api.get("studyPrograms");
    return response.data;
  };

  const addStudentHandler = async (student) => {
    console.log(students);
    const request = {
      id: uuid(),
      studentNumber: uuid(),
      ...student,
    };

    const response = await api.post("students", request);
    setStudent([...students, response.data]);
  };

  const removeStudentHandler = async (id) => {
    await api.delete(`students/${id}`);
    const newStudentList = students.filter((students) => {
      return students.id !== id;
    });

    setStudent(newStudentList);
  };

  useEffect(() => {
    const getAllStudent = async () => {
      const allStudent = await retrieveStudent();
      if (allStudent) {
        setStudent(allStudent);
      }
    };
    getAllStudent();

    const getAllStatuses = async () => {
      const allStatuses = await retrieveStatuses();
      if (allStatuses) {
        setStatuses(allStatuses);
      }
    };
    getAllStatuses();

    const getAllStudyPrograms = async () => {
      const allStudyPrograms = await retrieveStudyPrograms();
      if (allStudyPrograms) {
        setStudyPrograms(allStudyPrograms);
      }
    };
    getAllStudyPrograms();
  });

  useEffect(() => {}, [students]);
  useEffect(() => {}, [statuses]);
  useEffect(() => {}, [studyPrograms]);

  return (
    <div className="core-container">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <StudentList
                Students={students}
                StudyPrograms={studyPrograms}
                Statuses={statuses}
                getStudentNumber={removeStudentHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddStudent
                StudyPrograms={studyPrograms}
                Statuses={statuses}
                addStudentHandler={addStudentHandler}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
