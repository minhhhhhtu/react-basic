import React from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
         <NavLink exact activeClassName='active' to='/'>Home</NavLink>
         <NavLink exact activeClassName='active' to='/todo'>ToDo</NavLink>
         <NavLink exact activeClassName='active' to='/about'>About</NavLink>
      </div>
    );
  }
}

export default Nav;
