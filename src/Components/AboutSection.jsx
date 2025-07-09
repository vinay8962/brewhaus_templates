import React from "react";

const AboutSection = () => {
  return (
    <section className="min-h-screen w-full px-4 md:px-24 lg:px-24 flex justify-center items-center bg-third-primary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Info Column */}
          <div className="flex-1">
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight">
                Good Vibes. <br /> Great Coffee.
              </h2>
              <p className="text-lg max-w-xl text-primary">
                At Brewhaus, we serve great coffee and fresh pastries with care
                and passion, creating a warm, cozy space that feels like home.
              </p>
            </div>

            {/* Benefit Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px] bg-[#1d4e1a1f] rounded-xl">
              {[
                {
                  title: "Great Coffee, Tasty Sips",
                  img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd10710404116158178ef2_Sweat Waterdrop.svg",
                },
                {
                  title: "Warm, Cozy Atmosphere",
                  img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1071d296363b2ce9ef78_Heart.svg",
                },
                {
                  title: "Speedy Service with a Smile",
                  img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd1071d296363b2ce9ef6e_Smile.svg",
                },
                {
                  title: "Local & Sustainable",
                  img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd107167e1523f7eb5a9da_Home.svg",
                },
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center items-center gap-3 p-4 bg-third-primary"
                >
                  <div className="bg-primary rounded-full p-2">
                    <img
                      src={benefit.img}
                      alt={benefit.title}
                      className="w-10 h-10"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-primary text-center">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images Column */}
          <div className="flex-1 grid md:grid-cols-2 md:grid-rows-2 gap-6 h-[500px] md:h-[600px]">
            {/* First Image spans 2 rows */}
            <div className="md:col-span-1 md:row-span-2 rounded-xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd11bfc82841763bc93a7b_medium-shot-barista-with-mask-preparing-coffee.avif"
                alt="Barista"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second Image (top-right) */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd11bf98dbe39dd2a370be_interior-shot-cafe-with-chairs-near-bar-with-wooden-tables.avif"
                alt="Cafe interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Third Image (bottom-right) */}
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd11fedcb344bd7472203b_white-ceramic-teacup-brown-surface.avif"
                alt="Tea cup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
