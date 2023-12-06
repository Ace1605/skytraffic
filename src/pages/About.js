import React from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import "./about.css";

function About() {
  return (
    <div className="about-page">
      <Navbar />
      <div className="container">
        <div className="inner hip">
          <h2>About us</h2>
          <p>
            We are a technology startup on a mission to help air travelers make
            better-informed travel choices. We hope to do this by providing
            real-time data analytics on airline performance, over a selected
            period and across all travel routes. We are looking to disrupt the
            aviation industry by redefining the basis for choice, starting with
            performance. We believe air travelers should have the data they need
            to make informed decisions, considering the significant investments
            in their tickets. We would like to put this data in their hands and
            ensure its readily available whenever needed. This in itself is our
            mission.
          </p>
        </div>
      </div>
      <div className="about-footer">
        <div className="foots">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
