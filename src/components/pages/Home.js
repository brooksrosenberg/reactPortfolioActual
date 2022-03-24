import './home.css'
import React from 'react';


export default function Home() {
  return (
    <div className='homepage'>
      <h1>Home Page</h1>
      <figure>
            <img src=".images/personalAvatar.PNG" alt="Personal Avatar"></img>
        </figure>
      <p>
      Hi I'm Brooks! I'm a full-stack developer.
      </p>
      <p>
                Want to learn more about what I do?<button className="button"><span><a
                            href='#about' alt='About Me'>Click Here</a></span></button>
            </p>
    </div>
  );
}
