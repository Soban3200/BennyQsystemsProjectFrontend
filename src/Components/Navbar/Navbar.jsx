import React, { useState, useEffect } from "react"; // Import useEffect
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "../Navbar/Navbar.css";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = ({ cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen((prev) => !prev);
  };

  // Effect to close the dropdown after a certain duration
  useEffect(() => {
    let timer;
    if (isProductDropdownOpen) {
      // Set a timer to close the dropdown after 3 seconds (3000ms)
      timer = setTimeout(() => {
        setIsProductDropdownOpen(false);
      }, 3000);
    }
    return () => clearTimeout(timer); // Cleanup the timer if the dropdown is closed or unmounted
  }, [isProductDropdownOpen]); // Run effect when dropdown state changes

  return (
    <header className="bg-black top-0 z-50 text-sm nav-shadow flex justify-between items-center h-16 w-full px-5 py-2 bg-primary">
      <Link to="/" className="flex flex-nowrap items-center">
        <img src={logo} width={120} alt="Logo" />
      </Link>

      {/* Mobile Icons */}
      <div className="flex justify-center items-center space-x-2 md:hidden">
        <Link to="/cart">
          <button className="flex items-center gap-2 text-white relative">
            <ShoppingCartIcon className="h-6" />
            {cartItemCount.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount.length}
              </span>
            )}
            Cart
          </button>
        </Link>

        <Link to="/login">
          <button className="flex items-center gap-2 text-white relative">
            <UserCircleIcon className="h-6" />
            Login
          </button>
        </Link>

        <button onClick={toggleMenu}>
          <Bars3Icon className="text-white h-5 w-5" />
        </button>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden md:block">
        <ul className="flex text-white space-x-11">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="relative">
            <button
              onClick={toggleProductDropdown}
              className="flex items-center gap-2 focus:outline-none"
            >
              Products
              <ChevronDownIcon
                className={`h-5 w-5 transition-transform duration-300 ${
                  isProductDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {/* Dropdown menu */}
            {isProductDropdownOpen && (
              <ul className="absolute text-sm tracking-wide text-nowrap font-semibold top-11 left-0 mt-2 w-38 bg-white rounded-md shadow-lg text-gray-700">
                <li className="px-4 py-2 text-center hover:bg-gray-200">
                  <Link to="/pc-products">PC Products</Link>
                </li>
                <li className="px-4 py-2 text-center hover:bg-gray-200">
                  <Link to="/cctv-products">CCTV Products</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/support" className="nav-link">
              Support
            </Link>
          </li>
        </ul>
      </nav>

      {/* Desktop login and cart buttons */}
      <div className="hidden md:flex items-center space-x-3">
        <Link to="/login" className="flex items-center gap-2 text-white">
          <UserCircleIcon className="h-6" />
          Login
        </Link>
        <Link to={"/cart"}>
          <div className="relative">
            <button className="flex items-center gap-2 text-white">
              <div className="relative">
                <ShoppingCartIcon className="h-6" />
                {cartItemCount.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemCount.length}
                  </span>
                )}
              </div>
              Cart
            </button>
          </div>
        </Link>
      </div>

      {/* Side Menu for Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute top-0 left-0 w-[70%] h-full bg-white shadow-lg p-5">
            <div className="flex justify-between p-3 items-center mobile-nav-link-shadow">
              <button onClick={toggleMenu} className="mb-4">
                <Bars3Icon className="text-black h-6 w-6" />
              </button>
              <Link
                to="/login"
                className="mb-4 text-black flex items-center gap-2 px-2"
              >
                <UserCircleIcon className="h-6 w-6" />
                Log in
              </Link>
            </div>
            <ul className="space-y-4 border-2 p-3 mobile-nav-link-shadow">
              <li className="hover:bg-gray-100 p-2 rounded-md">
                <Link to="/" className="text-black">
                  Home
                </Link>
              </li>
              <li className="p-2">
                <button
                  onClick={toggleProductDropdown}
                  className="flex items-center text-black gap-2"
                >
                  Products
                  <ChevronDownIcon
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isProductDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Dropdown menu */}
                {isProductDropdownOpen && (
                  <ul className="mt-2 space-y-2 bg-white text-gray-700">
                    <li>
                      <Link
                        to="/pc-products"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        PC Products
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cctv-products"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        CCTV Products
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="hover:bg-gray-100 p-2 rounded-md">
                <Link to="/about" className="text-black">
                  About
                </Link>
              </li>
              <li className="hover:bg-gray-100 p-2 rounded-md">
                <Link to="/support" className="text-black">
                  Support
                </Link>
              </li>
            </ul>
            {/* Social media icons */}
            <div className="social-icons h-14 mt-2 flex justify-evenly p-3 items-center mobile-nav-link-shadow">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
