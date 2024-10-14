import React from "react";
import { Link } from "react-router-dom";
import ProductRatings from "./ProductRatings";
const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm mx-auto h-[550px] mb-8 bg-white border rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full h-64 p-2 mb-2 object-contain"
        src={product.images[0].image}
        alt={product.name}
      />

      <div className="p-2 text-center">
        {/* Product Heading with fixed height */}
        <Link to={"/pc-products/" + product._id}>
          <h2 className="text-[17px] text-center h-14 mb-2 font-bold p-2 text-gray-900 overflow-hidden">
            <span>{product.name}</span>
          </h2>
        </Link>

        {/* Star Rating Section */}

        <ProductRatings product={product} />

        {/* Price Section */}
        <div className="p-1">
          <span className="text-lg font-bold text-gray-800">
            Rs. {product.price}
          </span>
        </div>

        {/* Product Description */}
        <p className="text-gray-600 text-sm line-clamp-3 mb-2">
          <span>{product.description}</span>
        </p>
      </div>

      {/* View Details Button */}
      <div className="flex justify-center">
        <Link to={`/pc-products/${product._id}`} className="w-2/5">
          <button className="w-full text-base sm:text-sm rounded-sm bg-[#ff9f00] text-white hover:bg-yellow-400 py-2 transition-colors duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
