import { Button, FormControl, Input } from "@chakra-ui/react";
import Footer from "./footer";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/storeContext";
import backgroundImage from "../assets/images/slideshow/medium-shot-business-women-high-five.jpeg";
import React, { useState } from "react";
import toast from "react-hot-toast";

const SignIn = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      toast.success("Login Successfully");
      navigate("/");
    } catch (err) {
      toast.error("Failed to login.");
    }
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
        <main className="py-[3rem] ">
          <div className="flex justify-center w-full">
            <div className="pb-[6rem] lg:w-[30%] md:w-[40%]  flex flex-col  w-full px-3  mx-4 gap-8 my-4 bg-white bg-opacity-80 rounded-xl ">
              <h1 className="text-center text-[3rem] font-bold ">Sign In</h1>
              <form onSubmit={handleSubmit}>
                <FormControl
                  alignSelf={"center"}
                  className="flex flex-col gap-8 w-full "
                >
                  <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="email"
                    className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                  />
                  <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    placeholder="password"
                    className="border-[1px] border-gray-400 rounded-md p-2 focus:border-blue-200 focus:border-4 focus:outline-none"
                  />
                  <Button
                    alignSelf={"center"}
                    type="submit"
                    className="text-white font-bold bg-black text-center w-[50%] p-4 rounded-xl hover:bg-[#FF4400] "
                  >
                    Send
                  </Button>
                </FormControl>
              </form>
              <p className="text-gray-500 font-thin text-xl text-center">
                Don’t have an account?{" "}
                <Link to={"/register"}>
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
