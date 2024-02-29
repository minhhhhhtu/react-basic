import React from "react";

class ChildComponents extends React.Component {
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(">>> Check data input: ", this.state);
  };

  render() {
    return (
      <>
        <div> child component: {this.props.number}</div>
      </>
    );
  }
}

export default ChildComponents;
