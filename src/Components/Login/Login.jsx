import React from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineLock } from "react-icons/ai";
import { BorderBeam } from "@stianlarsen/border-beam";


const Login = () => {
  return (
    <div className="flex  flex-col items-center justify-center w-full min-h-screen pt-[64px] relative  xs:bottom-28 sm:bottom-5  overflow-hidden ">
      {/* Card Wrapper */}
      <div className="relative w-[400px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md shadow-xl ">
        {/* BorderBeam Animation */}
        <BorderBeam size={500} duration={5} borderWidth={3} />
        
        {/* Inner Content Card */}
        <div className=" relative p-2 m-2 rounded-md bg-white">
         
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-bold text-center mb-6">
            Login
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

          {/* Remember Me Checkbox */}
          <div className="flex items-center mb-4 text-sm sm:text-base">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-gray-700">
              Remember me
            </label>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-4">
            <span className="text-indigo-500 text-sm sm:text-base hover:underline cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mb-4 text-base sm:text-lg rounded-full bg-gray-300 text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300"
          >
            Login
          </button>

          {/* Register Link */}
          <div className="mt-4 text-center">
            <span className="text-gray-700 text-sm sm:text-base">
              New Here?{" "}
              <a href="/register" className="text-indigo-500 hover:underline">
                Create an Account
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
