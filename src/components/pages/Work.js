import './work.css'
import workImage from './images/carEzScreenshot.png'
import workImage2 from './images/dayplannerscreeenshot.png'
import workImage3 from './images/OracleProjectScreenshot.png'
import React from "react";

export default function Work() {
  return (
    <div>
      <article className="my-work">
        <h2>My Work</h2>
        <p className="assignment1">
          <figure>
            <a href="https://desolate-springs-51329.herokuapp.com">
              <img className='img1'
                src = {workImage}
                alt="CarEz"
            
              ></img>
            </a>
          </figure>{" "}
          CarEz: This fullstack application is a website that allows users to
          create accounts and interact on a car forum by making posts for a
          different car models. Click on the phto to visit this project or <button class="button" ><a
                            href='https://github.com/brooksrosenberg//carEzProject' alt='My Github'>Click Here to see GitHub</a></button>
        </p>

        <p className="assignment2">
          <figure>
            <a href="https://brooksrosenberg.github.io/dayPlanner/">
              <img className='img2'
                src={workImage2}
                alt="Day Planner"
      
              ></img>
            </a>
          </figure>{" "}
          Day Planner: This application is a daily scheduling website that lets
          users build,change and save a daily planner for the work day. Click on the phto to visit this project or <button class="button" ><a
                            href='https://github.com/brooksrosenberg/dayPlanner' alt='My Github'>Click Here to see GitHub</a></button>
        </p>

        <p className="assignment3">
          <figure>
            <a href="https://brooksrosenberg.github.io/theOracleProject/">
              <img className='img3'
                src={workImage3}
                alt="The Oracle Project"
              
              ></img>
            </a>
          </figure>{" "}
          The Oracle Project: This application is a website that tells users
          their daily horoscope based off their star sign and a random fact of
          the day. Click on the phto to visit this project or <button class="button" ><a
                            href='https://github.com/brooksrosenberg/theOracleProject' alt='My Github'>Click Here  to see GitHub</a></button>
        </p>
      </article>
    </div>
  );
}