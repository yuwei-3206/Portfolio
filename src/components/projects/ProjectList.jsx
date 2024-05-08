import portfolio1 from '../../assets/portfolio/portfolio.png';
import portfolio2 from '../../assets/portfolio/portfolio-gif1.gif';
import portfolio3 from '../../assets/portfolio/portfolio-gif2.gif';
import portfolio4 from '../../assets/portfolio/portfolio-gif3.gif';
import audioplayer1 from '../../assets/audio-player/audio-player.jpg';
import python from '../../assets/Python.png'
import data from '../../assets/data1.png';
import c from '../../assets/C.png'
import freeman1 from '../../assets/freeman/freeman1.png';
import freeman2 from '../../assets/freeman/freeman2.png';
import freeman3 from '../../assets/freeman/freeman3.png';
import freeman4 from '../../assets/freeman/freeman4.png';
import freeman5 from '../../assets/freeman/freemanGIF1.gif';
import freeman6 from '../../assets/freeman/freemanGIF2.gif';
import freeman7 from '../../assets/freeman/freemanGIF3.gif';
import freeman8 from '../../assets/freeman/freemanGIF4.gif';
import freeman9 from '../../assets/freeman/freemanGIF5.gif';
import mint from '../../assets/mint.png';
import graphic1 from '../../assets/graphic/graphic1.png';
import graphic2 from '../../assets/graphic/graphic2.png';
import graphic3 from '../../assets/graphic/graphic3.png';
import graphic4 from '../../assets/graphic/graphic4.png';

