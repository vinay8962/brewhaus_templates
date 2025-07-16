import React from "react";

const PhilosophySection = () => {
  return (
    <section className="py-16 bg-third-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
            The Heart <br /> of Brewhaus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center my-10 text-primary">
          {/* Quality First */}
          <div className="flex flex-col items-center text-center justify-center border border-gray-300 bg-[#f5edd3] rounded-3xl h-52">
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe78a0f50c40d444f4435c_Hand.svg"
              alt="Quality First"
              className="w-16 h-16"
            />
            <div>
              <h3 className="text-xl font-semibold">Quality First</h3>
              <p className=" ">We never compromise on flavor or freshness.</p>
            </div>
          </div>

          {/* Warm Hospitality */}
          <div className="flex flex-col items-center text-center justify-center border border-gray-300 bg-[#f5edd3] rounded-3xl h-52">
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce0bd229c48735660b163_Smiley Love.svg"
              alt="Warm Hospitality"
              className="w-16 h-16"
            />
            <div>
              <h3 className="text-xl font-semibold">Warm Hospitality</h3>
              <p className=" ">
                Everyone is welcome here, no matter the reason or time.
              </p>
            </div>
          </div>

          {/* Sustainability */}
          <div className="flex flex-col items-center text-center justify-center border border-gray-300 bg-[#f5edd3] rounded-3xl h-52">
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe78a0bbdb744a9e957e93_Asterisk.svg"
              alt="Sustainability"
              className="w-16 h-16"
            />
            <div>
              <h3 className="text-xl font-semibold">Sustainability</h3>
              <p className="w-50    ">
                Ethically sourced beans and eco-conscious choices.
              </p>
            </div>
          </div>
        </div>
        {/* Coffee Shop Image */}
        <div className="">
          <img
            src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe749f8c1fed29509fd93c_coffee-shop-small-business.avif"
            alt="Barista smiling"
            className="w-full h-full max-h-[750px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
