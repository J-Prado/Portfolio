import { useEffect, useState } from 'react';
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p align="justify">
            I am a Technical Consultant with experience working on system
            configuration, scripting, and software integrations, mainly using
            PowerShell, SQL, and XML. I have also worked with modern web
            technologies such as JavaScript, React, Redux, Node.js, Express, and
            Sequelize through academic and bootcamp projects, including
            applications like ClickCare and a Pokémon web app. In my role at
            Harris, I support system implementation tasks such as requirement
            analysis, documentation, configuration, and client testing. I also
            have previous experience as a Full Stack Teaching Assistant and AI
            Data Trainer. My academic background in engineering has helped me
            build analytical thinking and problem-solving skills, and I continue
            to develop professionally through ongoing learning in data science
            and programming.
          </p>
          <p align="justify">
            As full stack developer now I can handle technologies as:
          </p>
          <ul className="list">
            <li>NodeJs</li>
            <li>Express</li>
            <li>ReactJs</li>
            <li>Redux</li>
            <li>SQL</li>
            <li>Postgres</li>
            <li>Sequelize</li>
          </ul>
          <p align="justify">
            {' '}
            I can also deal with SCRUM methodology as it is an important skill
            that everyone in IT industry must know. I'm confident, naturally
            curious, and perpetually working on improving my know-how.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
