import React from 'react';
import SkillCard from './skill-card';

class Skills extends React.Component {
  // frameworks = ["Angular", ".NET", "React", "Scrum", "Jenkins", "Vue"];
  // languages = ["TypeScript", "JavaScript", "HTML", "CSS", "SASS/SCSS", "C#", "Python", "SQL"];
  // certifications = ["AED"];
  // other = ["MySQL", "PhotoShop"];

  languages = [
    { name: "TypeScript",
      logo: require("../images/logos/typescript.png"),
      exp: 8 },
    { name: "JavaScript",
      logo: require("../images/logos/javascript.png"),
      exp: 8 },
    { name: "HTML",
      logo: require("../images/logos/html.png"),
      exp: 7 },
    { name: "CSS",
      logo: require("../images/logos/css.png"),
      exp: 7 },
    { name: "SASS/SCSS",
      logo: require("../images/logos/sass.png"),
      exp: 7 },
    { name: "C#",
      logo: require("../images/logos/csharp.png"),
      exp: 6 },
    { name: "SQL",
      logo: require("../images/logos/sql.png"),
      exp: 6 },     
  ];

  frameworks = [
    { name: "Angular",
      logo: require("../images/logos/angular.png"),
      exp: 8 },     
    { name: ".NET",
      logo: require("../images/logos/dotnet.png"),
      exp: 7 },     
    // { name: "Scrum",
    //   logo: require("../images/logos/scrum.png"),
    //   exp: 8 },    
    { name: "React",
      logo: require("../images/logos/react.png"),
      exp: 5 },      
    { name: "Jenkins",
      logo: require("../images/logos/jenkins.png"),
      exp: 3 },     
    { name: "Vue",
      logo: require("../images/logos/vue.png"),
      exp: 3 } 
  ]

  other = [
    { name: "MySQL",
      logo: require("../images/logos/mysql.png"),
      exp: 7 },     
    { name: "Adobe PhotoShop",
      logo: require("../images/logos/photoshop.png"),
      exp: 8 },     
  ];
  
  render() {
    return (
        <div className="skills">
          <div className="skill-section"> 
            <h3>Languages</h3>
            <div className="skill-cards">
              {this.languages.map(m => <SkillCard name={m.name} logo={m.logo} exp={m.exp}></SkillCard>)}      
            </div>
          </div>

          {/* <hr></hr> */}

          <div className="skill-section"> 
            <h3>Frameworks</h3>
            <div className="skill-cards">
              {this.frameworks.map(m => <SkillCard name={m.name} logo={m.logo} exp={m.exp}></SkillCard>)}      
            </div>
          </div>

          <div className="skill-section"> 
            <h3>Other</h3>
            <div className="skill-cards">
              {this.other.map(m => <SkillCard name={m.name} logo={m.logo} exp={m.exp}></SkillCard>)}      
            </div>
          </div>

          {/* <div className="languages">
            
            {this.languages.map(lang => <p className="language">{lang}</p>)}
          </div>
          <div className="frameworks">
            {this.frameworks.map(framework => <p className="framework">{framework}</p>)}
          </div>
          <div className="other">
            <h4>Other</h4>
            {this.other.map(o => <p className="other">{o}</p>)}
          </div> */}
        </div>
    )
  }
}

export default Skills; 