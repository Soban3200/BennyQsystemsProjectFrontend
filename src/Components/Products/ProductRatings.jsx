import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const ProductRatings = ({product}) => {
  const totalStars = 5;
  const rating = product.ratings; // Assuming rating is a number between 0 and 5
  const fullStars = Math.floor(rating); // Full stars count
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div>
      <div className="flex justify-center mb-2 p-1 ">
        {[...Array(totalStars)].map((_, index) => (
          <span key={index}>
            {index < fullStars ? (
              <FaStar className="text-yellow-600 text-xl" />
            ) : index === fullStars && hasHalfStar ? (
              <FaStarHalfAlt className="text-yellow-600 text-xl" />
            ) : (
              <FaRegStar className="text-gray-300 text-xl" />
            )}
          </span>
        ))}
        <span className="ml-2 text-sm">{product.ratings}</span>
      </div>
    </div>
  );
};

export default ProductRatings;
