import React from "react";

function Navbar() {
  return (
    <div className="max-w-screen-2xl mx-auto container px-6 py-6 md:px-12 shadow-lg h-20 bg-gradient-to-r from-blue-200 via-white to-blue-300">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-4xl cursor-pointer text-blue-700 font-extrabold transform transition-transform duration-300 hover:scale-110">
          WORD<span className="text-red-500">-PDF</span>-converter
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* About Anchor Link */}
          <a
            href="#about"
            className="p-3 text-xl text-gray-800 font-semibold hover:text-blue-700 transform transition-transform duration-300 hover:scale-110"
          >
            About
          </a>

          {/* Features Anchor Link */}
          <a
            href="#features"
            className="p-3 text-xl text-gray-800 font-semibold hover:text-blue-700 transform transition-transform duration-300 hover:scale-110"
          >
            Features
          </a>

          {/* Dashboard Button */}
          <button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-md text-xl font-semibold transform transition-transform duration-300 hover:scale-110">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
