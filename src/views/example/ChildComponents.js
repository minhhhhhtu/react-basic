import React from "react";

class ChildComponents extends React.Component {
  state = {
    showJobs: false,
  };

  handShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;

    return (
      <>
        {showJobs ? (
          <div>
            <button onClick={() => this.handShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="jobs-list">
              {arrJobs.map((job) => {
                return (
                  <div key={job.id}>
                    {job.title} - {job.salary}
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handShowHide()}>Hide</button>
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
