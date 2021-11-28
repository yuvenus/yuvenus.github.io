import React from 'react';
import { aboutMe } from './aboutme';
// import face from '../images/venusyu.jpg';

class Home extends React.Component {
  state = {
    showMore: false,
  };

  showMore = () =>
    this.setState({showMore: !this.state.showMore});
  

  render() {
    return (
      <div className="home">        
        <div className="about-me">
          <div className="intro">
            <p>Hi there, I'm Venus! I am a full stack software developer. 
              My experiences are primarily in web development, using Angular and C# .NET to deploy web applications.
            </p>
            <p>My portfolio is still under construction. Please excuse the appearance!</p>
            <p><b>Current goal:</b> make my portofolio mobile-friendly.</p>
          </div>

          <div className="show-more">{this.state.showMore ? aboutMe : ""}</div> 
          <button type="button" className="button-text" onClick={this.showMore}>
            Show {this.state.showMore ? "Less..." : "More..."}
          </button>
        </div>
        <div className="link-wrapper">
          <div className="links">
            <a href="https://www.linkedin.com/in/venus-yu-34a47993/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/yuvenus" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home; 