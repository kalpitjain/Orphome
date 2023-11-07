import React from "react";
import { Link } from "react-router-dom";

function Title() {
  return (
    <div id="title" className="title">
      <div className="text-container">
        <h1 className="main-heading">
          Celebrate Your Family & Corporate Social Events at Free of Cost with a
          Social Impact.
        </h1>
        <p className="slogan">Making a Difference - Celebrate with Orphome</p>
        <Link to="/map">
          <button type="button" className="btn btn-warning map-button">
            Find An Orphanage
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Title;
