import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CartEmptyImg from "../../assets/CartEmptyGif.gif";
import OrderPlaced from "../../assets/OrderPlaced.gif";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Cart = ({ cartItemCount, setCartItemCount }) => {
  const [complete, setComplete] = useState(false);
  const [isFavorite,setIsFavorite] = useState(false);
 
  // Toggle favorite status of an item
   function toggleFavorite(){
    setIsFavorite(!isFavorite);
   }
  function increaseQty(item) {
    if (item.product.stock == item.qty) return;
    const updatedItems = cartItemCount.map((i) => {
      if (i.product._id == item.product._id) {
        i.qty++;
      }
      return i;
    });
    setCartItemCount(updatedItems);
  }

  function decreaseQty(item) {
    if (item.qty > 1) {
      const updatedItems = cartItemCount.map((i) => {
        if (i.product._id == item.product._id) {
          i.qty--;
        }
        return i;
      });
      setCartItemCount(updatedItems);
    }
  }

  function removeItem(item) {
    const updatedItems = cartItemCount.filter(
      (i) => i.product._id != item.product._id
    );
    setCartItemCount(updatedItems);
  }

  function placeOrder() {
    const apiUrl = `${import.meta.env.VITE_API_URL}`;
    fetch(apiUrl + "/order/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cartItemCount),
    }).then(() => {
      setCartItemCount([]);
      setComplete(true);
    });
  }

  return cartItemCount.length > 0 ? (
    <Fragment>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <h2 className="text-center text-xl mb-4 font-semibold text-gray-900 dark:text-white sm:text-2xl">
          Shopping Cart
        </h2>
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {cartItemCount.map((item, index) => (
            <Fragment key={index}>
              <div className="mx-auto mb-4 w-full lg:max-w-2xl xl:max-w-4xl">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                  <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                    <Link to={`/pc-products/${item.product._id}`}>
                      <img
                        className="h-35 w-20 dark:hidden"
                        src={item.product.images[0].image}
                        alt="Product"
                      />
                      <img
                        className="hidden h-25 w-25 dark:block"
                        src={item.product.images[0].image}
                        alt="Product"
                      />
                    </Link>

                    <div className="flex items-center justify-between md:order-3 md:justify-end">
                      <div className="flex items-center">
                        <button
                          type="button"
                          onClick={() => decreaseQty(item)}
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                          <svg
                            className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 2"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 1h16"
                            />
                          </svg>
                        </button>
                        <input
                          type="text"
                          id="counter-input"
                          className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                          value={item.qty}
                          readOnly
                        />
                        <button
                          type="button"
                          onClick={() => increaseQty(item)}
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                        >
                          <svg
                            className="h-2.5 w-2.5 text-gray-900 dark:text-white"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 1v16M1 9h16"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="text-end md:order-4 md:w-32">
                        <p className="text-base font-bold text-gray-900 dark:text-white">
                          Rs.{item.product.price}
                        </p>
                      </div>
                    </div>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                      <Link
                        to={`/pc-products/${item.product._id}`}
                        className="flex mb-2 font-extrabold"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-base font-medium text-gray-900 dark:text-white outline-none">
                        {item.product.description}
                      </p>

                      <div className="flex items-center gap-4">
                        <button
                          onClick={toggleFavorite}
                          type="button"
                          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                        >
                          <svg
                            className="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill={isFavorite ? 'red' : 'none'}
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                            />
                          </svg>
                          Add to Favorites
                        </button>

                        <button
                          type="button"
                          onClick={() => removeItem(item)}
                          className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                        >
                          <svg
                            className="me-1.5 h-5 w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18 17.94 6M18 18 6.06 6"
                            />
                          </svg>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          ))}

          {/* Order Summary */}
          <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order Summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Subtotal
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {cartItemCount
                        .reduce((acc, item) => acc + item.qty, 0)
                        .toLocaleString()}{" "}
                      (units)
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-semibold text-[#000000]">
                      Est. Total
                    </dt>
                    <dd className="text-bold font-bold text-[#85bb65]">
                      Rs.{" "}
                      {cartItemCount
                        .reduce(
                          (acc, item) => acc + item.product.price * item.qty,
                          0
                        )
                        .toLocaleString()}
                    </dd>
                  </dl>
                </div>

                <button
                  onClick={placeOrder}
                  className="w-full inline-flex items-center justify-center bg-[#ffd700] rounded-lg border border-transparent px-4 py-2 text-base font-medium text-gray-900 shadow-sm focus:outline-none"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  ) : !complete ? (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-4 space-y-6 lg:space-y-0 lg:space-x-6">
      <img
        src={CartEmptyImg}
        className="w-full max-w-xs md:max-w-sm lg:max-w-md focus:outline-none"
        alt="Empty Cart"
      />
      <div className="flex items-center space-x-2">
        <ShoppingCartIcon className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-gray-800 dark:text-white" />
        <h2 className="text-center text-lg font-semibold text-[#FF0000] dark:text-white sm:text-2xl">
          Your Cart Is Empty!
        </h2>
      </div>
    </div>
  ) : (
    <Fragment>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h2 className="text-xl font-extrabold mb-2 lg:mt-28 sm:mt-10">
          Order Complete
        </h2>
        <p className="text-green-700 font-semibold">
          Your order has been placed successfully!
        </p>
      </div>
    </Fragment>
  );
};

export default Cart;
