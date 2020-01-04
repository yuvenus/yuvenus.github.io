import React from 'react';
import face from '../images/venusyu.jpg';

class Home extends React.Component {
  showMore = false;

  render() {
    return (
      <div className="home">
        <div className="face-wrapper">
          <img className="my-face" src={face} alt="venusyu"></img>
          <div className="links">
            <a href="https://www.linkedin.com/in/venus-yu-34a47993/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/yuvenus" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-square"></i></a>
          </div>
        </div>
        
        <div className="about-me">
          <p>Hi there, I'm Venus! I am a full stack software developer. 
            My experiences are primarily in web development, using Angular and C# .NET to deploy web applications.
          </p>
          <p>My portfolio is still under construction. Please excuse the appearance!</p>

        </div>
      </div>
    );
  }
}

export default Home; 