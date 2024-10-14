import React, { useEffect, useState } from "react";
import PcProductCard from "./PcProductCard";
import ProductSearch from "./ProductSearch";
import { useSearchParams } from "react-router-dom";

const PcProducts = ({product}) => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams(); 

  useEffect(() => {
    const keyword = searchParams.get('keyword') || ""; 
    const apiUrl = keyword
      ? `${import.meta.env.VITE_API_URL}/pc-products?keyword=${keyword}`
      : `${import.meta.env.VITE_API_URL}/pc-products`;



    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, [searchParams]); 

  return (
    <div className="bg-[#e9ecef]">
      <ProductSearch />
      <h1 className="w-full p-2 text-center text-xl font-extrabold">
        PC products
      </h1>

      <div className="flex flex-wrap">
        {products.map((product) => (
          <PcProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PcProducts;
