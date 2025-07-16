import { motion } from "motion/react";
import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="min-h-screen w-full px-4 md:px-24 lg:px-24 flex justify-center items-center bg-third-primary py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight"
            initial={{ scale: 3, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            What People <br /> Love About Us
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ">
          {/* Testimonial 1 */}
          <div className="flex flex-col h-full">
            <div className="bg-[#f5edd3] p-6 rounded-lg flex-1 flex flex-col justify-between border border-gray-200">
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd14bf7ce997bd0fd7a6a9_Quote.svg"
                alt="quote icon"
                className="w-8 h-8 mb-4"
              />
              <p className="text-base text-gray-800 mb-4">
                Brewhaus has spoiled other coffee shops for me – in the best
                way. Great espresso, fresh pastries, and a team that makes you
                feel like a regular from day one.
              </p>
              <div className="text-sm font-medium text-gray-600">
                Patrick M. – Espresso lover
              </div>
            </div>
            <div className="mt-4 h-96">
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1685088c8a7f976184b8_human-hand-pouring-milk-into-black-coffee-cafeteria.avif"
                alt="Milk being poured into black coffee"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col h-full">
            <div className="h-96">
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1684d296363b2cefd962_milk-pouring-into-glass-with-coffee.avif"
                alt="Milk swirling into iced coffee"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#f5edd3] p-6 rounded-lg flex-1 flex flex-col justify-between mt-4 border border-gray-200">
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd14bf7ce997bd0fd7a6a9_Quote.svg"
                alt="quote icon"
                className="w-8 h-8 mb-4"
              />
              <p className="text-base text-gray-800 mb-4">
                I stop by every morning before work, and it’s the best part of
                my day. The iced latte is my go-to, but I’ve honestly never had
                a bad drink here. Everything tastes handcrafted and full of
                care.
              </p>
              <div className="text-sm font-medium text-gray-600">
                Jordan T. – Iced latte addict
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flex flex-col h-full">
            <div className="bg-[#f5edd3] p-6 rounded-lg flex-1 flex flex-col justify-between border border-gray-200">
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd14bf7ce997bd0fd7a6a9_Quote.svg"
                alt="quote icon"
                className="w-8 h-8 mb-4"
              />
              <p className="text-base text-gray-800 mb-4">
                Always a warm, welcoming vibe — perfect for a quick coffee or a
                quiet read. The banana bread? Totally addictive.
              </p>
              <div className="text-sm font-medium text-gray-600">
                Sofia R. – Coffee fan
              </div>
            </div>
            <div className="mt-4 h-96">
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd168562e9f90985dc66ef_female-barista-with-apron-decorating-coffee-glass-with-milk.avif"
                alt="Barista pouring milk into latte"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/locations.html"
            className="inline-block bg-primary hover:bg-green-700 text-white px-6 py-3 rounded-full text-base font-medium transition"
          >
            Our Locations
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
