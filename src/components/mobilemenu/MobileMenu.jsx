import React, { useState } from "react";
import "./styles.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { easeInOut, motion } from "framer-motion";
import { TbCircleDashed } from "react-icons/tb";
import { CgClose } from "react-icons/cg";

function MobileMenu() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  const links = ["Home", "About us"];

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  return (
    <>
      {!open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className={show ? "colored-mobile" : "mobile"}
        >
          <a href="/" className="logo">
            <TbCircleDashed />
            <span>SkyTraffic</span>
          </a>
          <RxHamburgerMenu className="ham" onClick={() => setOpen(!open)} />
        </motion.div>
      )}

      {open && (
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: [-200, 0],
            opacity: 1,
            transition: { duration: 0.5, ease: easeInOut },
          }}
          exit={{
            y: -200,
            opacity: 0,
            transition: { duration: 0.5, ease: easeInOut },
          }}
          className="mobile-container"
        >
          <div className="colored-mobile">
            <a href="/" className="logo">
              <TbCircleDashed />
              <span>SkyTraffic</span>
            </a>
            <CgClose className="ham" onClick={() => setOpen(!open)} />
          </div>
          <nav className="px-4 pb-4">
            {links.map((item) => (
              <a
                href={item === "About us" ? "/about_us" : "/"}
                className="mobile-links"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="wait-holder">
            <a href="#wait" className="mobile-wait">
              Join waitlist
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default MobileMenu;
