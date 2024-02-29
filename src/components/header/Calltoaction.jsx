import React from "react";
import CV from "../../assets/Yuwei Wu_Resume 2024.pdf"

const Calltoaction = () => {
  return (
    <div className="call_to_action">
      <a className="btn" href={CV} download>Download My CV</a>
      <a className="btn" href="#contact">Get in Touch</a>
    </div>
  );
};

export default Calltoaction;
