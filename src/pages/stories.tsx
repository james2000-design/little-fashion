import Navbar from "../components/navbar";
import picture1 from "../assets/images/header/businesspeople-meeting-office-working.jpg";
import Team from "../components/team/team";
import Footer from "../components/footer";
import CarouselSwiper from "../components/carouselSwiper";

const Stories = () => {
  return (
    <div className="">
      <Navbar />
      <main className="pt-24 overflow-hidden">
        <section className="">
          <div className="flex md:flex-nowrap flex-wrap gap-10 w-full items-center bg-[#f0f8ff]  ">
            <div className="md:w-[50%] px-10 w-full flex justify-center">
              <h1 className="text-6xl font-extrabold  pb-5 capitalize">
                <span className="text-[#FF4400] "> Company</span>
                <br />
                <span>Fashion</span>
              </h1>
            </div>
            <div className="md:w-[48%] w-full ">
              <img src={picture1} alt="" />
            </div>
          </div>
        </section>

        {/* Team  */}

        <section>
          <Team />
        </section>
        <section>
          <CarouselSwiper />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Stories;
