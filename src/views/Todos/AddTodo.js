import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {

   state = {
    title: '',
   }

   handleOnChange = event => {
    this.setState({
        title: event.target.value
    })
   }

   addNewTodo = () => { 
    if(!this.state.title) {
        toast.warning(`Missing title`);
        return;
    }

    
    let todo = {
     id: Math.floor(Math.random() * 1000),
     title: this.state.title,
    }

    this.props.addNewTodo(todo)

    this.setState({
        title: '',
    })

   }
 render() {
    return (
        <div className="add-todo">
          <input type="text" onChange={(event) => this.handleOnChange(event)}/>
          <button onClick={() => this.addNewTodo()}>ADD</button>
        </div>
    )
 }
}
export default AddTodo;