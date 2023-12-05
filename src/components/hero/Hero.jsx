import React from "react";
import "./styles.css";
import { FaAngleRight } from "react-icons/fa6";
import Input from "../input/Input";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div id="hero" className="hero_wrapper">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.4,
        }}
      >
        <p className="catch-phrase">Own your journey</p>
        <h2>SkyTraffic helps you make smarter, well-informed travel choices</h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.7,
        }}
      >
        <FaAngleRight />
        <hr />
        <p className="main-p">
          Get access to real-time data, with unparalleled insights into online
          performance across every route.
        </p>
        <div className="input-holder">
          <Input />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
