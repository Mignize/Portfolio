import React from "react";
import "../css/Skill.css";

const Skill = (props) => {
    let color = "";
    const {icon, name, progress, level} = props;
    if(level === "High") {
        color = "btn-success";
    }
    else if(level === "Improving") {
        color="btn-warning"
    }
  return (
    <div className="skill column col col-lg-3 col-md-3 text-center">
      <img className="icons" src={icon} alt={name}></img>
      <div className="name-icon">{name}</div>
      <div className="tooltip">
        <div className="progress mt-3 mb-3">
          <div
            className={` ${color} bar-progress`}
            role="progressbar"
            style={{ width: `${progress}%`}}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {level}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;