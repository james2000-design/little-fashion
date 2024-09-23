import { Button, FormControl, Input } from "@chakra-ui/react";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <>
      <div>
        <main className="pt-[8rem] ">
          <div className="flex justify-center w-full">
            <div className="pb-[6rem] lg:w-[40%] md:w-[40%] w-[100%] flex flex-col  w-ull  mx-4 gap-8 my-4 ">
              <h1 className="text-center text-[5rem] font-bold ">Sign In</h1>
              <FormControl
                alignSelf={"center"}
                className="flex flex-col gap-8 w-full "
              >
                <Input
                  placeholder="Full name"
                  className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                />
                <Input
                  type="email"
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
                <Link to={"/SignInPage"}>
                  <span className="text-gray-500 hover:text-[#ff4400] cursor-pointer ">
                    Sign In
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

export default SignUpPage;
