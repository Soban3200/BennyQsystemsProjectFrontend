import React from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { BorderBeam } from "@stianlarsen/border-beam";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-[64px] relative xs:bottom-28 sm:bottom-5 overflow-hidden">
      {/* Card Wrapper */}
      <div className="relative w-[400px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md shadow-xl">
        {/* BorderBeam Animation */}
        <BorderBeam size={500} duration={5} borderWidth={3} />

        {/* Inner Content Card */}
        <div className="relative p-2 m-2 rounded-md bg-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-bold text-center mb-6">
            Register
          </h1>

          {/* Email Input */}
          <div className="relative my-4">
            <input
              type="email"
              id="email"
              className="block w-full px-0 py-2 text-base sm:text-lg text-gray-900 bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 peer transition duration-300 ease-in-out"
              required
              placeholder=" "
              aria-label="Your Email"
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-2 text-gray-500 text-sm sm:text-base transform -translate-y-6 scale-75 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Your Email
            </label>
            <BiUser className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 peer-focus:text-indigo-800 transition-all duration-300 ease-in-out" />
          </div>

          {/* Phone Number Input */}
          <div className="relative my-4">
            <input
              type="tel"
              id="phoneNumber"
              className="block w-full px-0 py-2 text-base sm:text-lg text-gray-900 bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 peer transition duration-300 ease-in-out"
              required
              placeholder=" "
              aria-label="Phone Number"
            />
            <label
              htmlFor="phoneNumber"
              className="absolute left-0 top-2 text-gray-500 text-sm sm:text-base transform -translate-y-6 scale-75 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Phone Number
            </label>
          </div>

          {/* Address Input */}
          <div className="relative my-4">
            <input
              type="text"
              id="address"
              className="block w-full px-0 py-2 text-base sm:text-lg text-gray-900 bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 peer transition duration-300 ease-in-out"
              required
              placeholder=" "
              aria-label="Address"
            />
            <label
              htmlFor="address"
              className="absolute left-0 top-2 text-gray-500 text-sm sm:text-base transform -translate-y-6 scale-75 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Address
            </label>
          </div>

          {/* Password Input */}
          <div className="relative my-5">
            <input
              type="password"
              id="password"
              className="block w-full px-0 py-2 text-base sm:text-lg text-gray-900 bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 peer transition duration-300 ease-in-out"
              required
              placeholder=" "
              aria-label="Password"
            />
            <label
              htmlFor="password"
              className="absolute left-0 top-2 text-gray-500 text-sm sm:text-base transform -translate-y-6 scale-75 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Password
            </label>
            <AiOutlineLock className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 peer-focus:text-indigo-500 transition-all duration-300 ease-in-out" />
          </div>

          {/* Confirm Password Input */}
          <div className="relative my-5">
            <input
              type="password"
              id="confirmPassword"
              className="block w-full px-0 py-2 text-base sm:text-lg text-gray-900 bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 peer transition duration-300 ease-in-out"
              required
              placeholder=" "
              aria-label="Confirm Password"
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-0 top-2 text-gray-500 text-sm sm:text-base transform -translate-y-6 scale-75 origin-[0] peer-focus:left-0 peer-focus:text-indigo-500 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Confirm Password
            </label>
            <AiOutlineLock className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 peer-focus:text-indigo-500 transition-all duration-300 ease-in-out" />
          </div>

          {/* Phone Number Input */}
          <div className="relative my-4">
            <input
              type="tel"
              id="phoneNumber"
              className="block w-full px-0 py-2 text-base sm:text-lg text-gray-900 bg-transparent border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 peer transition duration-300 ease-in-out"
              required
              placeholder=" "
              aria-label="Phone Number"
            />
            <label
              htmlFor="phoneNumber"
              className="absolute left-0 top-2 text-gray-500 text-sm sm:text-base transform -translate-y-6 scale-75 origin-[0] peer-focus:left-0 peer-focus:text-indigo-800 peer-focus:top-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 transition-all duration-300 ease-in-out"
            >
              Phone Number
            </label>
          </div>

          {/* Address Input (TextArea for more characters) */}
          <div className="relative my-4">
          <label
              htmlFor="address"
              className=" font-weight-bolder text-blue-800 "
            >
              Address
            </label>
            <textarea
              id="address"
              className="block w-full p-2 px-2 py-2 text-base sm:text-lg text-gray-900 bg-transparent border-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 peer transition duration-300 ease-in-out"
              required
              placeholder=" "
              rows="3"
              aria-label="Address"
            />
            
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mb-4 text-base sm:text-lg rounded-full bg-gray-300 text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
          >
            Register
          </button>

          {/* Login Link */}
          <div className="mt-4 text-center">
            <span className="text-gray-700 text-sm sm:text-base">
              Already have an account?{" "}
              <Link to="/login" className="text-indigo-500 hover:underline">
                Login here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
