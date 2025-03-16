import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUS";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUS />} />
          {/* <Route path="/aboutus" element={<h1>Page Not Found</h1>} /> */}
          {/* <Route path="/aboutus" element={<h1>Page Not Found</h1>} /> */}
          {/* <Route path="/aboutus" element={<h1>Page Not Found</h1>} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
