import React, { useEffect, useState } from "react";
import CctvProductCard from './CctvProductCard';
import { useSearchParams } from "react-router-dom";
import CctvProductSearch from "./CctvProductSearch";

const CctvProducts = ({ product }) => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const keyword = searchParams.get("keyword") || "";
    const apiUrl = keyword
      ? `${import.meta.env.VITE_API_URL}/cctv-products?keyword=${keyword}`
      : `${import.meta.env.VITE_API_URL}/cctv-products`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, [searchParams]);

  return (
    <div className="bg-[#e9ecef]">
      <CctvProductSearch />
      <h1 className="w-full p-2 text-center text-xl font-extrabold">
        CCTV products
      </h1>

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {products.map((product) => (
          <CctvProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CctvProducts;
