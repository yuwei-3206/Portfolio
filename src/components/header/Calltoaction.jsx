import React from "react";
import CV from "../../assets/Yu-Wei Wu_Resume 2024.pdf"
import Graphic from "../../assets/graphic/graphic.pdf"

const openCV = () => {
  window.open(CV, '_blank');
};
const openGraphic = () => {
  window.open(Graphic, '_blank');
};


const Calltoaction = () => {
  return (
    <div className="header_btns">
      <div className="btn primaryBtn" onClick={openCV}>Resume</div>
      <a className="btn secondBtn" href="#contact">Get in Touch</a>
    </div>
  );
};

export default Calltoaction;
export { openCV, openGraphic };
