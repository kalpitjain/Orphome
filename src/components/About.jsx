import React from "react";
import about from "./images/about.png";

function About() {
  return (
    <div id="about" className="about">
      <h1 className="about-heading">About Us</h1>
      <img src={about} alt="about" className="about-image" />
      <p className="about-description">
        Welcome to Orphome! A website where you can find nearby orphanages &
        celebrate your family or corporate social events at no cost with a
        social impact.
      </p>
      <p className="about-description">
        We believe that everyone should have a chance to enjoy the special
        occasions in life & transform them into a memorable one. Our platform is
        designed to make it easy for you to find the right orphanage & plan the
        event.
      </p>
    </div>
  );
}

export default About;
