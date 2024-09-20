import { FaYoutube, FaWhatsapp, FaInstagram, FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-gray-400  mb-0 pt-10 flex flex-wrap justify-between">
      <div className="flex flex-col gap-5 mb-5 ">
        <div className="font-extrabold">
          <span>Little</span> <span className="text-white">Fashion</span>
        </div>
        <div>
          Cpoyright &#169; 2022
          <span className="font-bold"> Little Fashion</span>
        </div>
        <div>Designed by James</div>
      </div>
      <div className="flex pr-5  justify-between w-full md:w-[60%]  ">
        <div>
          <div className="text-white font-extrabold ">SiteMap</div>
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
          <div className="flex gap-3 ">
            <FaYoutube />

            <FaWhatsapp />

            <FaInstagram />

            <FaSkype />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
