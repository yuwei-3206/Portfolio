import React from "react";
//Using React-icons from GitHub
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";

const Sociallinks = () => {
  const socialDetails = [
    {
      icon: <FaLinkedin />,
      href: "#Link to Site",
      title: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "#Link to Site",
      title: "GitHub",
    },
    {
      icon: <MdOutlineWeb />,
      href: "#Link to Site",
      title: "My Website",
    },
  ];
  return (
    <div className="social_links">
      {/* Dynamically updating values */}
      {socialDetails.map((socialDetail, index) => (
        <a
          href={socialDetail.href}
          key={index}
          title={socialDetail.title}
          target="_blank"
          rel="noreferrer"
        >
          {socialDetail.icon}
        </a>
      ))}
    </div>
  );
};

export default Sociallinks;
