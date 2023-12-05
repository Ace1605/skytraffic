import React from "react";
import Input from "../input/Input";
import "./styles.css";
import { motion } from "framer-motion";

function WaitList() {
  return (
    <motion.div
      initial={{ scale: 0.3 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.8,
      }}
      id="wait"
      className="waitlist_wrapper"
    >
      <h2>Join the waitlist</h2>
      <p>Get priority access when we launch</p>
      <Input />
    </motion.div>
  );
}

export default WaitList;
