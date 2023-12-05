import React from "react";
import { TbCircleDashed } from "react-icons/tb";
import "./styles.css";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="head"
      >
        <a href="/" className="logo">
          <TbCircleDashed />
          <span>SkyTraffic</span>
        </a>
        <a href="#wait" className="wait">
          Join waitlist
        </a>
      </motion.div>
    </div>
  );
}

export default Navbar;
