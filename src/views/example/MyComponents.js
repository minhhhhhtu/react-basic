import React from "react";
import ChildComponents from "./ChildComponents";
import AddComponent from "./AddComponent";
class MyComponents extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Front-end Developer", salary: "1000" },
      { id: "abcJob2", title: "Back-end Developer", salary: "2000" },
      { id: "abcJob3", title: "Full Stack Developer", salary: "3000" },
    ],
  };

  addNewJob = (job) => {
    let currentJobs = this.state.arrJobs; 
    currentJobs.push(job);
    this.setState({
      arrJob: currentJobs
    })
  }

  deleteJob = (job) => {
    let currentJobs = this.state.arrJobs; 
    currentJobs = currentJobs.filter(item => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs
    })
  }

  // componentDidUpdate(prevState, prevProps) {
  //   console.log("Previous state: ", prevState, "current: ", this.state, "props: ", prevProps)
  // }

  // componentDidMount() {
  //   console.log(">>>> componentDidMount");
  // }

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob}/>
        <ChildComponents arrJobs={this.state.arrJobs}  deleteJob={this.deleteJob}/>
      </>
    );
  }
}

export default MyComponents;


