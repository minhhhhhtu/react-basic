import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handleOnChangeTitleJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleOnChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary
    })

    this.setState({
      title: "",
      salary: ""
    })
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Title Job:</label> <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleOnChangeTitleJob(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label> <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleOnChangeSalary(event)}
          />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleOnSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
