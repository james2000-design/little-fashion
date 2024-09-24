import { Button, FormControl, Input } from "@chakra-ui/react";
import Footer from "./footer";
import { Link } from "react-router-dom";
import backgroundImage from "../assets/images/slideshow/medium-shot-business-women-high-five.jpeg";

const SignIn = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="py-[3rem] ">
          <div className="flex justify-center w-full">
            <div className="pb-[6rem] lg:w-[40%] md:w-[40%]  flex flex-col  w-full px-3  mx-4 gap-8 my-4 bg-white bg-opacity-80 rounded-lg ">
              <h1 className="text-center text-[3rem] font-bold ">Sign In</h1>
              <FormControl
                alignSelf={"center"}
                className="flex flex-col gap-8 w-full "
              >
                <Input
                  type="email"
                  placeholder="email"
                  className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                />
                <Input
                  type="password"
                  placeholder="Email Address"
                  className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                />
                <Button
                  alignSelf={"center"}
                  className="text-white font-bold bg-black text-center w-[50%] p-4 rounded-xl hover:bg-[#FF4400] "
                >
                  Send
                </Button>
              </FormControl>

              <p className="text-gray-500 font-thin text-xl text-center">
                Don’t have an account?{" "}
                <Link to={"/SignUp"}>
                  <span className="text-gray-500 hover:text-[#ff4400] cursor-pointer ">
                    Create One
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SignIn;
