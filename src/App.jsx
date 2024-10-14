import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import PcProducts from "./Components/Products/PcProducts";
import CctvProducts from "./Components/Products/CctvProducts"; // Import CctvProducts component
import ProductDetails from "./Components/Products/ProductDetails";
import CctvProductDetails from "./Components/Products/CctvProductDetails"; // Import CCTV Product Details
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./Components/Products/Cart";
import Support from "./Components/Support";
import About from "./About";
import Quote from "./Quote";

function App() {
  const [cartItemCount, setCartItemCount] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        {/* Header with Navbar */}
        <header className="w-full fixed top-0 left-0 z-50 bg-white">
          <ToastContainer theme="dark" position="top-right" />
          <Navbar cartItemCount={cartItemCount} />
        </header>

        {/* Main Content */}
        <main className="flex-auto pt-[64px] w-full overflow-auto">
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/pc-products" element={<PcProducts />} />
              <Route path="/cctv-products" element={<CctvProducts />} />

              {/* Route for PC Product Details */}
              <Route
                path="/pc-products/:id"
                element={
                  <ProductDetails
                    cartItemCount={cartItemCount}
                    setCartItemCount={setCartItemCount}
                  />
                }
              />

              {/* Route for CCTV Product Details */}
              <Route
                path="/cctv-products/:id"
                element={
                  <CctvProductDetails
                    cartItemCount={cartItemCount}
                    setCartItemCount={setCartItemCount}
                  />
                }
              />

              {/* Separate search routes */}
              <Route path="/search" element={<PcProducts />} />  {/* Change to match your search component */}
              <Route path="/cctv-search" element={<CctvProducts />} />  {/* Change to match your search component */}

              <Route
                path="/cart"
                element={
                  <Cart
                    cartItemCount={cartItemCount}
                    setCartItemCount={setCartItemCount}
                  />
                }
              />
               <Route path="/about" element={<About />} />
              <Route path="/support" element={<Support />} />
              <Route path="/quote" element={<Quote/>} />
            </Routes>
           
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full mt-auto">
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
