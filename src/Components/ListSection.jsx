// import React from "react";
// import Coffee from "../assets/67fcd4c56b860fe106f68269_Black Coffee.avif";
// const ListSection = () => {
//   return (
//     <div className="h-screen w-full bg-third-primary">
//       <div className="text-primary">
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
//           Find and Get
//         </h1>
//         <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
//           {" "}
//           What You Love
//         </h1>
//       </div>
//       <div>
//         <div className="w-64 h-96  border-2 border-black">
//           <div className="bg-primary w-64 h-64 rounded-full flex justify-center items-center">
//             <img src={Coffee} className="w-2xl h-2xl" alt="" />
//           </div>
//           <div>
//             <h2>Coffee</h2>
//           </div>
//         </div>
//         <div></div>
//         <div></div>
//       </div>
//     </div>
//   );
// };

// export default ListSection;
import React from "react";

const categories = [
  {
    title: "Coffee",
    href: "menu.html#coffee",
    img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce915822fd2280e71c105_Black%20Coffee.avif",
    alt: "Coffee",
  },
  {
    title: "Cold Drinks",
    href: "menu.html#cold-drinks",
    img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce92633545aae0dbbf527_Virgin%20Mojito.avif",
    alt: "Cold Drinks",
  },
  {
    title: "Bakery",
    href: "menu.html#bakery",
    img: "https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce93b81d27502589462e9_Package.avif",
    alt: "Bakery",
  },
];

const ListSection = () => {
  return (
    <section className="w-full h-screen bg-third-primary py-16 px-4 border-b border-gray-300">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        {/* Heading */}
        <div className="text-primary text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Find and Get
            <br className="hidden md:block" />
            What You Love
          </h1>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-18 lg:gap-24">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.href}
              className="group flex flex-col items-center text-center transition-transform duration-300"
            >
              <div className="w-28 h-28 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-primary  overflow-hidden rounded-full shadow-md mb-4">
                <img
                  src={category.img}
                  alt={category.alt}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
                {category.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListSection;
