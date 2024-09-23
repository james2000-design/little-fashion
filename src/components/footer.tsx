import { FaYoutube, FaWhatsapp, FaInstagram, FaSkype } from "react-icons/fa";

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
              <span className="hover:text-[#FF4400] ">Little</span> Fashion
            </span>
          </div>
          <div>
            Designed by <span className="hover:text-[#FF4400] ">James</span>
          </div>
        </div>
        <div className="flex pr-5 justify-between w-full md:w-[60%]">
          <div>
            <div className="text-white font-extrabold">SiteMap</div>
            <div>About</div>
            <div>Privacy Policy</div>
            <div>Contact</div>
          </div>
          <div>
            <div>Products</div>
            <div>FAQs</div>
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
