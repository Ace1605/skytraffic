import React from "react";
import Abstract from "../components/abstract/Abstract";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import HowItWorks from "../components/howitworks/HowItWorks";
import Navbar from "../components/navbar/Navbar";
import WaitList from "../components/waitlist/WaitList";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="inner">
          <Hero />
          <HowItWorks />
          <Abstract />
          <WaitList />
        </div>
      </div>
      <Footer />
    </>
  );
}
