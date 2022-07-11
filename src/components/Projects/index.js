import React from 'react';
import './index.scss';
import pokemon from '../../assets/images/pokemon.png';
import ClickCare from '../../assets/images/clickcare.png';
import Loader from 'react-loaders';

const projects = [
  {
    id: 1,
    title: 'Pokemon App',
    img: pokemon,
    gitHub: 'https://github.com/J-Prado/Individual_Project',
    description:
      'To overcome Henry Bootcamp, this SPA was carried out to show skills when calling an API, creating our own routes, and then use it to customize the front end with React.',
    deploy: 'https://individual-project-seven.vercel.app/',
  },
  {
    id: 2,
    title: 'ClickCare App',
    img: ClickCare,
    gitHub: 'https://github.com/J-Prado/deployClickCare',
    description:
      'To become a web developer a final project was needed and with other 7 members in the teamwe used SCRUM methodology to build a web page (I worked principally as a front end developer).',
    deploy: 'https://deploy-click-care.vercel.app/',
  },
];

const Projects = () => {
  return (
    <>
      <div className="container projects-page">
        {projects?.map(({ id, title, img, gitHub, description, deploy }) => {
          return (
            <div ket={id} className="indiv-projects">
              <div className="projects">
                <img className="projects image" src={img} alt={title} />
              </div>
              <h2>{title}</h2>
              <p align="justify">{description}</p>
              <div>
                <a href={gitHub} className="btn">
                  Git Hub
                </a>
                <a href={deploy} className="btn">
                  Deploy
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Projects;