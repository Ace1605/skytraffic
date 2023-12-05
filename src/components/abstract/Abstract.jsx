import React from "react";
import "./styles.css";
import { PiPaperPlaneFill } from "react-icons/pi";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Abstract() {
  return (
    <div className="abstract-wrapper">
      <div className="abs-grid">
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.4,
            }}
          >
            Book flights with confidence
          </motion.h3>
          <p>
            <Typewriter
              options={{
                strings:
                  "Our real-time data empowers you with the latest insights into airline performance. Make informed decisions, knowing your choice is backed by up-to-date information, reducing uncertainties and enhancing your overall booking experience",
                autoStart: true,
                loop: false,
                delay: 1,
              }}
            />
          </p>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.4,
            }}
          >
            Own & craft your journey
          </motion.h3>
          <p>
            <Typewriter
              options={{
                strings:
                  "Our real-time data empowers you with the latest insights into airline performance. Make informed decisions, knowing your choice is backed by up-to-date information, reducing uncertainties and enhancing your overall booking experience",
                autoStart: true,
                loop: false,
                delay: 1,
              }}
            />
          </p>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.4,
            }}
          >
            Data fueled by community
          </motion.h3>
          <p>
            <Typewriter
              options={{
                strings:
                  "Our real-time data empowers you with the latest insights into airline performance. Make informed decisions, knowing your choice is backed by up-to-date information, reducing uncertainties and enhancing your overall booking experience",
                autoStart: true,
                loop: false,
                delay: 1,
              }}
            />
          </p>
        </div>
        <div className="abs-paper">
          <PiPaperPlaneFill className="u-plane" />
          <PiPaperPlaneFill className="d-plane" />
          <PiPaperPlaneFill className="t-plane" />
          <PiPaperPlaneFill className="q-plane" />
          <PiPaperPlaneFill className="c-plane" />
          <PiPaperPlaneFill className="s-plane" />
          <PiPaperPlaneFill className="sp-plane" />
          <PiPaperPlaneFill className="e-plane" />
        </div>
      </div>
    </div>
  );
}

export default Abstract;
