import { ToastContainer } from "react-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer delay={3000} position="top-right" />
    </div>
  );
}

export default App;
