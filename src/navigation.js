import React from 'react';
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="nav-list">
          <NavLink className="nav-item" activeClassName="active" to="/home">Home</NavLink>
          <NavLink className="nav-item" activeClassName="active" to="/skills">Skills</NavLink>
          {/* <a className="nav-item" href="/Venus Yu - Resume.pdf" target="_blank">Resume</a> */}
        </div>
      </div>
    );
  }
}

export default Navigation; 