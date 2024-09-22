import { CiYoutube } from "react-icons/ci";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdClose, MdFacebook, MdWhatsapp } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal1 = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="lg:fixed md:fixed sm:sticky inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-scroll ">
        <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%]  pt-[2rem]  rounded shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-black"
          >
            <MdClose size={34} fontWeight={20} fontSize={"bold"} />
          </button>
          <div className="py-[5rem] ">
            <h2 className="text-center text-4xl font-bold">Don Haruko</h2>
            <p className="text-center text-gray-500 mb-4 text-lg font-bold">
              Product, VP
            </p>
          </div>
          <hr className="h-4" />
          <div className="py-[4rem] px-[2rem] ">
            <h1 className="font-bold mb-4 text-2xl">
              Over three years in business had the chance to work on a variety
              of projects, with companies.
            </h1>
            <div className="flex  flex-wrap gap-8 items-center text-lg font-mono">
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse commodo viverra.
              </p>
            </div>
            <div className="mt-4 flex  gap-2 items-center">
              <h1 className="text-lg font-bold">Where to find?</h1>
              <CiYoutube
                size={24}
                className="text-gray-500 rounded hover:text-[#FF4400] hover:cursor-pointer "
              />
              <MdWhatsapp
                size={24}
                className="text-gray-500  rounded hover:text-[#FF4400] hover:cursor-pointer "
              />
              <FaInstagram
                size={24}
                className=" text-gray-500 rounded hover:text-[#FF4400] hover:cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Second Modal

const TeamModal2 = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="lg:fixed md:fixed sm:sticky inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-scroll ">
        <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%]  pt-[2rem]  rounded shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-black"
          >
            <MdClose size={34} fontWeight={20} fontSize={"bold"} />
          </button>
          <div className="py-[5rem] ">
            <h2 className="text-center text-4xl font-bold">Kelly Lisa</h2>
            <p className="text-center text-gray-500 mb-4 text-lg font-bold">
              Global, Head of Marketing
            </p>
          </div>
          <hr className="h-4" />
          <div className="py-[4rem] px-[2rem] ">
            <h1 className="font-bold mb-4 text-2xl">
              Over three years in business had the chance to work on a variety
              of projects, with companies.
            </h1>
            <div className="flex  flex-wrap gap-8 items-center text-lg font-mono">
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse commodo viverra.
              </p>
            </div>
            <div className="mt-4 flex  gap-2 items-center">
              <h1 className="text-lg font-bold">Where to find?</h1>

              <MdFacebook
                size={24}
                className="text-gray-500  rounded hover:text-[#FF4400] hover:cursor-pointer "
              />
              <FaInstagram
                size={24}
                className="text-gray-500 rounded hover:text-[#FF4400] hover:cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TeamModal3 = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="lg:fixed md:fixed sm:sticky inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-scroll ">
        <div className="bg-white w-[90%] md:w-[70%] lg:w-[60%]  pt-[2rem]  rounded shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-600 hover:text-black"
          >
            <MdClose size={34} fontWeight={20} fontSize={"bold"} />
          </button>
          <div className="py-[5rem] ">
            <h2 className="text-center text-4xl font-bold">Marie Sam</h2>
            <p className="text-center text-gray-500 mb-4 text-lg font-bold">
              Founder & CEO
            </p>
          </div>
          <hr className="h-4" />
          <div className="py-[4rem] px-[2rem] ">
            <h1 className="font-bold mb-4 text-2xl">
              Over three years in business had the chance to work on a variety
              of projects, with companies.
            </h1>
            <div className="flex  flex-wrap gap-8 items-center text-lg font-mono">
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse commodo viverra.
              </p>
            </div>
            <div className="mt-4 flex  gap-2 items-center">
              <h1 className="text-lg font-bold">Where to find?</h1>

              <FaTwitter
                size={24}
                className=" text-gray-500  rounded hover:text-[#FF4400] hover:cursor-pointer "
              />
              <FaLinkedin
                size={24}
                className=" text-gray-500 rounded hover:text-[#FF4400] hover:cursor-pointer "
              />
              <TfiEmail
                size={24}
                className="text-gray-500 rounded hover:text-[#FF4400] hover:cursor-pointer "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { TeamModal1, TeamModal2, TeamModal3 };
