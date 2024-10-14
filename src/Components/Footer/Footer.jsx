import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import "../../index.css";

function Footer() {
  return (
    <div className="bg-[#232F3E]">
      <div className="max-w-screen-lg px-4 sm:px-6 text-white sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <img src={logo} alt="Company Logo" className="h-10" />
        </div>
        <div className="p-5">
          <div className="text-sm uppercase font-extrabold">Resources</div>
          <a className="my-3 block text-[#ddd]" href="/#">
            Documentation <span className="text-teal-900 text-xs p-1"></span>
          </a>
          <a className="my-3 block text-[#ddd]" href="/#">
            Tutorials <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block text-[#ddd]" href="/#">
            Support <span className="text-teal-900 text-xs p-1">New</span>
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">Support</div>
          <a className="my-3 block text-[#ddd]" href="/#">
            Help Center <span className="text-black text-xs p-1"></span>
          </a>
          <a className="my-3 block text-[#ddd]" href="/#">
            Privacy Policy <span className="text-black text-xs p-1"></span>
          </a>
          <a className="my-3 block text-[#ddd]" href="/#">
            Conditions <span className="text-black text-xs p-1"></span>
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">
            Contact Us
          </div>
          <a className="my-3 block text-[#ddd]" href="/#">
            No 10, 1st Floor, Jeeva Complex, Alapakkam Main Road, Porur, Chennai
            - 600116 (Near Jeeva Complex Same Building)
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
          <a className="my-3 block text-[#ddd]" href="/#">
            bennyqsystems@gmail.com
            <span className="text-teal-600 text-xs p-1"></span>
          </a>
        </div>
      </div>

      <div className="bg-[#131A22] shadow-xl pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 text-gray-800 text-lg flex-col max-w-screen-lg items-center">
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            {/* Twitter */}
            <a href="/#" className="w-6 mx-1">
              <FaTwitter className="text-white hover:text-[#1DA1F2]" />
            </a>
            {/* Facebook */}
            <a href="/#" className="w-6 mx-1">
              <FaFacebookF className="text-white hover:text-[#1877F2]" />
            </a>
            {/* Youtube */}
            <a href="/#" className="w-6 mx-1">
              <FaYoutube className="text-white hover:text-[#f21818]" />
            </a>
          </div>
          <div className="text-center text-white text-sm mt-2">
            © 2024 Company Name. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
