import React from 'react';
import '../styles/portfolio.css';
import project1Image from '../assets/project1.png';
import project2Image from '../assets/project2.png';
import project3Image from '../assets/project3.png';
import project4Image from '../assets/project4.png';

function Portfolio() {
    const projects = [
        {
            title: "SQL Employee Tracker",
            description: "sql content management system that allows users to view and interact with information stored in a database via the command line.",
            image: project1Image,
            link: "https://github.com/soibun-sol/psotgreSQL-Employee-Tracker",
            demo: "https://drive.google.com/file/d/1OQKY8MuDjJTFmVkrisVwvN3ogvwqmNUe/view?usp=sharing",
        },
        {
            title: "README Generator",
            description: "An application that dynamically generates a README.md file based on user input.",
            image: project2Image,
            link: "https://github.com/soibun-sol/readeMe-Gen",
            demo:"https://drive.google.com/file/d/10R3yQ1PlNlXnVcy_tFYcmyeDTGt5XVCo/view?usp=sharing"
            
        },
        {
            title: "Weather Dashboard",
            description: "a weather dashboard that runs a geolaction api to display the current weather with a section to add and delete frequently visited pages for quicker access.",
            image: project4Image,
            link: "https://soibun-sol.github.io/multi-search-dashboard/",
        },
        {
            title: "trailTrekker.io",
            description: "a trail finding application that allows users to search for trails based on location and difficulty. the application also allows users to save trails to their profile for future reference. user interactivity is available through reviews", 
            image: project3Image,
            link: "https://github.com/abbylemieux/trailTrekker.io",
        }

    ];

  return (
    <div className="portfolio-container">
          <div className="portfolio">
        <h2>My Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;