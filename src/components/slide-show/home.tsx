import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "../../assets/images/slideshow/two-business-partners-working-together-office-computer.jpeg";
import Image2 from "../../assets/images/slideshow/medium-shot-business-women-high-five.jpeg";
import Image3 from "../../assets/images/slideshow/team-meeting-renewable-energy-project.jpeg";

const Home = () => {
  return (
    <div className="relative w-full h-[50rem] z-[-2] ">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={500}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        autoplay={{ delay: 5000 }}>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-[50rem] flex items-center mt-5 pt-5 justify-center"
            style={{
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
            }}>
            Slide 2 Content
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-[50rem] mt-5  pt-5 flex items-center justify-center"
            style={{
              backgroundImage: `url(${Image2})`,
              backgroundSize: "cover",
            }}>
            Slide 2 Content
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover bg-center h-[50rem] mt-5 pt-5 flex items-center justify-center"
            style={{
              backgroundImage: `url(${Image3})`,
              backgroundSize: "cover",
            }}>
            Slide 3 Content
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="swiper-pagination swiper-pagination-custom"></div> */}
    </div>
  );
};

export default Home;
