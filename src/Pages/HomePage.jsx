import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import ListSection from "../Components/ListSection";
import TickerSlider from "../Components/TickerSlider";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TickerSlider />

      <ListSection />
    </div>
  );
};

export default HomePage;
