import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-second-primary">
      {/* Main Footer */}
      <div className="py-12 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row justify-between gap-10">
            {/* Left - Logo & Contact */}
            <div className="flex flex-col gap-6">
              <div className=" bg-second-primary w-12 h-12 rounded-full justify-center flex items-end gap-4">
                <a href="/" className="flex items-center gap-2">
                  <img
                    src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fccb954e77c661a593dbd5_Symbol.svg"
                    alt="Brewhaus"
                    className="h-8"
                    loading="lazy"
                  />
                </a>
              </div>
              <p className="text-2xl font-medium">
                Life Begins <br />
                After Coffee
              </p>

              <div className="flex flex-col text-lg gap-2">
                <a
                  href="tel:+12125550198"
                  className="flex items-center gap-2 hover:underline"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe0dd63148318dfb47d40b_Phone.svg"
                    alt="Phone"
                    className="w-5 h-5"
                    loading="lazy"
                  />
                  <span>+1 (212) 555-0198</span>
                </a>
                <a
                  href="mailto:hello@bhaus.com"
                  className="flex items-center gap-2 hover:underline"
                >
                  <img
                    src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe0dd78fa2aa6edfd627d9_Envelope.svg"
                    alt="Email"
                    className="w-5 h-5"
                    loading="lazy"
                  />
                  <span>hello@bhaus.com</span>
                </a>
              </div>
            </div>

            {/* Right - Menu */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
              {/* Main Menu */}
              <div>
                <p className="font-semibold mb-3">Main</p>
                <ul className="space-y-4 font-bold">
                  <li>
                    <a href="/menu.html" className="hover:underline">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a href="/locations.html" className="hover:underline">
                      Locations
                    </a>
                  </li>
                  <li>
                    <a href="/about-us.html" className="hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/news.html" className="hover:underline">
                      News
                    </a>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div>
                <p className="font-semibold mb-3">Categories</p>
                <ul className="space-y-4 font-bold ">
                  <li>
                    <a
                      href="/menu.html#coffee"
                      target="_blank"
                      className="hover:underline"
                    >
                      Coffee
                    </a>
                  </li>
                  <li>
                    <a
                      href="/menu.html#cold-drinks"
                      target="_blank"
                      className="hover:underline"
                    >
                      Cold Drinks
                    </a>
                  </li>
                  <li>
                    <a
                      href="/menu.html#bakery"
                      target="_blank"
                      className="hover:underline"
                    >
                      Bakery
                    </a>
                  </li>
                </ul>
              </div>

              {/* Socials */}
              <div>
                <p className="font-semibold mb-3">Follow Us</p>
                <div className="flex gap-4 ">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-second-primary p-2 rounded-full "
                  >
                    <img
                      src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe112d8fa2aa6edfd8e2c8_Instagram.svg"
                      alt="Instagram"
                      className="w-6 h-6"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-second-primary p-2 rounded-full "
                  >
                    <img
                      src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe112d61b39022f919ac53_Facebook.svg"
                      alt="Facebook"
                      className="w-6 h-6"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-second-primary p-2 rounded-full "
                  >
                    <img
                      src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe112d2480b26f259262ed_Twitter (X).svg"
                      alt="Twitter"
                      className="w-6 h-6"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Logo Sign */}
          <div className="mt-20">
            <img
              src="https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fe11bb7bf134f3853dca21_Brewhaus.svg"
              alt="Footer Logo"
              className="h-full mx-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="bg-primary py-4 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center flex-col sm:flex-row gap-2">
          <p>2025 © Brewhaus</p>
          <a href="/utility-pages/licenses.html" className="hover:underline">
            Licenses
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
