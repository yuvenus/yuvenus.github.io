import React from 'react';

class About extends React.Component {
  languages = ["TypeScript", "JavaScript", "HTML", "CSS", "SASS/SCSS", "C#", "Python", "SQL"];
  frameworks = ["Angular", ".NET", "React", "Scrum", "Jenkins", "Vue"];
  other = ["MySQL", "PhotoShop"];
  
  render() {
    return (
        <div className="about">
            <h3>Skills</h3>
            <div className="skills">
              <div className="languages">
                <h4>Languages</h4>
                {this.languages.map(lang => <p className="language">{lang}</p>)}
              </div>
              <div className="frameworks">
                <h4>Frameworks</h4>
                {this.frameworks.map(framework => <p className="framework">{framework}</p>)}
              </div>
              <div className="other">
                <h4>Other</h4>
                {this.other.map(o => <p className="other">{o}</p>)}
              </div>
            </div>
        </div>
    )
  }
}

export default About; 