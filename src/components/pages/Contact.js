import "./contact.css"
import React from 'react';

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact Page</h1>
      <h2>Contact</h2>
            <p> Phone: 508-560-6365
            </p>
            <p>
                Email: bjtr@bu.edu
            </p>
            <p>
                My Github:<button className="button"><span><a
                            href='https://github.com/brooksrosenberg' alt='My Github'>Click Here</a></span></button>
            </p>
            <p>
                My Linkedin:<button className="button"><span><a
                            href='https://www.linkedin.com/in/brooks-rosenberg-b8376a142/' alt='My Linkedin'>Click
                            Here</a></span></button>
            </p>
            <p>
                My Resume:<button className="button"><span><a
                            href="./assets/images/techResumeactual.pdf" alt='My Resume'>Click Here</a></span></button>
            </p>
    </div>
  );
}
