import React from "react";

const NearbyCafes = () => {
  const locations = [
    {
      city: "Brooklyn",
      address: "123 Bedford Ave, Brooklyn, NY 11211",
      hours: "Open daily: 7AM – 7PM",
    },
    {
      city: "Manhattan",
      address: "456 Spring St, New York, NY 10012",
      hours: "Open daily: 7AM – 8PM",
    },
    {
      city: "Queens",
      address: "789 Broadway, Queens, NY 11106",
      hours: "Open daily: 7AM – 6PM",
    },
    {
      city: "Queens",
      address: "134-16 36th Road, Flushing, NY 11354",
      hours: "Open daily: 8AM – 6PM",
    },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-second-primary mb-4">
            Nearby Cafés
          </h2>
          <p className="text-base md:text-lg text-second-primary">
            Find a Brewhaus nearby and stop in for your favorite drink.
          </p>
        </div>

        {/* Map + Locations */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Map */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fd208d86446d8d3511bab4_Map%20Image.svg"
              alt="Map"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Location Blocks */}
          <div className="w-full lg:w-1/2 grid sm:grid-cols-2 gap-6">
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-[#f5edd3] rounded-lg p-6 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="text-sm font-semibold text-primary mb-1">
                    {loc.city}
                  </div>
                  <div className="text-base font-medium text-gray-800">
                    {loc.address}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{loc.hours}</div>
                </div>
                <a
                  href="https://www.google.com/maps"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 bg-primary text-white px-4 py-2 text-sm rounded-full hover:bg-green-700 transition"
                >
                  Get Directions
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 w-full">
          <h3 className="text-4xl font-semibold mb-8 text-second-primary text-center">
            Need Help?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactBlock
              label="General Inquiries"
              value="+1 (212) 555-0198"
              href="tel:+12125550198"
            />
            <ContactBlock
              label="Customer Support"
              value="+1 (718) 555-0243"
              href="tel:+17185550243"
            />
            <ContactBlock
              label="General Email"
              value="hello@bhaus.com"
              href="mailto:hello@bhaus.com?subject=Hello!"
            />
            <ContactBlock
              label="Support Email"
              value="support@bhaus.com"
              href="mailto:support@bhaus.com?subject=Hello!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactBlock = ({ label, value, href }) => (
  <a
    href={href}
    className="block bg-[#fcf3d912] p-6 rounded-2xl shadow-md text-start transition hover:shadow-lg"
  >
    <div className="text-sm text-second-primary">{label}</div>
    <div className="text-lg font-semibold text-second-primary">{value}</div>
  </a>
);

export default NearbyCafes;
