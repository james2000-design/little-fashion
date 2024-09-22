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
          <SwiperSlide>
            <div className=" flex justify-center py-[4rem] ">
              <div className="lg:w-[70%] md:[80%] sm:w-[100%]">
                <RiDoubleQuotesL size={"70"} className="text-[#FF4400]" />

                <div className="md:px-[6rem] lg:px-[6rem]  px-[3rem] ">
                  <p className="font-thin text-xl mb-4">
                    Over three years in business, We’ve had the chance to work
                    on a variety of projects, with companies Lorem ipsum dolor
                    sit amet
                  </p>
                  <div className="flex items-center gap-4  ">
                    <div className="">
                      <img
                        src={profile1}
                        className="w-24 rounded-[50%] "
                        alt=""
                      />
                    </div>
                    <div className="lg:flex-nowrap md:flex-nowrap flex flex-wrap  sm:flex-wrap gap-2 items-center font-bold">
                      <h1 className="text-base font-thin  ">George,</h1>
                      <p className="text-lg ">Digital Art Fashion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex justify-center py-[4rem] ">
              <div className="lg:w-[70%] md:[80%] sm:w-[100%]">
                <RiDoubleQuotesL size={"70"} className="text-[#FF4400]" />

                <div className="md:px-[6rem] lg:px-[6rem]  px-[3rem] ">
                  <p className="font-thin text-xl mb-4">
                    Over three years in business, We’ve had the chance to work
                    on a variety of projects, with companies Lorem ipsum dolor
                    sit amet
                  </p>
                  <div className="flex items-center gap-4  ">
                    <div className="">
                      <img
                        src={profile2}
                        className="w-24 rounded-[50%] "
                        alt=""
                      />
                    </div>
                    <div className="flex flex-wrap lg:flex md:flex sm:flex-wrap gap-2 items-center font-bold">
                      <h1 className="text-base font-thin  ">Sandar,</h1>
                      <p className="text-lg ">Zoom Fashion Idea</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex justify-center py-[4rem] ">
              <div className="lg:w-[70%] md:[80%] sm:w-[100%]">
                <RiDoubleQuotesL size={"70"} className="text-[#FF4400]" />

                <div className="md:px-[6rem] lg:px-[6rem]  px-[3rem] ">
                  <p className="font-thin text-xl mb-4">
                    Over three years in business, We’ve had the chance to work
                    on a variety of projects, with companies Lorem ipsum dolor
                    sit amet
                  </p>
                  <div className="flex items-center gap-4  ">
                    <div className="">
                      <img
                        src={profile3}
                        className="w-24 rounded-[50%] "
                        alt=""
                      />
                    </div>
                    <div className="lg:flex-nowrap md:flex-nowrap flex sm:flex-wrap flex-wrap gap-2 items-center font-bold">
                      <h1 className="text-base font-thin  ">Marie,</h1>
                      <p className="text-lg ">Art Fashion Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" flex justify-center py-[4rem] ">
              <div className="lg:w-[70%] md:[80%] sm:w-[100%]">
                <RiDoubleQuotesL size={"70"} className="text-[#FF4400]" />

                <div className="md:px-[6rem] lg:px-[6rem]  px-[3rem] ">
                  <p className="font-thin text-xl mb-4">
                    Over three years in business, We’ve had the chance to work
                    on a variety of projects, with companies Lorem ipsum dolor
                    sit amet
                  </p>
                  <div className="flex items-center gap-4  ">
                    <div className="">
                      <img
                        src={profile4}
                        className="w-24 rounded-[50%] "
                        alt=""
                      />
                    </div>
                    <div className=" lg:flex-nowrap md:flex-nowrap flex flex-wrap sm:flex-wrap gap-2 items-center font-bold">
                      <h1 className="text-base font-thin  ">Catherine,</h1>
                      <p className="text-lg ">Dress Fashion</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CarouselSwiper;
