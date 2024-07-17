import { useState } from "react";
import { FaUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import Spinner from "./spinner";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading === true) {
    return <Spinner />;
  }

  return (
    <div className=" flex justify-between items-center mx-[4rem] bg-white pt-5 z-10">
      <div className="logo font-bold text-2xl">
        <strong>
          <span className="text-[#FF4400] ">Little </span>
          <span>Fashion</span>
        </strong>
      </div>
      <div className="text-gray-400 flex gap-10 ">
        <p className="" onClick={() => setIsLoading(true)}>
          Home
        </p>
        <p>Story</p>
        <p>Product</p>
        <p>FAQs</p>
        <p>Contact</p>
      </div>
      <div className="flex flex-row items-start gap-8">
        <span>
          <FaUser size={20} />
        </span>
        <span>
          <IoBagOutline size={20} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
