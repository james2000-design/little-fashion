import { MdFavorite } from "react-icons/md";

import photo1 from "../assets/images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";
import photo2 from "../assets/images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg";
import photo3 from "../assets/images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg";
import photo4 from "../assets/images/product/anis-m-WnVrO-DvxcE-unsplash.jpeg";
import photo5 from "../assets/images/product/quokkabottles-kFc1_G1GvKA-unsplash.jpeg";
import photo6 from "../assets/images/product/team-fredi-8HRKoay8VJE-unsplash.jpeg";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Products = () => {
  const featured = [
    {
      image: photo1,
      type: "trending",
      name: "Tree Pot",
      description: "Original package design from house",
      price: 25,
    },

    {
      image: photo2,
      type: "Discounted",
      name: "Fashion set",
      description: "Custome Design",
      price: 35,
    },

    {
      image: photo3,
      type: "",
      name: "Juice Drinks",
      description: "Nature made another world",
      price: 45,
    },
  ];

  const trending = [
    {
      image: photo6,
      type: "trending",
      name: "Package",
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
      <main>
        {" "}
        <div>
          <div className="lg:w-full md:w-[100%] px-10 py-[6rem] w-full flex  bg-[#f0f8ff] ">
            <h1 className="text-6xl font-extrabold  pb-5 capitalize">
              <span className="text-[#FF4400] "> Choose your</span>
              <br />
              <span>favorite stuffs</span>
            </h1>
          </div>

          <section className="lg:px-8  md:px-8 px-10 py-[6rem] ">
            <div className=" text-5xl   font-extrabold mb-[4rem] ">
              New arrival
            </div>
            <div className=" flex flex-wrap md:flex-nowrap lg:flex-nowrap md:justify-center justify-center  gap-8  mb-4 ">
              {featured.map((feature, index) => (
                <div key={index}>
                  <div className="   w-full relative bg-white transition-all duration-500 ease-out group ">
                    <div className=" transition-all duration-500 ease-out  group-hover:shadow-2xl shadow-gray-500 ">
                      <img
                        src={feature.image}
                        alt=""
                        className="w-full h-auto rounded object-contain"
                      />
                    </div>

                    <div className="absolute top-0 right-0 left-0 m-5 flex justify-between">
                      <span className="bg-gray-500 text-white px-2 py-1 rounded-md">
                        {feature.type}
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
                            {feature.name}
                          </a>
                        </h5>
                        <p className="text-gray-500 font-thin">
                          {feature.description}
                        </p>
                      </div>

                      <small className="text-muted mt-auto mb-5 text-lg ">
                        ${feature.price}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/* divider Trending */}

          <section className="lg:px-8  md:px-8 px-10 pt-[2rem] pb-[6rem] ">
            <div className=" text-5xl   font-extrabold mb-[4rem] ">
              Trending
            </div>
            <div className=" flex flex-wrap md:flex-nowrap lg:flex-nowrap md:justify-center justify-center  gap-8  mb-4 ">
              {trending.map((info, index) => (
                <div key={index}>
                  <div className="   w-full relative bg-white transition-all duration-500 ease-out group ">
                    <div className=" transition-all duration-500 ease-out  group-hover:shadow-2xl shadow-gray-500 ">
                      <img
                        src={info.image}
                        alt=""
                        className="w-full h-auto rounded object-contain"
                      />
                    </div>

                    <div className="absolute top-0 right-0 left-0 m-5 flex justify-between">
                      <span className="bg-gray-500 text-white px-2 py-1 rounded-md">
                        {info.type}
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
                            {info.name}
                          </a>
                        </h5>
                        <p className="text-gray-500 font-thin">
                          {info.description}
                        </p>
                      </div>

                      <small className="text-muted mt-auto mb-5 text-lg ">
                        ${info.price}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Products;
