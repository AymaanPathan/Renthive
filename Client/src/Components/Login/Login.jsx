/* eslint-disable react/no-unescaped-entities */
import { useState, useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ForgotPasswordModal from "./ForgetPasswordModal";
import { ModalContext } from "../Context/Modal";
import Lottie from "react-lottie-player";
import loginAnimation from "./Animation - 1731132435717.json";
import Nav from "../Header/Nav";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const navigate = useNavigate();
  const { handleBackgroundDropDown, handleBackgroundClickNav } =
    useContext(ModalContext);

  const handleClickDropDown = (e) => {
    handleBackgroundClickNav(e);
    handleBackgroundDropDown(e);
  };

  const loginUser = async () => {
    toast.loading("Checking Data...");
    if (email === "" || password === "") {
      toast.dismiss();
      return toast.error("Please Provide Valid Email & Password");
    }
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        toast.dismiss();
        toast.success("Login Successful");
        localStorage.setItem("role", data.role);
        localStorage.setItem("token", data.Token);
        localStorage.setItem("name", data.username);
        localStorage.setItem("email", data.email);
        navigate("/");
      }
      if (response.status === 400) {
        toast.dismiss();
        toast.error("Please Fill Email And Password Inputs");
      }
      if (response.status === 401) {
        toast.dismiss();
        toast.error("User Not Found With This Email Id");
      }
      if (response.status === 402) {
        toast.dismiss();
        toast.error("Password is incorrect");
      }
    } catch (error) {
      toast.dismiss();
      toast.error(error);
    }
  };

  const [passwordToggle, setPasswordToggle] = useState(true);

  const togglePassword = () => {
    setPasswordToggle(!passwordToggle);
  };

  return (
    <div>
      <Nav />
      <div className="flex min-h-screenmain ">
        <div
          onClick={handleClickDropDown}
          className="main justify-center w-full max-w-md px-8 py-10 mx-auto bg-white  rounded-lg"
        >
          <h1
            onClick={handleClickDropDown}
            className="main text-3xl font-bold text-center mb-8 text-gray-800"
          >
            Login to Access Your Account
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                type={passwordToggle ? "password" : "text"}
                placeholder="Password"
              />
              <i
                onClick={togglePassword}
                className={`far text-sm ${
                  passwordToggle ? "fa-eye-slash" : "fa-eye"
                } absolute right-3 top-10 cursor-pointer`}
                id="togglePassword"
              ></i>
            </div>
            <div className="text-right">
              <span
                onClick={() => setShowForgotPasswordModal(true)}
                className="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Forgot password?
              </span>
            </div>
            <button
              onClick={loginUser}
              className="mt-4 active:scale-95 py-2 px-5 rounded-lg text-white bg-[#FF8E3A] w-full"
            >
              Login
            </button>
            <div className="text-center mt-4">
              <span
                onClick={() => navigate("/register")}
                className="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Don't have an account? Sign Up
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={handleClickDropDown}
          className="main hidden lg:flex flex-1 "
        >
          <Lottie
            loop
            animationData={loginAnimation}
            play
            className="mx-auto mb-6"
          />
        </div>

        {showForgotPasswordModal && (
          <ForgotPasswordModal
            setShowForgotPasswordModal={setShowForgotPasswordModal}
          />
        )}
      </div>
    </div>
  );
}

export default Login;
