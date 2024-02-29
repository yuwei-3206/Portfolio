import React, { useRef } from "react";

import "./contact.css";
import { MdAttachEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_q2ylcg6', 'template_b0dduwm', form.current, {
        publicKey: 'IAEajjpG2A7jS-sjp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const contactOption = [
    {
      icon: <MdAttachEmail />,
      title: "Email",
      message: "yuwei.wu.0211@gmail.com",
    },
    {
      icon: <FaGithubSquare />,
      title: "Github",
      message: "@yuwei-3206",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      message: "haha",
    },
  ];

  return (
    <section id="contact" className="contact_container">
      <h5>CONTACT</h5>
      <h2>Contact Me</h2>

      <div id="contact_options" className="contact_section_main">
        <div className="contact_options">
          {contactOption.map((option, index) => (
            <article className="contact_option" key={index}>
              <div className="website">
                <div className="icon">
                  {option.icon}
                </div>
              </div>

              <p>
                {index === 0 ? option.title.split(":")[0] : option.title}
              </p>

              <p>{option.message}</p>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <div className="form_container">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your E-mail" required />
              <textarea name="message" rows="10" placeholder="Leave your messages"></textarea>
              <input type="submit" value="Send message" className="btn" />
            </div>
        </form>

      </div>
      <p className="copyRight">Copyright © 2024 Yu-Wei Wu. All rights reserved.</p>
    </section>
  );
};

export default Contact;
