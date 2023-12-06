import React, { useEffect, useState } from "react";
import { TbCircleDashed } from "react-icons/tb";
import "./styles.css";
import { motion } from "framer-motion";
import MobileMenu from "../mobilemenu/MobileMenu";

function Navbar() {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  return (
    <>
      <motion.header
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className={show ? "colored-head" : "head"}
      >
        <div className="nav-con">
          <a href="/" className="logo">
            <TbCircleDashed />
            <span>SkyTraffic</span>
          </a>
          <nav className="navigation">
            <a href="/">Home</a>
            <a href="/about_us">About us</a>
          </nav>
          <a href="#wait" className="wait">
            Join waitlist
          </a>
        </div>
      </motion.header>
      <MobileMenu />
    </>
  );
}

export default Navbar;
