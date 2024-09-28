import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import profile1 from ".././assets/images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg";
import profile2 from ".././assets/images/people/beautiful-woman-face-portrait-brown-background.jpeg";
import profile3 from ".././assets/images/people/portrait-british-woman.jpeg";
import profile4 from ".././assets/images/people/woman-wearing-mask-face-closeup-covid-19-green-background.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { RiDoubleQuotesL } from "react-icons/ri";
const CarouselSwiper = () => {
  const swiper = [
    {
      description:
        " Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor,sit amet ",
      image: profile1,
      name: "George,",
      profession: "Digital Art Fashion",
    },
    {
      description:
        " Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor,sit amet ",
      image: profile2,
      name: "Sandar,",
      profession: "Zoom Fashion Idea",
    },
    {
      description:
        " Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor,sit amet ",
      image: profile3,
      name: "Marie,",
      profession: "Art Fashion Design",
    },
    {
      description:
        " Over three years in business, We’ve had the chance to work on a variety of projects, with companies Lorem ipsum dolor,sit amet ",
      image: profile4,
      name: "Catherine,",
      profession: "Dress Fashion",
    },
  ];
  return (
    <div className="flex justify-center py-[4rem] ">
      <div className="pt-4 w-[70%]">
        <div>
          <h2 className="text-center text-[3rem] font-extrabold ">
            Customer love, <br />{" "}
            <span className="text-[#FF4400] ">Little</span> Fashion
          </h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {swiper.map((swipe, index) => (
            <SwiperSlide key={index}>
              <div className=" flex justify-center py-[4rem] ">
                <div className="lg:w-[70%] md:[80%] sm:w-[100%]">
                  <RiDoubleQuotesL size={"70"} className="text-[#FF4400]" />

                  <div className="md:px-[6rem] lg:px-[6rem]  px-[3rem] ">
                    <p className="font-thin text-xl mb-4">
                      {swipe.description}
                    </p>
                    <div className="flex items-center gap-4  ">
                      <div className="">
                        <img
                          src={swipe.image}
                          className="w-24 rounded-[50%] "
                          alt=""
                        />
                      </div>
                      <div className="lg:flex-nowrap md:flex-nowrap flex flex-wrap  sm:flex-wrap gap-2 items-center font-bold">
                        <h1 className="text-base font-thin  ">{swipe.name}</h1>
                        <p className="text-lg ">{swipe.profession}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselSwiper;
