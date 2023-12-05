import { ToastContainer } from "react-toast";
import Abstract from "./components/abstract/Abstract";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import HowItWorks from "./components/howitworks/HowItWorks";
import Navbar from "./components/navbar/Navbar";
import WaitList from "./components/waitlist/WaitList";
import "./index.css";
function App() {
  return (
    <>
      <div className="container">
        <div className="inner">
          <Navbar />
          <Hero />
          <HowItWorks />
          <Abstract />
          <WaitList />
        </div>
        <ToastContainer delay={3000} position="top-right" />
      </div>
      <Footer />
    </>
  );
}

export default App;
