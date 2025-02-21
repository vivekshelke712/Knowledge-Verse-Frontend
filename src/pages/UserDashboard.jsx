import React from "react";
import Navbar from "../components/Navbar";
// import Navbar from "./components/Navbar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const UserDashboard = () => {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex-1 p-6">
        <Hero />
        <Cards />
        <Footer />
      </div>
    </div>
  );
};

export default UserDashboard;
