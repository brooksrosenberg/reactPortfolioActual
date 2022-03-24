import './work.css'
import workImage from './images/carEzScreenshot.png'

import React from "react";

export default function Work() {
  return (
    <div>
      <article className="my-work">
        <h2>My Work</h2>
        <p className="assignment1">
          <figure>
            <a href="https://desolate-springs-51329.herokuapp.com">
              <img
                src = {workImage}
                alt="CarEz"
            
              ></img>
            </a>
          </figure>{" "}
          CarEz: This fullstack application is a website that allows users to
          create an account and interact on a car forum by making posts for a
          variety of car models
        </p>

        <p className="assignment2">
          <figure>
            <a href="https://brooksrosenberg.github.io/dayPlanner/">
              <img
                src="./images/dayplannerscreeenshot.png"
                alt="Day Planner"
      
              ></img>
            </a>
          </figure>{" "}
          Day Planner: This application is a daily scheduling website that lets
          users build,change and save a daily planner for the work day
        </p>

        <p className="assignment3">
          <figure>
            <a href="https://brooksrosenberg.github.io/theOracleProject/">
              <img
                src="./assets/images/OracleProjectScreenshot.png"
                alt="The Oracle Project"
              
              ></img>
            </a>
          </figure>{" "}
          The Oracle Project: This application is a website that tells users
          their daily horoscope based off their star sign and a random fact of
          the day
        </p>
      </article>
    </div>
  );
}
