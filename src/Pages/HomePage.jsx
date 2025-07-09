import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import ListSection from "../Components/ListSection";
import TickerSlider from "../Components/TickerSlider";
import LovedByLocals from "../Components/LovedByLocals";
import AboutSection from "../Components/AboutSection";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TickerSlider />

      <ListSection />
      <LovedByLocals />
      <AboutSection />
    </div>
  );
};

export default HomePage;
