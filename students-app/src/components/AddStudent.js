import React from "react";
import { Link } from "react-router-dom";

class AddStudent extends React.Component {
  state = {
    studentNumber: "",
    name: "",
    phone: "",
    year: "",
    studyProgramId: "",
    statusId: 0,
  };

  studyPrograms = this.props.StudyPrograms;
  statuses = this.props.Statuses;

  add = (e) => {
    e.preventDefault();
    if (
      this.state.studentNumber === "" ||
      this.state.name === "" ||
      this.state.phone === "" ||
      this.state.year === "" ||
      this.state.studyProgramId === "" ||
      this.state.statusId === ""
    ) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addStudentHandler(this.state);
    this.setState({
      studentNumber: "",
      name: "",
      phone: "",
      year: "",
      studyProgramId: "",
      statusId: 0,
    });
  };
  render() {
    return (
      <div className="form-container">
        <h2>Add Student</h2>
        <Link to="/">
          <button className="button-back">Back</button>
        </Link>
        <form onSubmit={this.add}>
          <div className="form-group">
            <label>Student Number</label>
            <br />
            <input
              type="text"
              name="studentNumber"
              placeholder="student number"
              value={this.state.studentNumber}
              onChange={(e) => this.setState({ studentNumber: e.target.value })}
              className="form"
            />
          </div>
          <div className="form-group">
            <label>Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              className="form"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <br />
            <input
              type="text"
              name="phone"
              placeholder="phone"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
              className="form"
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <br />
            <input
              type="text"
              name="year"
              placeholder="year"
              value={this.state.year}
              onChange={(e) => this.setState({ year: e.target.value })}
              className="form"
            />
          </div>
          <div className="form-group">
            <label>Study Program</label>
            <br />
            <select
              value={this.state.studyProgramId}
              onChange={(e) =>
                this.setState({ studyProgramId: e.target.value })
              }
              className="form-select"
            >
              <option value="" disabled>
                Choose Study Program
              </option>
              {this.studyPrograms.map((option) => (
                <option value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Status</label>
            <br />
            <select
              value={this.state.statusId}
              onChange={(e) => this.setState({ statusId: e.target.value })}
              className="form-select"
            >
              <option value="" disabled>
                Choose Status
              </option>
              {this.statuses.map((option) => (
                <option value={option.id}>{option.name}</option>
              ))}
            </select>
          </div>
          <button className="button-add">Add</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
