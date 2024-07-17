const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[99999] flex flex-row justify-center items-center bg-white">
      <div className="relative border border-transparent rounded-md">
        <span className="absolute top-1/2 left-1/2 w-[45px] h-[45px] mt-[-10px] ml-[-23px] rounded-full border border-[#959595] border-t-white animate-spin"></span>
      </div>
    </div>
  );
};

export default Spinner;
