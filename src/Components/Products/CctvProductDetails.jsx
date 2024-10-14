import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductRatings from "./ProductRatings";
import { toast } from "react-toastify";

const CctvProductDetails = ({ cartItemCount, setCartItemCount }) => {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/cctv-products/${id}`;
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setProduct(data.product))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);

  function addToCart() {
    const itemExist = cartItemCount.find(
      (item) => item.product._id === product._id
    );

    if (itemExist) {
      setCartItemCount((state) =>
        state.map((item) =>
          item.product._id === product._id
            ? { ...item, qty: item.qty + qty }
            : item
        )
      );
    } else {
      const newItem = { product, qty };
      setCartItemCount((state) => [...state, newItem]);
      toast.success("Added to cart");
    }
  }

  function increaseQty() {
    if (product.stock == qty) {
      return;
    }
    setQty((state) => state + 1);
  }

  function decreaseQty() {
    if (qty > 1) {
      setQty((state) => state - 1);
    }
  }

  return (
    product && (
      <div className="bg-gray-100 h-full">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap mx-4">
            {/* Product Image */}
            <div className="w-full md:w-1/2 px-4 mb-8">
              <div className="w-full h-[500px] flex items-center justify-center  rounded-lg">
                <img
                  src={product.images[0].image}
                  alt="Product"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                  id="mainImage"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 px-4">
              <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">Product #{product._id}</p>

              {/* Product Status */}
              <p className="mb-4">
                Status:{" "}
                <span
                  className={`font-bold ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                  id="stock_status"
                >
                  {product.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>

              <div className="mb-4">
                <span className="text-2xl font-bold mr-2">
                  Rs.{product.price}
                </span>
                <span className="text-gray-500 line-through">Rs.399.9</span>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <ProductRatings product={product} />
              </div>

              {/* Product Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Seller Description */}
              <p className="mb-4">
                Sold by: <span className="font-bold">{product.seller}</span>
              </p>

              {/* Quantity with increment/decrement buttons */}
              <div className="mb-6">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Quantity:
                </label>
                <div className="inline-flex items-center">
                  <button
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600"
                    onClick={decreaseQty}
                    disabled={product.stock == 0}
                  >
                    -
                  </button>

                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={qty}
                    readOnly
                    className="mx-2 w-1/5 h-10 font-extrabold border-2  text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />

                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
                    onClick={increaseQty}
                    disabled={product.stock == 0}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex space-x-4 mb-6">
                <button
                  onClick={addToCart}
                  disabled={product.stock == 0}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
                <button className="bg-gray-200 flex gap-2 items-center text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CctvProductDetails;
