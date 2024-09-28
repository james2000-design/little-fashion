import { useEffect, useState } from "react";
import Image from "../assets/images/slideshow/two-business-partners-working-together-office-computer.jpeg";
import Image2 from "../assets/images/slideshow/medium-shot-business-women-high-five.jpeg";
import Image3 from "../assets/images/slideshow/team-meeting-renewable-energy-project.jpeg";
import Image4 from "../assets/images/pim-chu-z6NZ76_UTDI-unsplash.jpeg";
import Image5 from "../assets/images/cody-lannom-G95AReIh_Ko-unsplash.jpeg";
import Image6 from "../assets/images/retail-shop-owner-mask-social-distancing-shopping.jpg";
import Image7 from "../assets/images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";
import Image8 from "../assets/images/product/jordan-nix-CkCUvwMXAac-unsplash.jpeg";
import Image9 from "../assets/images/product/nature-zen-3Dn1BZZv3m8-unsplash.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [Image2, Image3, Image];
  const titles = ["Cool Fashion", "New Design", "Talk to us"];
  const descriptions = [
    "Little fashion template comes with total 8 HTML pages provided by Tooplate website.",
    "Please share this Little Fashion template to your friends. Thank you for supporting us.",
    "Tooplate is one of the best HTML CSS template websites for everyone.",
  ];
  const links = [
    { href: "/stories", text: "Learn more about us" },
    { href: "/products", text: "Explore products" },
    { href: "/contact", text: "Work with us" },
  ];

  const tabs = [
    {
      title: "Introduction",
      content: (
        <div className="flex md:flex-nowrap flex-wrap align-top gap-10 py-4 ">
          <img src={Image4} alt=""></img>
          <div className="   pr-[7rem] pl-4  ">
            <h2 className="text-[2rem] font-bold">
              Good <span className=" text-[#FF4400]">Design </span>Ideas for{" "}
              <span className="text-[#FF4400]">your</span> fashion
            </h2>
            <p className="text-gray-400 text-xl">
              Little Fashion templates comes with sign in / sign up pages,
              product listing / product detail, about, FAQs, and contact page.
              Since this HTML template is based on Boostrap 5 CSS library, you
              can feel free to add more components as you need.
            </p>
            <button
              onClick={() => navigate("/stories")}
              className="flex gap-2 items-center  text-l font-bold md:mt-[10rem] mt-4  text-gray-400 hover:text-[#FF4400] group "
            >
              Learn more About Us
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "How we work?",
      content: (
        <div className=" flex flex-wrap md:flex-nowrap align-top gap-10 my-4">
          <iframe
            width="750"
            height="350"
            src="https://www.youtube.com/embed/f_7JqPDWhfw?start=12"
            title="Youtube video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className=" w-[80%] md:w-[60%] text-left  pr-[7rem] pl-4">
            <h2 className="text-[2rem] font-bold ">Life at Studio</h2>
            <p className="text-gray-400 text-xl  ">
              Over three years in business, we've had the chance to work on a
              variety of projects with companies.
            </p>
            <p className="text-gray-400 text-xl mt-4">
              {" "}
              Custom work includes branding, web design, UI/UX design.
            </p>
            <button
              onClick={() => navigate("/contact")}
              className="flex gap-2 items-center  text-l font-bold md:mt-[8rem] mt-8 text-gray-400 hover:text-[#FF4400] group "
            >
              Work with Us{" "}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
        </div>
      ),
    },
    {
      title: "Capabilities",
      content: (
        <div className="flex flex-wrap md:flex-nowrap align-top gap-10 my-4">
          <img src={Image5} alt=""></img>
          <div className=" text-left pr-[4rem] pl-4 ">
            <h2 className="text-[2rem] font-bold">What can help you?</h2>
            <div>
              <p className="text-gray-400 text-xl mb-4">
                Over three years in business, We’ve had the chance on projects
              </p>
              <div className="flex justify-between py-5 ">
                <p className=" w-[90%] border-b-[1px] border-gray-300 text-lg font-bold ">
                  Branding
                </p>{" "}
                <span className="text-2xl font-bold">90%</span>
              </div>
              <div className="  flex justify-between py-5 ">
                <p className="w-[70%] border-b-[1px] border-gray-300 text-lg font-bold">
                  Design & Strategy{" "}
                </p>
                <span className="text-2xl font-bold">70%</span>
              </div>
              <div className="flex justify-between py-5  ">
                <p className="w-[80%]  border-b-[1px] border-gray-300 text-lg font-bold ">
                  Online Platform
                </p>
                <span className="text-2xl font-bold">80%</span>
              </div>

              <button
                onClick={() => navigate("/products")}
                className="flex gap-2 items-center  text-l font-bold md:mt-[8rem] mt-8 text-gray-400 hover:text-[#FF4400] group "
              >
                Explore Products
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
        </div>
      ),
    },
  ];
  const featured = [
    {
      image: Image7,
      type: "trending",
      name: "Tree Pot",
      description: "Original package design from house",
      price: 25,
    },

    {
      image: Image8,
      type: "Discounted",
      name: "Fashion set",
      description: "Custome Design",
      price: 35,
    },

    {
      image: Image9,
      type: "",
      name: "Juice Drinks",
      description: "Nature made another world",
      price: 45,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="full ">
        <section className="pt-[86px] relative overflow-hidden">
          <div className="relative h-[100vh] ">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeIndex
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <img
                  src={image}
                  className="w-full md:h-auto h-full  object-cover "
                  alt=""
                />
                <div className="absolute bottom-0 right-0 left-0 w-full h-full z-2 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute top-[50%]  md:left-[35%]  left-[35%]  transform -translate-x-1/2 -translate-y-[40%]">
                    <div className="w-[80%] ">
                      <div className="col-lg-6 col-10">
                        <h1 className="text-white md:text-[4rem] text-4xl font-extrabold mb-4">
                          {titles[index]}
                        </h1>
                        <p className=" text-white text-lg font-mono mt-lg-3 mb-lg-5">
                          {descriptions[index]}
                        </p>

                        <button
                          onClick={() => navigate(links[index].href)}
                          className={`bg-black text-white text-left md:text-2xl text-lg rounded-lg py-2 my-8 font-bold hover:bg-[#FF4400]  px-[32px]
                          
                         `}
                        >
                          {links[index].text}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute md:right-[5rem] right-2 md:top-[50%] top-[60%] transform -translate-y-1/2 flex flex-col space-y-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-8 h-8 rounded-full  border-4 hover:bg-white hover:border-white ${
                    index === activeIndex
                      ? "border-white bg-white "
                      : " border-gray-400"
                  } bg-transparent`}
                />
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="my-[4rem] ">
            <div className=" text-[2.5rem] text-center font-extrabold ">
              <h1>
                Get started with <span className="text-[#FF4400] ">Little</span>{" "}
                Fashion
              </h1>
            </div>
            <div className="flex flex-wrap md:flex-nowrap my-10 items-center">
              <div className="flex flex-col space-y-4 md:w-1/4  p-4">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`text-left py-2 font-bold ${
                      activeTab === index ? "text-[#FF4400] " : "text-gray-500"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              <div className="py-4 w-full">
                <div>{tabs[activeTab].content}</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex md:flex-nowrap flex-wrap gap-10 w-full items-center bg-[#f0f8ff] my-[5rem] ">
            <div className="md:w-[48%] w-full ">
              {" "}
              <img src={Image6} alt="" />
            </div>
            <div className="md:w-[50%] px-10 w-full">
              <h1 className="text-4xl font-extrabold pb-5">
                <span className="text-[#FF4400]"> Retail</span> shop owners
              </h1>
              <p className="text-2xl font-thin">
                Credits go to Unsplash and FreePik websites for images used in
                this Little Fashion by Tooplate.
              </p>
              <button
                onClick={() => navigate("/products")}
                className="flex gap-2 items-center  text-l font-bold  mt-8 mb-10 text-gray-400 hover:text-[#FF4400] group "
              >
                Explore Products
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section>
          <div className=" text-5xl text-center  font-extrabold mb-[4rem] ">
            Featured Products
          </div>
          <div className=" flex flex-wrap md:flex-nowrap md:justify-center justify-center md:px-8 px-10 gap-8  mb-4 ">
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
                    <span
                      className={`${
                        feature.type !== "" ? "bg-gray-500 " : "bg-transparent"
                      } text-white px-2 py-1 rounded-md`}
                    >
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
        <Link to={"/products"}>
          <div className=" uppercase underline pb-[10rem] font-bold text-gray-500 hover:text-[#FF4400] cursor-pointer  text-center ">
            view all products
          </div>
        </Link>
      </div>

      <Footer />
    </>
  );
};

export default Home;
