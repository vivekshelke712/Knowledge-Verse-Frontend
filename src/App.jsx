import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Testimonial />
    </div>
  );
};

export default App;
