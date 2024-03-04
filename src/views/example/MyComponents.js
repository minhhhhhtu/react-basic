import React from "react";
import ChildComponents from "./ChildComponents";
import AddComponent from "./AddComponent";
class MyComponents extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Front-end Developer", salary: "1000$" },
      { id: "abcJob2", title: "Back-end Developer", salary: "2000$" },
      { id: "abcJob3", title: "Full Stack Developer", salary: "3000$" },
    ],
  };

  addNewJob = (job) => {
    console.log("Check data from parent: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job]
    })
  }

  render() {
    return (
      <>
        <AddComponent
        addNewJob={this.addNewJob}
        />
        <ChildComponents arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponents;
