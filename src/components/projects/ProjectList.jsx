import web from '../../assets/web.jpg';
import data from '../../assets/data.png';
import c from '../../assets/C.png'
import freeman from '../../assets/freeman.jpg';
import mint from '../../assets/mint.jpg';
import graphic1 from '../../assets/graphic1.png';
import graphic2 from '../../assets/graphic2.png';
import graphic3 from '../../assets/graphic3.png';
import graphic4 from '../../assets/graphic4.png';

const ProjectList = [
    {
      id: 1,
      images: [web],
      name: "Portfolio Website",
      link: "https://github.com/yuwei-3206/Portfolio",
      tool: (
        <div>
          HTML, CSS, JavaScript<br />
          Framework: React
        </div>),
      description: (
        <div>
          Using React as the foundation of development, I've carefully crafted each component to guarantee smooth navigation and captivating content display.<br /><br />
          By utilizing React's component-based structure, I've built reusable UI elements that offer adaptability and scalability.
        </div>)
    },
    {
      id: 2,
      images: [data],
      name: "Database Normalization",
      link: "https://github.com/yuwei-3206/UNICEF_Database-Normalization",
      tool: (
        <div>
          SQL<br />
          Oracle SQL Developer
        </div>),
      description: (
        <div>
          Working with a raw, unstructured dataset comprising 2 million records, using SQL DDL, PL/SQL to normalize and structure the data effectively. Techniques includes Insert, Update, Indexes, Procedures, Views and Triggers.<br/><br/>
          1. Improve database efficiency, reduce redundancy, and enhance data integrity.<br /> <br /> 
          2. Organize data into well-structured tables with minimal duplication and dependencies, following specific rules and principles. <br />
        </div>),
      
    },
    {
      id: 3,
      images: [c],
      name: "C Programs",
      link: "https://github.com/yuwei-3206/C-Programs",
      tool:
        "C/C++",
      description: ""
    },
    {
      id: 4,
      images: [mint],
      name: "Mint Mobile - UX Research",
      link: "https://codesandbox.io",
      tool:
        "Information architecture, Prototyping, User Research",
      description: ""
    },
    {
      id: 5,
      images: [freeman],
      name: "Freeman Beauty - UX Research/Design",
      tool:
        "Figma, Prototyping User Research, Visual Design, ",
      description: ""
    },
    {
      id: 6,
      images: [graphic1, graphic2, graphic3, graphic4],
      name: "Graphic Design",
      link: "https://codesandbox.io",
      tool:
        "Adobe Illustrator, Photoshop, InDesign",
      description: (
        <div>
          Designed various materials like web pages, banners, flyers, logos, signs, annual reports, ads, and product packagings. <br />
        </div>),
    }
  ];
  
  export default ProjectList;