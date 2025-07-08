import React from "react";
import { motion } from "framer-motion";
import Cup1 from "../assets/67fcd4c5a407d033860da151_Espresso.avif";
import Cup2 from "../assets/67fcd4c56b860fe106f68269_Black Coffee.avif";
import Cup3 from "../assets/67fcd4c5977f8055b117d3fa_Cold Brew.avif";

const HeroSection = () => {
  return (
    <div className="bg-primary pt-20 h-full overflow-hidden w-full flex flex-col justify-center items-center text-center px-4">
      {/* Heading */}
      <motion.div
        className="text-second-primary mb-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
          Life Begins
          <br />
          After Coffee
        </h1>
      </motion.div>

      {/* Subtext */}
      <motion.p
        className="text-second-primary text-lg mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Because great coffee is the start of something even greater.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-4 mb-12 flex-wrap justify-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button className="bg-second-primary text-primary hover:bg-primary hover:text-second-primary border border-second-primary rounded-full py-2 px-6 transition">
          Explore Menu
        </button>
        <button className="bg-primary text-second-primary hover:bg-second-primary hover:text-primary border border-second-primary rounded-full py-2 px-6 transition">
          Our Locations
        </button>
      </motion.div>

      {/* Coffee Cups - whileInView one by one bottom to top */}
      <div className="flex flex-row items-end justify-center gap-4">
        <motion.img
          src={Cup2}
          alt="Black Coffee"
          className="w-[120px] hidden md:block md:w-[200px] lg:w-[300px] rotate-[-8deg]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.2 }}
        />
        <motion.img
          src={Cup1}
          alt="Espresso"
          className="w-[140px] md:w-[240px] lg:w-[360px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.2 }}
        />
        <motion.img
          src={Cup3}
          alt="Cold Brew"
          className="w-[120px] hidden md:block md:w-[200px] lg:w-[300px] rotate-[8deg]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.2 }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
