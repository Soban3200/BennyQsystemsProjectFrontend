import React, { useEffect, useState } from "react";
import PcProductCard from "./PcProductCard";
import ProductSearch from "./ProductSearch";
import { useSearchParams } from "react-router-dom";

// Import the loading GIF from assets
import loadingGif from "../../assets/LoadingGif.gif"; // Adjust the path if needed

const PcProducts = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const keyword = searchParams.get("keyword") || " ";
    const apiUrl = keyword
      ? `${import.meta.env.VITE_API_URL}/pc-products?keyword=${keyword}`
      : `${import.meta.env.VITE_API_URL}/pc-products`;

    // Fetch the data and set loading to false once done
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Ensure loading is set to false in case of error
      });
  }, [searchParams]);

  return (
    <div className=" h-full">
      <ProductSearch />
      <h1 className="w-full p-2 text-center text-xl font-extrabold">
        PC products
      </h1>

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {loading ? (
          // Show loading gif when loading state is true
          <div className="w-full flex justify-center">
            <img
              src={loadingGif}
              alt="Loading..."
              className="h-32 w-32 sm:h-36 sm:w-36 md:h-40 md:w-40 lg:h-72 lg:w-72" // Adjust size for desktop and mobile
            />
          </div>
        ) : (
          // Show products when loading is false
          products.map((product) => (
            <PcProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default PcProducts;
