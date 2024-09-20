import { MdAdd } from "react-icons/md";
import profile1 from "../../assets/images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg";
import profile2 from "../../assets/images/people/portrait-british-woman.jpeg";
import profile3 from "../../assets/images/people/beautiful-woman-face-portrait-brown-background.jpeg";
const Team = () => {
  // const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <div className="bg-gray-300  py-36 px-10 ">
      <div className="md:w-[50%]  w-full flex justify-start">
        <h1 className="text-6xl font-extrabold  pb-5 capitalize">
          <span>Meet Our</span>
          <span className="text-[#FF4400] "> team</span>
          <br />
        </h1>
      </div>
      <div className=" py-12 flex md:flex-nowrap flex-wrap gap-4 justify-between  ">
        <div className="bg-white rounded-md flex justify-between h-[150px] items-center w-full px-8 ">
          <div className="flex items-center gap-4 p-5 ">
            <div className="">
              <img src={profile1} className="w-24 rounded-[50%] " alt="" />
            </div>
            <div className="font-bold">
              <h1 className="text-lg ">Don</h1>
              <p className="text-lg text-gray-400">Product,Vp</p>
            </div>
          </div>
          <div className=" bg-gray-400 group w-10 h-10  p-[0.65rem] rounded">
            <div className="w-full">
              <div className="bg-white rounded-[50%] w-5  p-[2px] cursor-pointer group-hover:bg-black items-center">
                <MdAdd className="text-gray-500 " />
              </div>
            </div>
          </div>
        </div>

        {/* divider */}

        <div className="bg-white rounded-md flex justify-between items-center h-[150px]  w-full  px-8">
          <div className="flex items-center gap-4 p-5 ">
            <div className="">
              <img src={profile2} className="w-24 rounded-[50%] " alt="" />
            </div>
            <div className="font-bold">
              <h1 className="text-lg ">Don</h1>
              <p className="text-lg text-gray-400">Marketing</p>
            </div>
          </div>
          <div className=" bg-gray-400 group w-10 h-10  p-[0.65rem] rounded">
            <div className="w-full">
              <div className="bg-white rounded-[50%] w-5  p-[2px] cursor-pointer group-hover:bg-black items-center">
                <MdAdd className="text-gray-500 " />
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="bg-white rounded-md flex justify-between items-center h-[150px] w-full px-8  ">
          <div className="flex items-center gap-4 p-5">
            <div className="">
              <img src={profile3} className="w-24 rounded-[50%] " alt="" />
            </div>
            <div className="font-bold">
              <h1 className="text-lg ">Don</h1>
              <p className="text-lg text-gray-400">Founder</p>
            </div>
          </div>
          <div className=" bg-gray-400 group w-10 h-10  p-[0.65rem] rounded">
            <div className="w-full">
              <div className="bg-white rounded-[50%] w-5  p-[2px] cursor-pointer group-hover:bg-black items-center">
                <MdAdd className="text-gray-500 " />
              </div>
            </div>
          </div>
        </div>

        {/* divider */}
      </div>
    </div>
  );
};

export default Team;
