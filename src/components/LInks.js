import React from "react";

export default function LInks(props) {
  return (
    <div>
      <h3>links</h3>
      <a href={props.links.github}></a>
      <a href={props.links.linkedin}></a>
    </div>
  );
}
