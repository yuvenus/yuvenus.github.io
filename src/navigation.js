import React from 'react';
import face from './images/venusyu.jpg';
import { Link } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <img className="my-face" src={face} alt="venusyu"></img>
        <ul className="nav-list">
          <li className="nav-item"><Link class="nav-item-link" to="/">Home</Link></li>
          <li className="nav-item"><Link class="nav-item-link" to="/about">About</Link></li>
          <li className="nav-item"><a class="nav-item-link" href="/Venus Yu - Resume.pdf" target="_blank">Resume</a></li>
          {/* <li className="nav-item"><Link to="/themes">themes</Link></li> */}
        </ul>
      </div>
    );
  }
}

export default Navigation; 