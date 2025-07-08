import React, { useState, useEffect } from "react";
import logo from "../assets/67fccb954e77c661a593dbd5_Symbol.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variants for hamburger
  const topLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };
  const middleLineVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomLineVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -6 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto" },
  };

  return (
    <div className="w-full flex flex-col items-center h-auto bg-primary">
      {/* Top Nav */}
      <div
        className={`fixed w-11/12 md:w-1/3 h-14 flex items-center justify-center rounded-3xl px-4 mt-4 z-50 transition-all duration-300 ${
          isScrolled ? "bg-primary/60 backdrop-blur-md shadow-lg" : "bg-primary"
        }`}
      >
        <ul className="flex flex-row justify-between items-center text-second-primary w-full max-w-2xl gap-4 text-sm md:text-base">
          <li className="flex justify-center items-center bg-second-primary p-2 rounded-full md:hidden">
            <img src={logo} alt="Logo" className="w-8 h-8" />
          </li>
          <li className="hidden sm:block hover:underline cursor-pointer">
            Menu
          </li>
          <li className="hidden sm:block hover:underline cursor-pointer">
            Locations
          </li>
          <li className="relative justify-center items-center p-2 rounded-full hidden sm:flex group w-12 h-12 bg-second-primary overflow-hidden">
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 transition-all duration-300 ease-in-out group-hover:translate-y-8 group-hover:opacity-0 absolute top-2"
            />
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-[-2rem] absolute"
            />
          </li>
          <li className="hidden sm:block hover:underline cursor-pointer">
            About
          </li>
          <li className="hidden sm:block hover:underline cursor-pointer">
            News
          </li>

          {/* Hamburger */}
          <li
            className="cursor-pointer list-none block sm:hidden bg-second-primary rounded-4xl p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              className="w-8 h-8 flex flex-col justify-center items-center gap-[6px]"
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="w-6 h-0.5 bg-primary rounded origin-center"
                variants={topLineVariants}
              />
              <motion.span
                className="w-6 h-0.5 bg-primary rounded"
                variants={middleLineVariants}
              />
              <motion.span
                className="w-6 h-0.5 bg-primary rounded origin-center"
                variants={bottomLineVariants}
              />
            </motion.div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <motion.ul
        className="flex flex-col sm:hidden items-center bg-primary text-second-primary w-11/12 rounded-b-2xl overflow-hidden mt-20 z-40"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        transition={{ duration: 0.3 }}
      >
        <li className="py-2 hover:underline cursor-pointer">Menu</li>
        <li className="py-2 hover:underline cursor-pointer">Locations</li>
        <li className="py-2 hover:underline cursor-pointer">About</li>
        <li className="py-2 hover:underline cursor-pointer">News</li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
