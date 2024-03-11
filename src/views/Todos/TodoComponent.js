import React from "react";
import { toast } from "react-toastify";

class TodoComponent extends React.Component {
  state = {
    editTodo: {},
    listTodo: this.props.listTodo, // Initialize listTodo in state
  };

  handleDeleteButton = (item) => {
    const updatedList = this.state.listTodo.filter(
      (todo) => todo.id !== item.id
    );
    this.setState({
      listTodo: updatedList,
    });
    this.props.deleteTodo(item);
  };

  handleOnChange = (event) => {
    const { editTodo } = this.state;
    const updatedTodo = { ...editTodo, title: event.target.value };
    this.setState({
      editTodo: updatedTodo,
    });
  };

  handleEditButton = (todo) => {
    const { editTodo, listTodo } = this.state;

    if (editTodo.id === todo.id) {
      const updatedList = listTodo.map((item) =>
        item.id === todo.id ? { ...item, title: editTodo.title } : item
      );

      this.setState({
        editTodo: {},
        listTodo: updatedList,
      });
      toast("Wow, Successfully update!");
    } else {
      this.setState({
        editTodo: todo,
      });
    }
  };

  render() {
    const { listTodo, editTodo } = this.state;

    return (
      <div className="listTodo-content">
        {listTodo &&
          listTodo.length > 0 &&
          listTodo.map((item, index) => {
            const isEmpty = Object.keys(editTodo).length === 0;
            return (
              <div className="child-todo" key={item.id}>
                {isEmpty || editTodo.id !== item.id ? (
                  <span>
                    {index + 1} - {item.title}{" "}
                  </span>
                ) : (
                  <span>
                    {index + 1} -{" "}
                    <input
                      value={editTodo.title}
                      onChange={(event) => this.handleOnChange(event)}
                    />
                  </span>
                )}
                <button onClick={() => this.handleEditButton(item)}>
                  {isEmpty || editTodo.id !== item.id ? "EDIT" : "SAVE"}
                </button>
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
