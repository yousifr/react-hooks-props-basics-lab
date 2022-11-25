import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : ""}
      {/* <p>Put the bio in here{props.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <div>{props.links.github}</div>
      <div>{props.links.linkedin}</div>
    </div>
  );
}

export default About;
