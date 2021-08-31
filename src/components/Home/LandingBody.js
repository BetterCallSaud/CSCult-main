import React from "react";
import { Link } from "react-router-dom";
import "./LandingBody.css";

function LandingBody() {
  return (
    <div className="landingbody">
      <div className="landingbody__content">
        <h3>
          student tech
          <br />
          community
        </h3>
        <p>COMMUNITY | THINK TANK | LEADERS</p>
      </div>
      <div className="landingbody__button">
        <Link to="/dsaweekly">
          <button>
            <span>Check out DSAWeekly</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingBody;
