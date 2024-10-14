import React, { useEffect, useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import "../../../src/index.css";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="bg-stone-800 box_shadow relative w-full h-64 md:h-96 flex justify-center items-center ">
      <button
        onClick={prevSlide}
        className="absolute left-0 ml-4 text-white bg-gray-800 rounded-full focus:outline-none"
      >
        <HiArrowCircleLeft size={40} />
      </button>
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } w-full h-full absolute top-0 left-0 flex justify-center items-center transition-opacity duration-500`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-auto h-full object-fill outline-none"
            />
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-0 mr-4 text-white bg-gray-800 rounded-full focus:outline-none"
      >
        <HiArrowCircleRight size={40} />
      </button>
    </div>
  );
};

export default Carousel;
