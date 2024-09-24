import { MdClose } from "react-icons/md";
import Image from "../assets/images/product/evan-mcdougall-qnh1odlqOmk-unsplash.jpeg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="  ">
      <div className="fixed inset-0 z-50 pt-[16rem] lg:pt-0 md:pt-0 sm:pt-0 pb-[2rem] flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
        <div className="bg-white w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] mt-10 p-4 rounded-lg shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
          >
            <MdClose size={30} />
          </button>

          <div className="py-4">
            <div className="flex flex-col lg:flex-row lg:justify-center gap-4 px-4 py-4">
              <div className="lg:w-[50%] p-[2rem] ">
                <img src={Image} alt="Tree Pot" className="w-full" />
              </div>

              <div className="lg:w-[50%] md:w-[50%] w-full py-4">
                <div className="flex flex-col gap-4 mb-2">
                  <h1 className="font-bold text-4xl">Tree pot</h1>
                  <p className="text-xl">$25</p>
                  <p>Quantity: 4</p>
                  <p>Colour: Black</p>
                  <p>Size: S/S</p>
                </div>
                <hr />
                <h1 className="pt-4 text-gray-500 text-lg font-bold">
                  Total: $100
                </h1>
              </div>
            </div>

            <hr />
            <div className="mt-4 flex lg:justify-end justify-center  ">
              <h1 className="text-lg font-bold"></h1>
              <div className="  lg:w-[50%] w-full">
                <button className="hover:bg-[#ff4400]  w-full rounded text-center bg-black text-white px-[4rem] py-4 transition-all duration-300 cursor-pointer">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
