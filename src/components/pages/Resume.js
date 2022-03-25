import './resume.css'
import React from 'react';


export default function Resume() {
  return (
    <div className='resume'>
      <h1>Resume</h1>
        <p>
         My Resume:<button className="button"><a
          href="./assets/images/techResumeactual.pdf" alt='My Resume'>Click Here</a></button>
          </p>
          <h2> Front-end Proficiencies</h2>
          <section>
              <p>Html</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>jQuery</p>
              <p>responsive design</p>
              <p>React</p>
             <p>Bootstrap</p>
          </section>
          <h2> Back-end Proficiencies</h2>
          <section>
              <p>APIs</p>
              <p>Node</p>
              <p>Express</p>
              <p>MySQL, Sequepze</p>
              <p>MongoDB, Mongoose</p>
              <p>REST</p>
             <p>GraphQL</p>
          </section>
    </div>
  );
}

