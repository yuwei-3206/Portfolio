import React from "react";
import CV from "../../assets/Yu-Wei Wu_Resume 2024.pdf"

const Calltoaction = () => {
  const openCV = () => {
    window.open(CV, '_blank');
  };
  
  return (
    <div className="header_btns">
      <div className="btn" onClick={openCV}>Resume</div>
      <a className="btn" href="#contact">Get in Touch</a>
    </div>
  );
};

export default Calltoaction;
