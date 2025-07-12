import React from "react";

const BannerSection = () => {
  return (
    <section className="py-16 bg-[#f5edd3]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-col  justify-center items-center gap-8">
          <div className="flex flex-col justify-center  items-center gap-4">
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe07d6ed99c64d4446d28b_Hands.svg"
              alt="Hands Illustration"
              className="w-16 h-16"
              loading="lazy"
            />
            <div className="flex flex-col justify-center  items-center">
              <h3 className="text-3xl font-semibold text-primary">
                Order Online
              </h3>
              <p className="text-lg text-primary">
                Get your favorites delivered fast.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Rectangle button */}
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-primary rounded-xl shadow-md py-7 px-6 hover:scale-105 transition"
            >
              <img
                src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/6800a9df8041c0cc80734bdc_Logo 1.svg"
                alt="Delivery Logo 1"
                className="h-4 "
                loading="lazy"
              />
            </a>

            {/* Square buttons */}
            <div className="flex gap-3">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary rounded-lg shadow-md p-5 hover:scale-105 transition"
              >
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/6800a9df6f01269e6e3e2664_Logo 2.svg"
                  alt="Delivery Logo 2"
                  className="w-8 h-8 "
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-primary rounded-lg shadow-md p-5 hover:scale-105 transition"
              >
                <img
                  src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/6800a9df3f80a4179f760228_Logo 3.svg"
                  alt="Delivery Logo 3"
                  className="w-8 h-8 "
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
