import work1 from '../../assets/web.jpg';
import work2 from '../../assets/data.jpg';
import work3 from '../../assets/freeman.jpg';
import work4 from '../../assets/mint.jpg';
import work5 from '../../assets/work-1.jpg';
import work6 from '../../assets/work-1.jpg';

const ProjectList = [
    {
      id: 1,
      image: work1,
      name: "Portfolio Website",
      link: "https://www.cs.drexel.edu/~dc3435/hawthorne/index.html",
      tool: (
        <div>
          HTML, CSS, JavaScript<br />
          Framework: React
        </div>),
      description: ""
    },
    {
      id: 2,
      image: work2,
      name: "Database Normalization",
      link: "https://anilkumar3494.github.io/fun-aaps/",
      tool: (
        <div>
          SQL<br />
          Environment: Oracle SQL Developer
        </div>),
      description: (
        <div>
          Working with a raw, unstructured dataset comprising 2 million records, using SQL DDL, PL/SQL to normalize and structure the data effectively. Techniques includes Insert, Update, Indexes, Procedures, Views and Triggers.<br/><br/>
          1. Improve database efficiency, reduce redundancy, and enhance data integrity.<br /> 
          2. Organize data into well-structured tables with minimal duplication and dependencies, following specific rules and principles. <br />
        </div>)
    },
    {
      id: 3,
      image: work3,
      name: "Freeman Beauty - UX Research/Design",
      link: "https://replit.com",
      tool:
        "Figma, Prototyping, Visual Design, User Research",
      description: ""
    },
    {
      id: 4,
      image: work4,
      name: "Mint Mobile - UX Research",
      link: "https://codesandbox.io",
      tool:
        "Information architecture, Prototyping, User Research",
      description: ""
    },
    {
      id: 5,
      image: work5,
      name: "Graphic Design",
      link: "https://codesandbox.io",
      tool:
        "Adobe Illustrator, Photoshop, InDesign",
      description: ""
    },
    {
      id: 6,
      image: work6,
      name: "Graphic Design",
      link: "https://codesandbox.io",
      tool:
        "",
      description: ""
    }
  ];
  
  export default ProjectList;