const ProjectList = [
    {
      id: 1,
      images: [portfolio1, portfolio2, portfolio3, portfolio4],
      name: "Portfolio Website",
      tool: (
        <div>
          HTML, CSS, JavaScript<br />
          Framework: React
        </div>),
      description: (
        <div>
          Created a portfolio website using React. It's designed to be easy to navigate and visually appealing. The site is built to work well on all devices and has been continuously improved for a better user experience.<br /><br />
          1. Developed components using React to ensure smooth navigation and captivating content display.<br /><br />
          2. Designed website interactivity using React hooks for a consistent user interface without the need for reconfiguration.<br /><br />
          3. Utilized CSS variables for effortless color scheme customization and automated deployment with Node.js.<br /><br />
          <a className="pop_link" href={"https://github.com/yuwei-3206/Portfolio"} target="_blank" rel="noopener noreferrer">View code on Github</a>
        </div>)
    },
    {
      id: 2,
      images: [audioplayer1],
      name: "Audio Player",
      tool: (
        <div>
          HTML, CSS, JavaScript, JSON<br />
          Framework: React
        </div>),
      description: (
        <div>
          You can actually play the audio and interact with it!<br />
          <a className="pop_link" href={"https://yuwei-3206.github.io/Audio-Player/"} target="_blank" rel="noopener noreferrer">Click to visit</a><br /><br />
          This project is an audio player for desktop built with React. It allows users to play songs and podcasts from a playlist. The application includes features like play/pause, previous track, next track, shuffle, and track length functionalities.<br /><br />
          1. Utilized React hooks for dynamic playlist management, fetching data asynchronously from an external JSON file.<br /><br />
          2. Implemented test suites to cover critical functionalities such as play/pause controls, track navigation, and shuffle functionalities.<br /><br />
          3. Implemented features that allow users to actively engage with audio content during playback, enabling real-time interaction with the audio.<br /><br />
        </div>)
    },
    {
      id: 3,
      images: [python],
      name: "Travel Management Application",
      tool: (
        <div>
          JavaScript, Python, API<br />
          Framework: React, Flask
        </div>),
      description: (
        <div>
          The Travel Management Application helps users plan and organize their trips efficiently. Developed using Python and the Flask framework for the backend, along with React for the frontend, this application ensures a smooth and intuitive user experience from registration to travel plan management.<br /><br />
          1. Analyzed research data and developed the client-side application using React.<br /><br />
          2. Developed with Python and Flask, managed backend tasks like routing, request handling, and database management.<br /><br />
          3. Implemented user authentication and authorization mechanisms to secure sensitive user data.<br /><br />
          <a className="pop_link" href={"https://github.com/yuwei-3206/Travel-Management"} target="_blank" rel="noopener noreferrer">View code on Github</a>
        </div>)
    },
    {
      id: 4,
      images: [data],
      name: "Database Normalization",
      tool: (
        <div>
          SQL<br />
          Oracle SQL Developer
        </div>),
      description: (
        <div>
          SQL DDL, PL/SQL was used to normalize and structure a raw dataset of 2 million records. Techniques included Insert, Update, Indexes, Procedures, Views and Triggers.<br/><br/>
          1. Improved database efficiency, reduced redundancy, and enhanced data integrity.<br /> <br /> 
          2. Following specific rules and principles, the data was organized into well-structured tables with minimal duplication and dependencies.<br /><br /> 
          <a className="pop_link" href={"https://github.com/yuwei-3206/UNICEF_Database-Normalization"} target="_blank" rel="noopener noreferrer">View code on Github</a>
        </div>),
      
    },
    {
      id: 5,
      images: [c],
      name: "C Programs",
      tool:
        "C/C++",
      description: (
        <div>
          This project contains two small C programming puzzles.<br/><br/>
          1. Postal Code - The US Postal Service uses bar codes that can be quickly read to route postal mail. The bar code encodes the zip code the letter is being sent to. Each digit is given it's own 5 digit symbol made up of short and long lines.<br /> <br /> 
          2. Numerology - One form of Astrology posits that we can predict our future based on our name. Given a person's name, we can compute three numbers.<br/>
          Heart's Desire: the sum of all vowels in the name.<br/>
          Personality Number: the sum of all consonants in the name.<br/>
          Power Number: the sum of all letters in the name.<br /><br /> 
          <a className="pop_link" href={"https://github.com/yuwei-3206/C-Programs"} target="_blank" rel="noopener noreferrer">View code on Github</a>
        </div>),
    },
    {
      id: 6,
      images: [mint],
      name: "Mint Mobile - UX Research",
      tool:
        "Information architecture, Prototyping, User Research",
      description: (
        <div>
          This is an academic project.<br/><br/>
          1. Analyzed Mint Mobile's website usability and functionality to identify issues encountered while using the website.<br /> <br />
          2. Conducted heuristic evaluations and expert reviews to identify usability issues and areas for improvement.<br /><br />
          <a className="pop_link" href={require("../../assets/mint-Hueristic Evaluation.pdf")} target="_blank" rel="noopener noreferrer">View UX research</a>
        </div>),
    },
    {
      id: 7,
      images: [freeman1, freeman2, freeman3, freeman4, freeman5, freeman6, freeman7, freeman8, freeman9],
      name: "Freeman Beauty - UX Research/Design",
      tool:
        "Figma, Prototyping User Research, Visual Design, ",
      description: (
        <div>
          This is an academic project.<br/><br/>
          1. Conducted user research to understand user behaviors, needs, and pain points.<br /> <br />
          2. Created user personas, user journey maps, and wireframes to visualize user interactions.<br /><br />
          3. Designed user-friendly mockups and prototypes using Figma.<br /><br />
          <a className="pop_link" href={require("../../assets/freeman/Freeman-Product Doc.pdf")} target="_blank" rel="noopener noreferrer">View UX research</a>
        </div>),
    },
    {
      id: 8,
      images: [graphic1, graphic2, graphic3, graphic4],
      name: "Graphic Design",
      tool:
        "Adobe Illustrator, Photoshop, InDesign",
      description: (
        <div>
          Designed various materials like web pages, banners, flyers, logos, signs, annual reports, ads, and product packagings. <br />
        </div>),
    }
  ];
  
  export default ProjectList;