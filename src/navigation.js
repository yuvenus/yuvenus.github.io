import React from 'react';
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">home</Link></li>
          <li className="nav-item"><Link to="/about">about</Link></li>
          <li className="nav-item"><Link to="/resume">resume</Link></li>
          {/* <li className="nav-item"><Link to="/themes">themes</Link></li> */}
        </ul>
      </div>
    );
  }
}

export default Navigation; 