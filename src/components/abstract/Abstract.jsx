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
                  "Our analytics empowers you with insights into airline performance, going as far back as required. Make informed decisions, knowing your choices are backed by real-time data, reducing uncertainties, and enhancing your overall booking experience.",
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
            Data fuelled by community
          </motion.h3>
          <p>
            <Typewriter
              options={{
                strings:
                  "Chat live with passengers in other airports. View verified flight updates from actual passengers. Stay informed, especially in situations where your outbound flight is being expected to come in from another airport",
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
            On-demand performance matrices
          </motion.h3>
          <p>
            <Typewriter
              options={{
                strings:
                  "Get anytime access to performance analytics for all airlines operating your chosen route, including; early departures, on-time departures, delays, and cancellations",
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
