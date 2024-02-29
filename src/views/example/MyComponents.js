import React from "react";
import ChildComponents from "./ChildComponents";

class MyComponents extends React.Component {
  state = {
    firstName: "",
    lastName: "",
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
        <ChildComponents number={"Child components 1"}/>
        <ChildComponents number={"Child components 2"}/>
        <ChildComponents number={"Child components 5"}/>
      </>
    );
  }
}

export default MyComponents;
