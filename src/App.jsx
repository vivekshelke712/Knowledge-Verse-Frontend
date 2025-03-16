import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
      <AboutUs />
    </div>
  );
};

export default App;
