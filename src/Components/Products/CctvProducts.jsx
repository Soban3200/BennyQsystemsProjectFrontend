import React, { useEffect, useState } from "react";
import CctvProductCard from './CctvProductCard';
import { useSearchParams } from "react-router-dom";
import CctvProductSearch from "./CctvProductSearch";

// Import the loading GIF from assets
import loadingGif from '../../assets/LoadingGif.gif';  

const CctvProducts = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const keyword = searchParams.get("keyword") || "";
    const apiUrl = keyword
      ? `${import.meta.env.VITE_API_URL}/cctv-products?keyword=${keyword}`
      : `${import.meta.env.VITE_API_URL}/cctv-products`;

    // Fetch the data and set loading to false once done
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);  // Ensure loading is also set to false in case of error
      });
  }, [searchParams]);

  return (
    <div className="h-full">
      <CctvProductSearch />
      <h1 className="w-full p-2 text-center text-xl font-extrabold">
        CCTV products
      </h1>

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {loading ? (
          // Show loading gif when loading state is true
          <div className="w-full flex justify-center">
            <img src={loadingGif} alt="Loading..." className="h-72 w-72" />
          </div>
        ) : (
          // Show products when loading is false
          products.map((product) => (
            <CctvProductCard key={product._id} product={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default CctvProducts;
