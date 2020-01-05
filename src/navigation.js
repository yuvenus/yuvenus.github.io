import React from 'react';
import { NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        {/* <img className="my-face" src={face} alt="venusyu"></img> */}
        <div className="nav-list">
          <NavLink className="nav-item" activeClassName="active" to="/home">Home</NavLink>
          <NavLink className="nav-item" activeClassName="active" to="/skills">Skills</NavLink>
          <a className="nav-item" href="/Venus Yu - Resume.pdf" target="_blank">Resume</a>
          {/* <li className="nav-item"><Link to="/themes">themes</Link></li> */}
        </div>
      </div>
    );
  }
}

export default Navigation; 