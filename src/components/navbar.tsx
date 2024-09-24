import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative ">
      <div className="w-full flex z-10  items-center justify-between px-4 md:px-8 bg-white py-5 fixed">
        <div className="flex flex-grow items-center md:hidden">
          <div className="mr-4" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>
        <div className="logo font-bold text-2xl flex flex-grow text-center ">
          <strong>
            <span className="text-[#FF4400]">Little </span>
            <span>Fashion</span>
          </strong>
        </div>
        <div className="hidden md:flex flex-grow items-center gap-10">
          <Link to={"/"}>
            <div className="text-gray-400">Home</div>
          </Link>
          <Link to={"/stories"}>
            <div className="text-gray-400">Story</div>
          </Link>
          <Link to={"/products"}>
            <div className="text-gray-400">Product</div>
          </Link>
          <Link to={"/faqs"}>
            <div className="text-gray-400">FAQs</div>
          </Link>
          <Link to={"/contact"}>
            <div className="text-gray-400">Contact</div>
          </Link>
        </div>
        <div className="flex items-center gap-8 md:ml-auto">
          <Link to={"/signInPage"}>
            <span className=" hover:text-[#ff4400] ">
              <FaUser size={20} />
            </span>
          </Link>
          <Link to={"/cart"}>
            <span className=" hover:text-[#ff4400] ">
              <IoBagOutline size={20} />
            </span>
          </Link>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md  md:hidden flex  flex-col items-start p-4 gap-4">
            <Link to={"/"}>
              <div className="text-gray-400">Home</div>
            </Link>
            <Link to={"/stories"}>
              <div className="text-gray-400">Story</div>
            </Link>
            <Link to={"/products"}>
              <div className="text-gray-400">Product</div>
            </Link>
            <Link to={"/faqs"}>
              <div className="text-gray-400">FAQs</div>
            </Link>
            <Link to={"/contact"}>
              <div className="text-gray-400">Contact</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
