


import React from 'react';
import "./Testimonials.css"

export default function Testimonials() {
  return (
    <div className="testimonials-container">
      <h5  style={{textAlign:"center"}}>Testimonials</h5>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel"  >
        <div className="carousel-inner"   style={{marginTop:"50px"}}>
          <div className="carousel-item active">
            <div className="image-container">
              <img
                src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ="
                className="d-block circular-image" 
                alt="Testimonial 1"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Phalesus vitas suscipit justo. Marius pharendrs fegut lop.</p>
              <p>Your Testimonials component uses Bootstrap's carousel component to display images in a slideshow format. I noticed that some elements.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="image-container">
              <img
                src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ="
                className="d-block circular-image" // Removed w-100 to keep it small
                alt="Testimonial 2"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Phalesus vitas suscipit justo. Marius pharendrs fegut lop.</p>
              <p>Your Testimonials component uses Bootstrap's carousel component to display images in a slideshow format. I noticed that some elements.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="image-container">
              <img
                src="https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ="
                className="d-block circular-image" // Removed w-100 to keep it small
                alt="Testimonial 3"
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <p>Phalesus vitas suscipit justo. Marius pharendrs fegut lop.</p>
              <p>Your Testimonials component uses Bootstrap's carousel component to display images in a slideshow format. I noticed that some elements.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}


