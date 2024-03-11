import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import TodoComponent from "./TodoComponent";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Doing exercise" },
      { id: "todo3", title: "Making video" },
    ],
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });

    toast("Wow, Successfully added");
  };

  deleteTodo = (todo) => {
    let currentFeature = this.state.listTodo.filter(
      (item) => item.id !== todo.id
    );
    this.setState({
      listTodo: currentFeature,
    });

    toast("Wow, Successfully deleted");
  };

  render() {
    return (
      <div className="listTodo-container">
        <AddTodo addNewTodo={this.addNewTodo} />
        <TodoComponent
          listTodo={this.state.listTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default ListTodo;
