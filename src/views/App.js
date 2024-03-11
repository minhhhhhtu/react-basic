import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import MyComponents from "./example/MyComponents";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./example/Home.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Nav />
            <img src={logo} className="App-logo" alt="logo" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/todo" component={ListTodo} />
              <Route path="/about" component={MyComponents} />
            </Switch>
          </header>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
