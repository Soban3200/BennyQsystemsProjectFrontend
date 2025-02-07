import React, { useEffect, useState } from "react";
import PcProductCard from "./PcProductCard";
import ProductSearch from "./ProductSearch";
import { useSearchParams } from "react-router-dom";

const PcProducts = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state
  const [searchParams] = useSearchParams(); 

  useEffect(() => {
    const keyword = searchParams.get('keyword') || " "; 
    const apiUrl = keyword
      ? `${import.meta.env.VITE_API_URL}/pc-products?keyword=${keyword}`
      : `${import.meta.env.VITE_API_URL}/pc-products`;

    setLoading(true);  // Set loading to true before starting the fetch

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setLoading(false);  // Set loading to false once the data is fetched
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);  // Set loading to false if an error occurs
      });
  }, [searchParams]);

  return (
    <div className="bg-[#e9ecef]">
      <ProductSearch />
      <h1 className="w-full p-2 text-center text-xl font-extrabold">PC products</h1>

      {/* Conditionally render a loading image or spinner */}
      {loading ? (
        <div className="flex justify-center items-center">
          <img src="path-to-your-loading-image.gif" alt="Loading..." />
        </div>
      ) : (
        <div className="flex flex-wrap">
          {products.map((product) => (
            <PcProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PcProducts;
