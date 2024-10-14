import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CpPlus from "../../assets/CpPlus.jpg";
import godrej from "../../assets/godrej.jpg";
import Imou from "../../assets/Imou.jpg";
import ZebKeyBoard from "../../assets/ZebKeyBoard.jpg";
import ZebMonitor from "../../assets/ZebMonitor.jpg";

const ProductSpotlight = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-8 px-4">
      <h1 className="text-center text-3xl font-bold mb-6">Product Spotlight</h1>
      <Slider {...settings}>
        {/* Product 1 */}
        <div className="p-2">
          <a href="#" className="block">
            <div className="product-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="product-item-img-wrapper h-48">
                <img
                  src={Imou}
                  alt="IMOU 360° 1080P Full HD"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="product-item-info p-4">
                <h3 className="text-lg font-semibold">
                  IMOU 360° 1080P Full HD
                </h3>
                <p className="text-gray-600 text-sm text-justify  h-28">
                  IMOU 360° 1080P Full HD Security Camera, Human Detection,
                  Motion Tracking, 2-Way Audio, Night Vision, Dome Camera with
                  WiFi & Ethernet Connection, Alexa Google Assistant, Up to
                  256GB SD Card Support
                </p>
              </div>
            </div>
          </a>
          <div className="add-to-compare mt-2 flex items-center">
            <input className="mr-2" type="checkbox" id="compare1" />
            <label htmlFor="compare1">Add to compare</label>
          </div>
        </div>
        {/* Product 2 */}
        <div className="p-2">
          <a href="#" className="block">
            <div className="product-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="product-item-img-wrapper h-48">
                <img
                  src={godrej}
                  alt="Godrej Security Solutions"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="product-item-info p-4">
                <h3 className="text-lg font-semibold">
                  Godrej Security Solutions
                </h3>
                <p className="text-gray-600 text-sm text-justify h-28">
                  Godrej Security Solutions EVE PRO panTilt Smart WiFi Security
                  Camera for Home with 350 Degree 2MP (HD) | 2-Way Audio | Night
                  Vision | Smart Motion Tracking | Alarm System, White
                </p>
              </div>
            </div>
          </a>
          <div className="add-to-compare mt-2 flex items-center">
            <input className="mr-2" type="checkbox" id="compare2" />
            <label htmlFor="compare2">Add to compare</label>
          </div>
        </div>
        {/* Product 3 */}
        <div className="p-2">
          <a href="#" className="block">
            <div className="product-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="product-item-img-wrapper h-48">
                <img
                  src={CpPlus}
                  alt="CP PLUS 2MP Full HD"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="product-item-info p-4">
                <h3 className="text-lg font-semibold">CP PLUS 2MP Full HD</h3>
                <p className="text-gray-600 text-sm text-justify h-28">
                  CP PLUS 2MP Full HD Smart Wi-Fi CCTV Home Security Camera |
                  360° with Pan Tilt | View & Talk | Motion Alert | Night Vision
                  | SD Card (Upto 128 GB), Alexa & Google Support | IR Distance
                  10mtr | CP-E25A
                </p>
              </div>
            </div>
          </a>
          <div className="add-to-compare mt-2 flex items-center">
            <input className="mr-2" type="checkbox" id="compare3" />
            <label htmlFor="compare3">Add to compare</label>
          </div>
        </div>
        {/* Product 4 */}
        <div className="p-2">
          <a href="#" className="block">
            <div className="product-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="product-item-img-wrapper h-48">
                <img
                  src={ZebMonitor}
                  alt="ZEBRONICS EA124 LED Monitor"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="product-item-info p-4">
                <h3 className="text-lg font-semibold">
                  ZEBRONICS EA124 LED Monitor
                </h3>
                <p className="text-gray-600 text-sm text-justify h-28">
                  ZEBRONICS EA124 LED Monitor, 24 inch (60.4cm), 250 nits,
                  100Hz, FHD, 1920x1080, HDMI, VGA, Ultra Slim Bezel, Built-in
                  Speakers, Metal Stand, Wall Mountable
                </p>
              </div>
            </div>
          </a>
          <div className="add-to-compare mt-2 flex items-center">
            <input className="mr-2" type="checkbox" id="compare4" />
            <label htmlFor="compare4">Add to compare</label>
          </div>
        </div>
        {/* Product 5 */}
        <div className="p-2">
          <a href="#" className="block">
            <div className="product-item bg-white rounded-lg shadow-md overflow-hidden">
              <div className="product-item-img-wrapper h-48">
                <img
                  src={ZebKeyBoard}
                  alt="Zebronics Transformer Gaming Keyboard"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="product-item-info p-4">
                <h3 className="text-lg  font-semibold">
                  Zebronics Keyboard
                </h3>
                <p className="text-gray-600 text-sm h-28 text-justify">
                  Zebronics Transformer Gaming Keyboard and Mouse Combo,Braided
                  Cable,Durable Al body,Multimedia keys and Gaming Mouse with 6
                  Buttons, Multi-Color LED Lights, High-Resolution Sensor with
                  3200 DPI(Black)
                </p>
              </div>
            </div>
          </a>
          <div className="add-to-compare mt-2 flex items-center">
            <input className="mr-2" type="checkbox" id="compare5" />
            <label htmlFor="compare5">Add to compare</label>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ProductSpotlight;
