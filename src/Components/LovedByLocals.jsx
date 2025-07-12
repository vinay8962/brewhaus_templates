import { motion } from "motion/react";
import React from "react";

const menuItems = [
  {
    name: "Cappuccino",
    price: "5.25",
    href: "menu/cappuccino.html",
    img: "https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd0074a442e06fe8ff1625_Cappuccino.avif",
    alt: "Cappuccino",
  },
  {
    name: "Macaroon",
    price: "2.75",
    href: "menu/bubble-tea.html",
    img: "https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd05beb993a3a0bcef1685_Macaroon.avif",
    alt: "Bubble Tea",
  },
  {
    name: "Latte",
    price: "4.80",
    href: "menu/latte.html",
    img: "https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fcfffa690fa1c5625f9949_Latte.avif",
    alt: "Latte",
  },
  {
    name: "Iced Tea",
    price: "4.35",
    href: "menu/iced-tea.html",
    img: "https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd03d917528c381b23700c_Iced%20Tea.avif",
    alt: "Iced Tea",
  },
];

const LovedByLocals = () => {
  return (
    <section className="w-full py-20 bg-[#f5edd3] border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-10">
          {/* Section Heading */}
          <div className="text-center ">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold leading-tight"
              initial={{ scale: 3, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Loved by Locals
            </motion.h2>
            <p className="text-lg text-primary mt-2">
              Local go-to’s everyone loves — handpicked and always fresh.
            </p>
          </div>

          {/* Menu List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="group w-full transform transition duration-300"
              >
                <div className="relative bg-primary overflow-hidden rounded-3xl aspect-square">
                  <img
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-row justify-between items-center">
                  <h3 className="text-xl font-semibold text-primary">
                    {item.name}
                  </h3>
                  <div className="text-lg text-gray-700 flex items-center gap-1">
                    <span>$</span>
                    <span>{item.price}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Explore Button */}
          <a
            href="menu.html"
            className="mt-8 px-6 py-3 bg-primary text-white font-medium rounded-full transition duration-300 hover:bg-opacity-90"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default LovedByLocals;
