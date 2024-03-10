import React from "react";
import './Demo.scss'

class ChildComponents extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHideEvent = () => {
    this.setState({
      showJobs: !this.state.showJobs
    })
  }

  handleOnclickDelete = (job) => {
    this.props.deleteJob(job);
  }
  render() {
    let { showJobs } = this.state;
    let { arrJobs } = this.props;
    return (
      <>
        {showJobs ? (
          <div>
            <button className="btn-show" onClick={() => this.handleShowHideEvent()}>Show</button>
          </div>
        ) : (
          <>
            <div className="jobs-list">
              {arrJobs.map((job) => {
                return (
                  <div key={job.id}>
                    {job.title} - {job.salary}$ <></>
                    <span onClick={() => this.handleOnclickDelete(job)}>X</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHideEvent()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponents = (props) => {
//   console.log(">>> Check props", props)
//   let {arrJobs} = props;
//   return (
//     <div>
//       {arrJobs.map(job => {
//         return (
//           <div key={job.id}>
//             {job.title} - {job.salary}
//           </div>
//         )
//       })}
//     </div>
//   )
// }
export default ChildComponents;
