import React from "react";

class TodoComponent extends React.Component {
  handleDeleteButton = (job) => {
    this.props.deleteTodo(job);
  };
  render() {
    let { listTodo } = this.props;
    return (
      <div className="listTodo-content">
        {listTodo &&
          listTodo.length > 0 &&
          listTodo.map((item, index) => {
            return (
              <div className="child-todo" key={item.id}>
                <span>
                  {index + 1} - {item.title}{" "}
                </span>
                <button>EDIT</button>
                <button onClick={() => this.handleDeleteButton(item)}>
                  DELETE
                </button>
              </div>
            );
          })}
      </div>
    );
  }
}
export default TodoComponent;
