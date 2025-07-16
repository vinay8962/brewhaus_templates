import React from "react";
import BannerSection from "../Components/BannerSection";
import TickerSlider from "../Components/TickerSlider";
import AboutSection from "../Components/AboutSection";
import PhilosophySection from "../Components/PhilosophySection";
import Logo from "../assets/67fccb954e77c661a593dbd5_Symbol.svg";

const AboutPage = () => {
  return (
    <div>
      <div className="bg-primary w-full h-[400px]  text-second-primary flex justify-center items-center flex-col gap-5">
        <h1 className=" text-4xl md:text-6xl lg:text-8xl font-bold">
          About Us
        </h1>
        <p>Learn who we are and what we brew for.</p>
      </div>
      <TickerSlider />
      <div>
        <section className="py-16 bg-third-primary">
          <div className="max-w-7xl mx-auto px-4">
            {/* About Intro */}
            <div className="flex flex-col  items-center text-center gap-8 mb-16">
              <img
                src={Logo}
                alt="Brewhaus"
                className="w-12 h-12"
                loading="lazy"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-primary max-w-2xl">
                Brewhaus is where flavor meets craft. From bean to cup, we focus
                on quality, speed, and simplicity – perfect for busy mornings or
                laid-back afternoons.
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="locations.html"
                  className="bg-primary text-second-primary hover:bg-third-primary border hover:text-primary border-primary px-6 py-2 rounded-md text-sm font-medium transition"
                >
                  Our Locations
                </a>
                <a
                  href="news.html"
                  className="border border-primary text-primary hover:bg-primary hover:text-second-primary px-6 py-2 rounded-md text-sm font-medium transition"
                >
                  Our News
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {/* Block 1 */}
              <div className="relative flex flex-col justify-center items-center text-center text-second-primary space-y-4 bg-primary p-6 col-span-2 h-80 rounded-3xl shadow">
                <div className="text-4xl font-bold">10K+</div>
                <h3 className="text-xl font-semibold">Happy Customers</h3>
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe7295510f4f9e62c52d5b_Heart.svg"
                  alt="Heart icon"
                  className="w-8 h-8 absolute top-4 right-4"
                  loading="lazy"
                />
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe72956adf93d1d4cb870d_Sweat Waterdrop.svg"
                  alt="Waterdrop icon"
                  className="w-6 h-6 absolute bottom-4 left-4"
                  loading="lazy"
                />
              </div>

              {/* Image 1 */}
              <div className="h-80">
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe749f469ae823c69d154d_latte-black-coffee-milk-espresso-cinnamon-milk-foam-side-view.avif"
                  alt="Layered latte"
                  className="w-full h-full object-cover rounded-3xl shadow"
                  loading="lazy"
                />
              </div>

              {/* Block 2 */}
              <div className="relative flex flex-col justify-center items-center text-center space-y-4 text-second-primary bg-primary p-6 h-80 rounded-3xl shadow">
                <div className="text-4xl font-bold">4</div>
                <h3 className="text-xl font-semibold">Cafés</h3>
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe75b6916643c7660952ca_Home.svg"
                  alt="Home icon"
                  className="w-8 h-8 absolute top-4 right-4"
                  loading="lazy"
                />
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe75b5bfd4477cf22a5034_Bolt.svg"
                  alt="Bolt icon"
                  className="w-6 h-6 absolute bottom-4 left-4"
                  loading="lazy"
                />
              </div>

              {/* Image 2 */}
              <div className="h-80">
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe749ff268014f07936799_people-sitting-table-full-shot.avif"
                  alt="People talking"
                  className="w-full h-full object-cover rounded-3xl shadow"
                  loading="lazy"
                />
              </div>

              {/* Block 3 */}
              <div className="relative flex flex-col justify-center items-center text-center space-y-4 text-second-primary bg-primary p-6 h-80 rounded-3xl shadow">
                <div className="text-4xl font-bold">20</div>
                <h3 className="text-xl font-semibold">Products</h3>

                {/* Smiley icon – Top Right */}
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe75b5b386e7e2dd318995_Smiley Love.svg"
                  alt="Smiley icon"
                  className="w-8 h-8 absolute top-4 right-4"
                  loading="lazy"
                />

                {/* Crown icon – Bottom Left */}
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe75b6846be772f61dd533_Crown.svg"
                  alt="Crown icon"
                  className="w-6 h-6 absolute bottom-4 left-4"
                  loading="lazy"
                />
              </div>

              {/* Image 3 */}
              <div className="col-span-1 md:col-span-2 h-80">
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe749f8c1fed29509fd93c_coffee-shop-small-business.avif"
                  alt="Barista with green cup"
                  className="w-full h-full object-cover rounded-3xl shadow"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <PhilosophySection />
      <AboutSection />
      <BannerSection />
      <TickerSlider />
    </div>
  );
};

export default AboutPage;
