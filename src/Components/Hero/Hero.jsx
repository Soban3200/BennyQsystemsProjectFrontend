import React from "react";
import BgHome from "../../assets/BgHome.jpg"
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BgHome}
          alt="CCTV and PC Products"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center text-white">
        <h1 className="text-2xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Secure Your Space with Our CCTV & PC Solutions
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg xs:text-wrap">
          We offer top-of-the-line CCTV cameras and PC systems, expertly
          installed to meet your needs. Experience unparalleled security and
          performance.
        </p>
        <div className="flex flex-col xs:flex-row gap-4 w-full xs:w-auto">
          <Link
            to="/pc-products"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 xs:px-4 sm:px-6 rounded-lg transition duration-300 w-full xs:w-auto text-xs xs:text-sm sm:text-base"
          >
            Shop Now
          </Link>
          <Link
            to="/quote"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 xs:px-4 sm:px-6 rounded-lg transition duration-300 w-full xs:w-auto text-xs xs:text-sm sm:text-base"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
