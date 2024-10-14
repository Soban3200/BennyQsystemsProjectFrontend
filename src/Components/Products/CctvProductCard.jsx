import React from "react";
import { Link } from "react-router-dom";
import ProductRatings from "./ProductRatings";

const CctvProductCard = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto h-auto mb-8 bg-white border rounded-lg shadow-md overflow-hidden">
      {/* Image container with consistent aspect ratio */}
      <div className="relative w-full h-64  flex items-center justify-center">
        <img
          className="max-h-full max-w-full object-contain"
          src={product.images[0].image}
          alt={product.name}
        />
      </div>

      <div className="p-4 text-center">
        {/* Product Heading with fixed height */}
        <Link to={"/cctv-products/" + product._id}>
          <h2 className="text-[17px] h-14 mb-2 font-bold text-gray-900 overflow-hidden">
            <span>{product.name}</span>
          </h2>
        </Link>

        {/* Star Rating Section */}
        <ProductRatings product={product} />

        {/* Price Section */}
        <div className="mt-2">
          <span className="text-lg font-bold text-gray-800">
            Rs. {product.price}
          </span>
        </div>

        {/* Product Description with line clamp */}
        <p className="text-gray-600 text-sm line-clamp-3 my-2">
          {product.description}
        </p>
      </div>

      {/* View Details Button */}
      <div className="flex justify-center mb-4">
        <Link to={`/cctv-products/${product._id}`} className="w-2/5">
          <button className="w-full text-base sm:text-sm rounded-sm bg-[#ff9f00] text-white hover:bg-yellow-400 py-2 transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CctvProductCard;
