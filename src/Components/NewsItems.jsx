import React from "react";

const newsItems = [
  {
    date: "Apr 10, 2025",
    title: "Celebrate the Season with Our New Spring Drink Specials Today",
    link: "news/celebrate-the-season-with-our-new-spring-drink-specials-today.html",
    image:
      "https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2c01b922ecb44ec95c62_women-taking-coffee-with-friends.avif",
  },
  {
    date: "Apr 2, 2025",
    title: "Our New Brewhaus Flushing Location Is Now Officially Open",
    link: "news/our-new-brewhaus-flushing-location-is-now-officially-open.html",
    image:
      "https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2bb8c052eb4377b88f96_coffee-shop-small-business.avif",
  },
  {
    date: "Mar 23, 2025",
    title: "Introducing Our Exciting New Loyalty Program for Coffee Lovers",
    link: "news/introducing-our-exciting-new-loyalty-program-for-coffee-lovers.html",
    image:
      "https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd2b6a5cba4683a18d9a2a_coffee-making-items-indoors.avif",
  },
];

const NewsSection = () => {
  return (
    <section className="py-20 bg-[#f5edd3] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
            What’s New at <br /> Our Coffee Shop
          </h2>
          <a
            href="news.html"
            className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition"
          >
            View All
          </a>
        </div>

        {/* News Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <a
              href={item.link}
              key={index}
              className="group block overflow-hidden rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4 ">
                <p className="text-sm text-primary mb-1">{item.date}</p>
                <h3 className="text-lg font-semibold text-primary">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
