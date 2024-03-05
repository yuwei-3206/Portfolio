import React, { useState } from "react";
import "./pop.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProjectPop = ({ project, closePop }) => {
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="pop_bg" onClick={closePop}>
      <div className="pop_content" onClick={handleContentClick}>
        <div className="pop_inner_content">
          <div className="pop_img_container">

            <img src={project.images[currentImageIndex]} alt="Project img" className="pop_img"/>

            
            {project.images.length > 1 && (
              <div className="pop_imgs_swipe">
                <div className="pop_prev_btn" onClick={handlePreviousImage}>
                  <IoIosArrowBack />
                </div>

                <div className="pop_circles">
                  {project.images.map((_, index) => (
                    <span 
                      key={index}
                      className={`pop_circle ${currentImageIndex === index ? "pop_active_circle" : ""}`}
                      onClick={() => setCurrentImageIndex(index)}
                    ></span>
                  ))}
                </div>

                <div className="pop_next_btn" onClick={handleNextImage}>
                  <IoIosArrowForward />
                </div>
              </div>
            )}
          </div>
          
          <div className="pop_text">
            <h2 className="pop_title">{project.name}</h2>
            <p className="pop_description">{project.description}</p>
          </div>
        </div>
        <span className="pop_close" onClick={closePop}>&times;</span>
      </div>
    </div>
  );
};

export default ProjectPop;
