import { useState, useContext } from "react";
import toast from "react-hot-toast";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../Context/Modal";
import Lottie from "react-lottie-player";
import registerAnimation from "./Animation - 1731132874693.json";
import Nav from "../Header/Nav";

function Register() {
  const [username, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleBackgroundDropDown, handleBackgroundClickNav } =
    useContext(ModalContext);

  const handleClickDropDown = (e) => {
    handleBackgroundClickNav(e);
    handleBackgroundDropDown(e);
  };

  // Register
  const createAccount = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username === "" || email === "" || password === "") {
      return toast.error("Please Provide Valid Credentials");
    }

    if (!emailRegex.test(email)) {
      return toast.error("Email format is invalid");
    }

    try {
      const loadingToastId = toast.loading("Creating account...");
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.status === 400) {
        toast.error("Please Provide All Information");
        toast.dismiss(loadingToastId);
        return;
      }

      if (response.status === 401 || response.status === 402) {
        toast.error(data.Message);
        toast.dismiss(loadingToastId);
        return;
      }

      if (!response.ok) {
        toast.error("Please Try Again Later");
        toast.dismiss(loadingToastId);
        return;
      }

      toast.success("User Successfully Created", {
        id: loadingToastId,
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });

      localStorage.setItem("role", data.role);
      localStorage.setItem("token", data.Token);
      localStorage.setItem("name", data.username);
      localStorage.setItem("email", data.email);
      navigate("/");

      console.log(data);
    } catch (error) {
      toast.dismiss();
      console.error(error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  const [passwordToggle, setPasswordToggle] = useState(true);

  const tPassoword = () => {
    setPasswordToggle(!passwordToggle);
  };

  return (
    <div>
      <Nav />
      <div
        onClick={handleClickDropDown}
        className="main_register justify-between main"
      >
        <div onClick={handleClickDropDown} className="p-8 main">
          <h1 className="text-2xl whitespace-nowrap font-semibold sign_text">
            Register To Create your account
          </h1>
          <div>
            <div className="grid w-full grid-cols-1 mt-4">
              <label>Name</label>
              <input
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className="text-sm mt-2 border-gray-400 border-[1px] rounded-md p-2 input-small"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="grid w-full grid-cols-1 mt-4">
              <label>Email</label>
              <input
                required
                value={email}
                onChange={(e) => setUserEmail(e.target.value)}
                className="text-sm mt-2 border-gray-400 border-[1px] rounded-md p-2 input-small"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="w-full mt-4">
              <div className="grid grid-cols-1">
                <label>Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 text-sm border-gray-400 border-[1px] rounded-md p-2 input-small"
                  type={passwordToggle ? "password" : "text"}
                  placeholder="Password"
                />
              </div>
              <i
                onClick={tPassoword}
                className={`far text-sm ${
                  passwordToggle ? "fa-eye-slash" : "fa-eye"
                } relative left-[92%] bottom-8 cursor-pointer`}
                id="togglePassword"
              ></i>
            </div>

            <button
              onClick={createAccount}
              className="mt-4 active:scale-95 py-2 px-5 rounded-lg text-white bg-[#FF8E3A] w-full"
            >
              SignUp
            </button>
            <div className="text-center mt-4">
              <span
                onClick={() => navigate("/login")}
                className="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer"
              >
                Have an account? Login
              </span>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="main hidden lg:flex flex-1 ">
          <Lottie
            loop
            animationData={registerAnimation}
            play
            className="mx-auto mb-6"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
