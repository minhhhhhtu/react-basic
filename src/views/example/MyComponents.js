import React from "react";
import ChildComponents from "./ChildComponents";

class MyComponents extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "abcJob1", title: "Front-end Developer", salary: "1000$" },
      { id: "abcJob2", title: "Back-end Developer", salary: "2000$" },
      { id: "abcJob3", title: "Full Stack Developer", salary: "3000$" },
    ]
  };

  handleOnChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleOnChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    console.log(">>> Check data input: ", this.state)
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label> <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label> <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnChangeLastName(event)}
          />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleOnSubmit(event)}
          />
        </form>
        <ChildComponents
          name = {this.state.firstName}
          age = {25}
          address = {"Ha Noi"}
          arrJobs = {this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponents;
