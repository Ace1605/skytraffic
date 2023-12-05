import React from "react";
import { TbCircleDashed } from "react-icons/tb";
import "./styles.css";

function Footer() {
  return (
    <div className="footer_wrapper">
      <div className="container">
        <div className="footer-grid inner">
          <div>
            {" "}
            <a href="/" className="logo">
              <TbCircleDashed />
              <span>SkyTraffic</span>
            </a>
          </div>
          <div>
            <h4>About</h4>
            <p>
              We believe that air travelers deserve the knowledge to make
              informed decisions -considering the significant investment in
              their tickets.
            </p>
            <p>
              <span className="mission">Our mission</span> is simple - provide
              accessible, real-time data on airline performance to empower you
              with the information you need to make informed decisions when
              purchasing tickets.
            </p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>info@skytraffic.com</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="bottom_footer">
          <div className="empty"></div>
          <div>
            <p>© copyright skytrafiic 2023</p>
          </div>
          <div>
            <p>Lagos, Nigeria</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
