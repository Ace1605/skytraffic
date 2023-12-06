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
            <a href="/" className="logos">
              <TbCircleDashed />
              <span>SkyTraffic</span>
            </a>
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
