import React from 'react';
import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="header-container">
        <h2>Contact Us</h2>
      </div>
      <div className="content-container">
        <div className="image-container">
          <img 
            src='https://beardbros.in/wp-content/uploads/2023/12/Contact_me-5ec7b80501d0360014d4d0f7.png'  
            width={"500px"}  
            height={"500px"}
            alt="Contact"
          />
        </div>
        <div className="form-container">
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name@example.com" 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
            <textarea 
              className="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3" 
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}
