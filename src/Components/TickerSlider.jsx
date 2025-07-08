import React from "react";
import { motion } from "motion/react";
const tickerItems = [
  {
    text: "Great Coffee",
    img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd7beece9d81e20c4a_Smiley.svg",
  },
  {
    text: "Fast Service",
    img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bdc4ce089f4d12b11a_Bolt.svg",
  },
  {
    text: "Cozy Space",
    img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd4c35f0d7add92618_Instagram.svg",
  },
  {
    text: "Handcrafted Drinks",
    img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd7beece9d81e20c47_Sweat Waterdrop.svg",
  },
  {
    text: "Local Roasts",
    img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd229c48735660b163_Smiley Love.svg",
  },
  {
    text: "Global Flavor",
    img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bdf56cf0e0f9cc9eb2_Element.svg",
  },
  {
    text: "Friendly Baristas",
    img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd2d76ac1afebf0eb4_Crown.svg",
  },
];

const TickerSlider = () => {
  return (
    <div className="overflow-hidden py-4 bg-second-primary text-primary">
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="flex whitespace-nowrap gap-8 py-2"
          initial={{ x: i % 2 === 0 ? "0%" : "-100%" }}
          animate={{ x: i % 2 === 0 ? "-100%" : "0%" }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={`${i}-${idx}`}
              className="flex items-center gap-2 text-lg font-medium min-w-fit px-4"
            >
              <span>{item.text}</span>
              <img src={item.img} alt={item.text} className="w-5 h-5" />
            </div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default TickerSlider;
