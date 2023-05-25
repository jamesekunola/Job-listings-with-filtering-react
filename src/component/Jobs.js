import React from "react";
import "./jobs.css";

const job = (props) => {
  const {
    logo,
    company,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    role,
    level,
    tools,
    handleClick,
  } = props;

  const jobsButton = [role, level, ...languages, ...tools];

  const jobsFilterBtn = (name, index) => {
    return (
      <button
        className="jobs__btns-btn"
        onClick={(e) => handleClick(e.target.textContent)}
        key={index}
      >
        {name}
      </button>
    );
  };

  const styles = { borderLeft: "4px solid var(--Dark-Cyan)" };

  return (
    <div
      className="jobs__container"
      style={props.new && featured ? styles : null}
    >
      <div className="jobs__desc">
        {/* logo */}
        <img src={logo} alt={company} />

        <div className="jobs__desc__content">
          {/* featured and new */}
          <div className="jobs__details">
            <p>{company}</p>
            {props.new && <span>new!</span>}
            {featured && <span>featured</span>}
          </div>

          {/* job position */}
          <p className="jobs__position">{position}</p>
          <p className="jobs__location">
            {postedAt}
            <span className="dot"></span>
            {contract}
            <span className="dot"></span>
            {location}
          </p>
        </div>
      </div>

      <div className="jobs__btns">
        {jobsButton.map((btn, index) => jobsFilterBtn(btn, index))}
      </div>
    </div>
  );
};

export default job;
