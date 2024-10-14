import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProductSearch = () => {
  const [keyword, setKeyword] = useState(""); // State for keyword input
  const navigate = useNavigate(); // Hook to navigate

  const searchHandler = (e) => {
    e.preventDefault(); // Prevent form submission
    if (keyword.trim()) {
      navigate(`/search?keyword=${keyword.trim()}`); // Navigate to product search
    }
  };

  const clearSearch = () => {
    setKeyword(""); // Clear the search input
    navigate("/search"); // Reset to products list
  };

  return (
    <div>
      <form className="flex w-full justify-center p-4" onSubmit={searchHandler}>
        <label
          htmlFor="product-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative flex items-center w-full max-w-lg">
          <input
            type="text"
            id="product-search"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)} // Update keyword state
            className="block w-full outline-none p-3 text-sm text-gray-900 border border-gray-300 rounded-l-full rounded-r-full bg-white focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Products"
            onBlur={(e) => {
              if (keyword.trim()) {
                searchHandler(e);
              }
            }}
          />
          {keyword && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-20 bg-transparent text-gray-400 hover:text-gray-600 focus:outline-none"
              aria-label="Clear search"
            >
              <FiX className="w-5 h-5" />
            </button>
          )}
          <button
            type="submit"
            className="absolute right-0 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-r-full text-sm px-4 py-3 border-l border-gray-300"
          >
            <FiSearch className="text-gray-600 w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductSearch;
