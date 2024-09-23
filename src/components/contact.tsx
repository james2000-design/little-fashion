import Footer from "./footer";
import Navbar from "./navbar";
import Image from "../assets/images/header/positive-european-woman-has-break-after-work.jpg";
import {
  FormControl,
  Input,
  FormHelperText,
  Textarea,
  Button,
} from "@chakra-ui/react";
import {
  FaFacebookMessenger,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[5rem] overflow-hidden">
        <section className="">
          <div className="flex md:flex-nowrap flex-wrap gap-10 w-full items-center bg-[#f0f8ff]  ">
            <div className="md:w-[50%] px-10 w-full flex justify-center">
              <h1 className="text-6xl font-extrabold  pb-5 capitalize">
                <span className="text-[#FF4400] "> Say hello to us</span>
                <br />
                <span>love to hear you</span>
              </h1>
            </div>
            <div className="md:w-[48%] w-full ">
              <img src={Image} alt="" />
            </div>
          </div>
        </section>
        <section className="pt-[8rem] ">
          <h1 className="text-4xl font-extrabold  pl-[4.5rem] mx-4 ">
            Let's <span className="text-[#ff4400] ">Begin</span>
          </h1>
          <div className="flex lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap items-start  justify-around     pb-[4rem] ">
            <div className="lg:w-[40%] md:w-[40%] sm:w-full w-full my-4 ">
              <FormControl className=" flex flex-col mx-4 gap-8 my-4">
                <Input
                  placeholder="Full name"
                  className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>

                <Input
                  placeholder="Subject"
                  className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                />

                <Textarea
                  placeholder="Tell us about the Project"
                  rows={5}
                  className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-500 focus:outline-none focus:border-4 focus-visible:border-blue-200"
                />
                <Button
                  alignSelf={"center"}
                  className="text-white font-bold bg-black text-center w-[40%] p-4 rounded-xl hover:bg-[#FF4400] "
                >
                  Send
                </Button>
              </FormControl>
            </div>
            <div className="p-[1rem] lg:w-[40%] md:w-[50%] sm:w-full w-full ">
              <div className="flex  border-b-[1px] border-gray-500  ">
                <div className="font-bold  border-r-[1px] border-gray-500 w-[50%]  py-6 px-3 ">
                  <h2 className="text-[2rem] ">New business</h2>
                  <p className=" text-gray-500 flex gap-2 items-center uppercase group cursor-pointer hover:text-[#ff4400] ">
                    <span>Hello@company.com</span>
                    <FaArrowRightLong className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
                  </p>
                </div>
                <div className="font-bold py-6 px-3  ">
                  <h2 className="text-[2rem] ">Main Studio</h2>
                  <p className=" text-gray-500 flex gap-2 items-center uppercase group cursor-pointer hover:text-[#ff4400] ">
                    <span className="group"> studio@company.com</span>{" "}
                    <FaArrowRightLong className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="font-bold border-r-[1px] border-gray-500 w-[50%]   p-5 ">
                  <h2 className="text-[2rem] ">Our office</h2>
                  <p className=" text-gray-500 uppercase">
                    <span className="group">
                      Akershusstranda 20, 0150 Oslo, Norway
                    </span>
                  </p>
                </div>
                <div className="font-bold p-5 ">
                  <h2 className="text-[2rem] ">our scoials</h2>
                  <p className=" text-gray-500 flex gap-3">
                    <FaFacebookMessenger className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" />
                    <FaYoutube className="hover:text-red-500 transition-colors duration-300 cursor-pointer" />
                    <FaWhatsapp className="hover:text-green-500 transition-colors duration-300 cursor-pointer" />
                    <FaInstagram className="hover:text-pink-500 transition-colors duration-300 cursor-pointer" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team  */}
      </main>
      <Footer />
    </>
  );
};

export default Contact;
