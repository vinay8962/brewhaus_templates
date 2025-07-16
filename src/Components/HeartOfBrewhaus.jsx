import React from "react";

const HeartOfBrewhaus = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            The Heart of Brewhaus
          </h2>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 items-start">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe78a0f50c40d444f4435c_Hand.svg"
              alt="Quality First"
              className="w-14 h-14"
            />
            <h3 className="text-xl font-semibold">Quality First</h3>
            <p className="text-gray-600 text-sm">
              We never compromise on flavor or freshness.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd229c48735660b163_Smiley Love.svg"
              alt="Warm Hospitality"
              className="w-14 h-14"
            />
            <h3 className="text-xl font-semibold">Warm Hospitality</h3>
            <p className="text-gray-600 text-sm">
              Everyone is welcome here, no matter the reason or time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center space-y-4">
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe78a0bbdb744a9e957e93_Asterisk.svg"
              alt="Sustainability"
              className="w-14 h-14"
            />
            <h3 className="text-xl font-semibold">Sustainability</h3>
            <p className="text-gray-600 text-sm">
              Ethically sourced beans and eco-conscious choices.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe749f8c1fed29509fd93c_coffee-shop-small-business.avif"
              alt="Barista smiling"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeartOfBrewhaus;
