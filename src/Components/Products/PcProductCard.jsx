import React from "react";
import { Link } from "react-router-dom";
import ProductRatings from "./ProductRatings";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto mb-8 bg-white border rounded-lg shadow-md overflow-hidden">
      {/* Image Container */}
      <div className="h-64 bg-gray-100 flex justify-center items-center p-2">
        <img
          className="max-h-full max-w-full object-cover"
          src={product.images[0].image}
          alt={product.name}
        />
      </div>

      <div className="p-4 text-center">
        {/* Product Heading with fixed height */}
        <Link to={`/pc-products/${product._id}`}>
          <h2 className="text-lg h-14 font-bold text-gray-900 overflow-hidden mb-2">
            {product.name}
          </h2>
        </Link>

        {/* Star Rating Section */}
        <ProductRatings product={product} />

        {/* Price Section */}
        <div className="my-2">
          <span className="text-lg font-bold text-gray-800">
            Rs. {product.price}
          </span>
        </div>

        {/* Product Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-2">
          {product.description}
        </p>
      </div>

      {/* View Details Button */}
      <div className="flex justify-center p-4">
        <Link to={`/pc-products/${product._id}`} className="w-full">
          <button className="w-full text-sm rounded-sm bg-[#ff9f00] text-white hover:bg-yellow-400 py-2 transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
