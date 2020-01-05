import React from 'react';

const SkillCard = (props) => {
    return (
        <div className="skill-card">
          <img className="logo" src={props.logo} alt={props.name}></img>
          <div className="skill-info">
            <span className="skill-name">{props.name}</span>
            <div className="skill-exp">
                {[...Array(props.exp)].map(m => <span><i class="fas fa-circle"></i></span>)}
                {[...Array(10 - props.exp)].map(m => <span><i class="far fa-circle"></i></span>)}
            </div>
          </div>
        </div>
    )
}

export default SkillCard; 