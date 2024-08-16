


import React from 'react';
import './Footer.css'; // Import the CSS file for styles

export default function Footer() {
  return (
    <div
      className="footer-container"
      style={{  marginTop: "20px", marginLeft: "30px", marginRight: "30px" }}
    >
      <div style={{ color:"whitesmoke",  paddingTop: "25px" }}>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item fade-in">
            <h5>Contact Us</h5>
            <br />
            <h6>Email</h6>
            <p>jiullion technologies</p>
            <h6>Phone</h6>
            <p>123456789</p>
            <h6>Address</h6>
            <p>C-260, sector-63, noida, up-201301</p>
          </li>
          <li className="nav-item fade-in">
            <h5>Company</h5>
            <br />
            <p>Appit Software</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>Development Process</p>
            <p>Career</p>
          </li>
          <li className="nav-item fade-in">
            <h5>Our Services</h5>
            <br />
            <p>Website Development</p>
            <p>Mobile App Development</p>
            <p>E-commerce Solutions</p>
            <p>SEO Services</p>
          </li>
          <li className="nav-item fade-in">
            <h5>Contact</h5>
            <br />
            <p>Terms & Policies</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
