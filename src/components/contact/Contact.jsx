import React from "react";
import emailjs from 'emailjs-com';
import "./contact.css";
import { MdAttachEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_q2ylcg6', 'template_b0dduwm', e.target, 'IAEajjpG2A7jS-sjp')
      .then((result) => {
          window.alert('Email sent successfully!');
      }, (error) => {
          console.log(error.text);
      });
  }

  const contactOption = [
    {
      icon: <MdAttachEmail />,
      title: "Email",
      message: "yuwei.wu.0211@gmail.com",
      link: "mailto:yuwei.wu.0211@gmail.com"
    },
    {
      icon: <FaGithubSquare />,
      title: "Github",
      message: "@yuwei-3206",
      link: "https://github.com/yuwei-3206"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      message: "Yu-Wei Wu",
      link: "https://www.linkedin.com/in/yu-wei-wu-yw3206/"
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
              <div className="icon">
                {option.icon}
              </div>
              
              <div className="contact_message">
                <p>
                  {index === 0 ? option.title.split(":")[0] : option.title}
                </p>

                {option.link && option.link.startsWith("mailto:") ? (
                  <a href={option.link}>{option.message}</a>
                ) : (
                  <a href={option.link} target="_blank" rel="noopener noreferrer">
                    {option.message}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <form onSubmit={sendEmail}>
            <div className="form_container">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your E-mail" required />
              <textarea name="message" rows="10" placeholder="Leave your messages"></textarea>
              <input type="submit" value="Send message" className="btn" />
            </div>
        </form>

      </div>
      <p className="copyRight">© 2024 Yu-Wei Wu.</p>
    </section>
  );
};

export default Contact;
