import React from "react";
import "./styles.css";
import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { PiNumberCircleFourFill } from "react-icons/pi";
import { motion } from "framer-motion";

function HowItWorks() {
  return (
    <div>
      <div className="how_wrapper">
        <motion.h4
          initial={{ opacity: 0, x: [100, 0] }}
          whileInView={{ opacity: 1, x: [100, 0] }}
          viewport={{ once: false }}
          transition={{
            duration: 0.4,
          }}
        >
          How it works
        </motion.h4>
      </div>
      <motion.div
        initial={{ scale: 0.3 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{
          duration: 0.8,
        }}
        className="grid"
      >
        <div className="box one">
          <PiNumberCircleOneFill />

          <p>
            <span>Select </span>your departure & arrival airports
          </p>
        </div>
        <div className="box two">
          <PiNumberCircleTwoFill />
          <p>
            <span>View </span>all airlines on your chosen route
          </p>
        </div>
        <div className="box three">
          <PiNumberCircleThreeFill />
          <p>
            <span>Review </span>each airline's performance
          </p>
        </div>
        <div className="box-last four">
          <PiNumberCircleFourFill />
          <p>
            <span>Choose </span>an airline with confidence
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default HowItWorks;
