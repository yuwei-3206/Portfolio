import React from "react";
import CV from "../../assets/Yuwei Wu_Resume 2024.pdf"

const Calltoaction = () => {
  const openCV = () => {
    window.open(CV, '_blank');
  };
  return (
    <div className="call_to_action">
      <a className="btn" onClick={openCV}>Resume</a>
      <a className="btn" href="#contact">Get in Touch</a>
    </div>
  );
};

export default Calltoaction;
