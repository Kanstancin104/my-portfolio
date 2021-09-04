import React from 'react';
import kripta from '../../images/kripta.jpg';
import corona from '../../images/corona.jpg';
import langapp from '../../images/langapp.png';

const Projects = () => {


    return (
        <div className="container-projects">
            <h1>Check my latest projects below</h1>
            <div className="projects">
                <a href="https://krip2ra.netlify.app/"><div className="project1"><img src={kripta} alt="kriptopic" /></div></a>
                <a href="https://vaccinator.netlify.app/"><div className="project2"><img src={corona} alt="covidpic" /></div></a>
                <a href="https://foreignlangslearnapp.netlify.app/"><div className="project3"><img src={langapp} alt="langpic" /></div></a>
            </div>

        </div>
    )
}
export default Projects;
