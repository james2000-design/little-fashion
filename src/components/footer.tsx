import { FaYoutube, FaWhatsapp, FaInstagram, FaSkype } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-[5rem] px-5">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col gap-5 mb-5">
          <div className="font-extrabold">
            <span className="hover:text-[#FF4400] ">Little</span>{" "}
            <span className="text-white">Fashion</span>
          </div>
          <div>
            Copyright &#169; 2024
            <span className="font-bold">
              {" "}
              <Link to="/">
                <span className="hover:text-[#FF4400] cursor-pointer ">
                  Little
                </span>
              </Link>{" "}
              Fashion
            </span>
          </div>
          <div>
            Designed by{" "}
            <span className="hover:text-[#FF4400] cursor-pointer ">James</span>
          </div>
        </div>
        <div className="flex pr-5 justify-between w-full md:w-[60%]">
          <div>
            <div className="text-white font-extrabold">SiteMap</div>
            <Link to={"/stories"}>
              {" "}
              <div className="hover:text-white">About</div>
            </Link>
            <Link to={"/"}>
              <div className="hover:text-white">Privacy Policy</div>
            </Link>
            <Link to={"/contact"}>
              <div className="hover:text-white">Contact</div>
            </Link>
          </div>
          <div>
            <Link to={"/products"}>
              <div className="hover:text-white">Products</div>
            </Link>
            <Link to={"/faqs"}>
              {" "}
              <div className="hover:text-white">FAQs</div>
            </Link>
          </div>
          <div>
            <div className="text-white font-extrabold">Social</div>
            <div className="flex gap-3">
              <FaYoutube className="hover:text-red-500 transition-colors duration-300 cursor-pointer" />
              <FaWhatsapp className="hover:text-green-500 transition-colors duration-300 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
              <FaSkype className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
