import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import ListSection from "../Components/ListSection";
import TickerSlider from "../Components/TickerSlider";
import LovedByLocals from "../Components/LovedByLocals";
import AboutSection from "../Components/AboutSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import NearbyCafes from "../Components/NearbyCafes";
import NewsSection from "../Components/NewsItems";
import BannerSection from "../Components/BannerSection";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TickerSlider />
      <ListSection />
      <LovedByLocals />
      <AboutSection />
      <TestimonialsSection />
      <NearbyCafes />
      <NewsSection />
      <BannerSection />
      <TickerSlider />
    </div>
  );
};

export default HomePage;
