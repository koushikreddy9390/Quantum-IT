import React from "react";
import "./HomePage.css";
import Products from "./Products";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        padding: "20px",
        marginLeft: "40px",
      }}
    >
      <div className="TopRight">
        <div className="TopRight">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#" style={{ color: "blue" }}>
                Jillon Technologies
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "blue" }}
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "blue" }}
                    >
                      Featuress
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "blue" }}
                    >
                      Products
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "blue" }}
                    >
                      Testimonial
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                      style={{ color: "blue" }}
                    >
                      Footer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    
      <div className="container">
        <div className="card" style={{ border: "none" }}>
          <div className="card-body">
            <h5 className="card-title">WE MAKE UR IDEA'S</h5>
            <h5 className="card-subtitle mb-2 text-body-secondary">
              INTO REALITY
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="card-link">Get started</button>
            <button className="card-link">Another link</button>
          </div>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-xocv-pROiMF7AL89ogcqX7HEmmQ9n1alg&s"
          alt="pic1"
          className="image"
        />
      </div>


      <div>
        <div>
          <h4 style={{ textAlign: "center" }}>Featuress</h4>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            justifyContent: "space-around",
          }}
        >
          <img
            src="https://i0.wp.com/www.followchain.org/wp-content/uploads/2020/09/working.png?resize=1024%2C768&ssl=1"
            alt="quant1"
            style={{ width: "300px", height: "300px" }}
          />
          <div style={{ marginLeft: "20px" }}>
            <h6 className="quant2">Card Title</h6>
            <p className="quant2">Here is some info about card Title</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            justifyContent: "space-around",
          }}
        >
          <div style={{ marginLeft: "20px" }}>
            <h6 className="quant2">Card Title</h6>
            <p className="quant2">Here is some info about card Title</p>
          </div>
          <img
            src="https://i0.wp.com/www.followchain.org/wp-content/uploads/2020/09/working.png?resize=1024%2C768&ssl=1"
            alt="quant1"
            style={{ width: "300px", height: "300px" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            justifyContent: "space-around",
          }}
        >
          <img
            src="https://i0.wp.com/www.followchain.org/wp-content/uploads/2020/09/working.png?resize=1024%2C768&ssl=1"
            alt="quant1"
            style={{ width: "300px", height: "300px" }}
          />

          <div style={{ marginLeft: "20px" }}>
            <h6 className="quant2">Card Title</h6>
            <p className="quant2">Here is some info about card Title</p>
          </div>
        </div>
      </div>
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}
