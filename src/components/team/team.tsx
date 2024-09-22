import { MdAdd } from "react-icons/md";
import profile1 from "../../assets/images/people/senior-man-wearing-white-face-mask-covid-19-campaign-with-design-space.jpeg";
import profile2 from "../../assets/images/people/portrait-british-woman.jpeg";
import profile3 from "../../assets/images/people/beautiful-woman-face-portrait-brown-background.jpeg";

import { TeamModal1, TeamModal2, TeamModal3 } from "./modal/teamModal";
import { useState } from "react";

const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal1 = () => setIsModalOpen(true);
  const handleOpenModal2 = () => setModalOpen(true);
  const handleOpenModal3 = () => setIsOpen(true);
  const handleCloseModal1 = () => setIsModalOpen(false);
  const handleCloseModal2 = () => setModalOpen(false);
  const handleCloseModal3 = () => setIsOpen(false);

  return (
    <div className="bg-gray-300  py-36 px-10 relative ">
      <div className="md:w-[50%]  w-full flex justify-start">
        <h1 className="text-5xl font-extrabold  pb-5 capitalize">
          <span>Meet Our</span>
          <span className="text-[#FF4400] "> team</span>
          <br />
        </h1>
      </div>
      <div className=" py-12 flex md:flex-nowrap flex-wrap gap-4 justify-between  ">
        <div className="bg-white rounded-md flex justify-between h-[170px] items-center w-full px-8 ">
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
              <div
                onClick={handleOpenModal1}
                className="bg-white rounded-[50%] w-5  p-[2px] cursor-pointer group-hover:bg-black items-center"
              >
                <MdAdd className="text-gray-500 " />
              </div>
            </div>
          </div>
        </div>

        <TeamModal1 isOpen={isModalOpen} onClose={handleCloseModal1} />
        {/* divider */}

        <div className="bg-white rounded-md flex justify-between items-center h-[170px]  w-full  px-8">
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
              <div
                onClick={handleOpenModal2}
                className="bg-white rounded-[50%] w-5  p-[2px] cursor-pointer group-hover:bg-black items-center"
              >
                <MdAdd className="text-gray-500 " />
              </div>
            </div>
          </div>
        </div>
        <TeamModal2 isOpen={ModalOpen} onClose={handleCloseModal2} />
        {/* divider */}

        <div className="bg-white rounded-md flex justify-between items-center h-[170px] w-full px-8  ">
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
              <div
                onClick={handleOpenModal3}
                className="bg-white rounded-[50%] w-5  p-[2px] cursor-pointer group-hover:bg-black items-center"
              >
                <MdAdd className="text-gray-500 " />
              </div>
            </div>
          </div>
        </div>
        <TeamModal3 isOpen={isOpen} onClose={handleCloseModal3} />
        {/* divider */}
      </div>
    </div>
  );
};

export default Team;
