import './about.css'
import Icon from './images/personalAvatar.png'
import React from 'react';

export default function Home() {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <figure>
            <img src= {Icon} alt="Personal Avatar"></img>
        </figure>
      <p>
      Hi I'm Brooks! I am a recent college graduate from Boston University and have a bachelor's degree in
            Economics. I've taken up coding and web development as I see it as a cutting-edge field for the next 25
            years, and somehow I've figured out how to say 'Hello World' and a few more things along the way.
      </p>
    </div>
  );
}
