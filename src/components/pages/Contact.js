import "./contact.css";
import React from "react";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form>
   
          <label for="exampleFormControlTextarea1">Name:</label>
          <textarea
            className="form-control"
            
            type="text"
          ></textarea>
       
          <label for="exampleFormControlTextarea1">Email address:</label>
          <textarea
          className="form-control"
            
          type="email"
            
          ></textarea>
    
          <label for="exampleFormControlTextarea1">Message:</label>
          <textarea
            className="form-control"
            
            type="message"
          ></textarea>
          <br></br>
          <button className="button"
       alt='submit' type='submit'>submit</button>
          
    
      </form>
    </div>
  );
}
