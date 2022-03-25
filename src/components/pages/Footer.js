import "./footer.css";
import Github from './images/gitHub.png'
import Linkedin from './images/linkedinsmall.png'
import Icon from './images/icon.png'
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <a href='https://github.com/brooksrosenberg'>
          <img src={Github} alt='My Github'></img></a> 
    <a href='https://www.linkedin.com/in/brooks-rosenberg-b8376a142/'><img src={Linkedin} alt='My Linkedin'></img></a>
    
    <a href='https://mail.google.com/'><img src = {Icon} alt='Free Apple Mail Icon Download Png - Mail Icon PNG'></img></a>
    </footer>
  );
}
