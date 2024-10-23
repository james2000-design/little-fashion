import { Button, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import Footer from "../components/footer";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import backgroundImage from "../assets/images/slideshow/medium-shot-business-women-high-five.jpeg";
import { useAuth } from "../context/storeContext";
import { useState } from "react";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      await signup(formData.name, formData.email, formData.password);
      toast.success("Signed up successfully!");
      navigate("/");
    } catch (err) {
      toast.error(`${err}`);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <main className="pt-2 ">
          <div className="flex justify-center w-full">
            <div className="pb-[6rem] lg:w-[30%] md:w-[30%] w-[100%] px-3 flex flex-col mx-4 gap-8 my-4 bg-white bg-opacity-80 rounded-lg">
              {" "}
              <h1 className="text-center text-[3rem] font-extrabold ">
                Sign Up
              </h1>
              <div className=" w-[100%] flex justify-center items-center border-2  border-gray-500 p-4 rounded-full group hover:bg-[#ff4400] hover:text-white cursor-pointer gap-2 ">
                <FaGoogle className="group-hover:text-white" />
                <span>Continue with Google</span>
              </div>
              <div className=" w-[100%] flex justify-center items-center border-2  border-gray-500 p-4 rounded-full group hover:bg-[#ff4400] hover:text-white cursor-pointer gap-2 ">
                <FaFacebook className="group-hover:text-white" />
                <span>Continue with facebook</span>
              </div>
              <div className="flex items-center justify-center py-[2rem]">
                <div className=" w-full border-[.5px] border-gray-300 "></div>
                <span className="px-2">OR</span>
                <div className=" w-full border-[0.5px] border-gray-300 "></div>
              </div>
              <form onSubmit={handleSubmit}>
                <FormControl
                  isRequired
                  alignSelf={"center"}
                  className="flex flex-col gap-8 w-full "
                >
                  <Input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    placeholder="full name"
                    className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                  />
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="Email Address"
                    className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                  />
                  <Input
                    required
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                    placeholder="password"
                    className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                  />
                  <FormErrorMessage>
                    * shall include 0-9 a-z A-Z in 4 to 10 characters
                  </FormErrorMessage>
                  <Input
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="password confirmation"
                    className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                  />
                  <Button
                    type="submit"
                    alignSelf={"center"}
                    className="text-white font-bold bg-black text-center w-[50%] p-4 rounded-xl hover:bg-[#FF4400] "
                  >
                    Send
                  </Button>
                </FormControl>
              </form>
              <p className="text-gray-500 font-thin text-xl text-center">
                Already have an account? Please
                <Link to={"/login"}>
                  <span className="text-gray-500 hover:text-[#ff4400] pl-1 cursor-pointer ">
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

export default SignUp;
