import React from "react";
//Using React-icons from GitHub
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sociallinks = () => {
  const socialDetails = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/yu-wei-wu-yw3206/",
      title: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/yuwei-3206",
      title: "GitHub",
    },
  ];
  return (
    <div className="social_links">
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
