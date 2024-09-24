import { MdFavorite } from "react-icons/md";
import photo1 from "../assets/images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";
import Navbar from "./navbar";
import Footer from "./footer";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import photo4 from "../assets/images/product/anis-m-WnVrO-DvxcE-unsplash.jpeg";
import photo5 from "../assets/images/product/quokkabottles-kFc1_G1GvKA-unsplash.jpeg";
import photo6 from "../assets/images/product/team-fredi-8HRKoay8VJE-unsplash.jpeg";
import { useState } from "react";
import CartModal from "./cartModal";
const Cart = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const trending = [
    {
      image: photo6,
      type: "trending",
      name: "Tree Pot",
      description: "Original package design from house",
      price: 50,
    },

    {
      image: photo5,
      type: "Discounted",
      name: "Bottle",
      description: "Package Design",
      price: 100,
    },

    {
      image: photo4,
      type: "",
      name: "Original",
      description: "Original package design from house",
      price: 200,
    },
  ];
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-[6rem] ">
        <div className=" gap-10 w-full  bg-[#f0f8ff] py-[6rem] ">
          <div className="md:w-[50%] px-10 w-full flex justify-center">
            <h1 className="text-6xl font-extrabold  pb-5 capitalize">
              <span className="text-[#FF4400] "> We provide you</span>
              <br />
              <span>Fashionable Stuffs</span>
            </h1>
          </div>
        </div>

        <div className="   w-full  flex  flex-wrap md:flex-nowrap lg:flex-nowrap gap-8 md:px-8 px-10 py-[6rem] mb-4 justify-evenly bg-white transition-all duration-500 ease-out group ">
          <div className="relative transition-all duration-500 ease-out  group-hover:shadow-2xl shadow-gray-500 ">
            <img
              src={photo1}
              alt=""
              className="w-full h-auto rounded object-contain"
            />
            <div className="absolute top-0 right-0 left-0 m-5 flex gap-10 justify-between">
              <span className="bg-gray-500 text-white px-2 py-1 rounded-md">
                New arrival
              </span>

              <span className="text-white bg-transparent  hover:text-[#FF4400]  transition">
                <MdFavorite
                  size={24}
                  className=" text-white hover:text-[#FF4400] transition duration-300"
                />
              </span>
            </div>
          </div>

          <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full p-6 ">
            <div className="  flex justify-between items-center  py-7 ">
              <div>
                <h5 className="mb-0">
                  <a
                    href="/"
                    className=" text-2xl font-bold text-black hover:underline"
                  >
                    Tree pot
                  </a>
                </h5>
                <p className="text-gray-500 font-thin">
                  Original package design from house
                </p>
              </div>

              <small className="text-muted  text-lg ">$25</small>
            </div>
            <div className="py-[2rem] ">
              <h1>Description</h1>
              <p className="font-thin text-2xl">
                Over three years in business, We’ve had the chance to work on a
                variety of projects, with companies
              </p>
            </div>
            <div className="flex lg:flex-nowrap flex-wrap gap-8 justify-between">
              <div className="lg:w-[50%] md:w-[50%] w-full">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Quantity
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    placeholder="Quantity"
                    label="item"
                    className=" focus:border-blue-200 focus:border-4 focus:outline-none"
                  >
                    <MenuItem value={1}>One</MenuItem>
                    <MenuItem value={2}>Two</MenuItem>
                    <MenuItem value={3}>Three</MenuItem>
                    <MenuItem value={4}>Four</MenuItem>
                    <MenuItem value={5}>five</MenuItem>
                    <MenuItem value={6}>Six</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div
                onClick={handleOpenModal}
                className="hover:bg-[#ff4400] lg:w-[50%] w-full rounded text-center bg-black text-white px-[4rem] py-4 transition-all duration-300 cursor-pointer"
              >
                ADD TO CART
              </div>
              <CartModal isOpen={modalIsOpen} onClose={handleCloseModal} />
            </div>
            <div className="flex gap-4 font-thin py-4">
              <span className="hover:text-[#ff4400] cursor-pointer transition duration-300 ">
                Details
              </span>
              <span className="hover:text-[#ff4400] cursor-pointer transition duration-300">
                {" "}
                Delivery and payment
              </span>
            </div>
          </div>
        </div>
        {/* Trending */}

        <section className="lg:px-8  md:px-8 px-10 pt-[2rem] pb-[6rem] ">
          <div className=" flex flex-wrap md:flex-nowrap lg:flex-nowrap md:justify-center justify-center  gap-8  mb-4 ">
            {trending.map((data, index) => (
              <div key={index}>
                <div className="   w-full relative bg-white transition-all duration-500 ease-out group ">
                  <div className=" transition-all duration-500 ease-out  group-hover:shadow-2xl shadow-gray-500 ">
                    <img
                      src={data.image}
                      alt=""
                      className="w-full h-auto rounded object-contain"
                    />
                  </div>

                  <div className="absolute top-0 right-0 left-0 m-5 flex justify-between">
                    <span
                      className={`${
                        data.type !== "" ? "bg-gray-500 " : "bg-transparent"
                      } text-white px-2 py-1 rounded-md`}
                    >
                      {data.type}
                    </span>

                    <a
                      href="#"
                      className="text-white bg-transparent  rounded-full hover:text-[#FF4400]  transition"
                    >
                      <MdFavorite
                        size={24}
                        className="hover:text-[#FF4400] transition duration-300"
                      />
                    </a>
                  </div>

                  <div className="flex justify-between px-5  py-7 ">
                    <div>
                      <h5 className="mb-0">
                        <a
                          href="/"
                          className=" text-2xl font-bold text-black hover:underline"
                        >
                          {data.name}
                        </a>
                      </h5>
                      <p className="text-gray-500 font-thin">
                        {data.description}
                      </p>
                    </div>

                    <small className="text-muted mt-auto mb-5 text-lg ">
                      ${data.price}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Cart;
