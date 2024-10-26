/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import LoginButton from "../LoginAuth0/Login";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    if (email === "" || password === "") {
      return toast.error("Please provide a valid email and password");
    }
    try {
      // Show loading state
      const loadingToastId = toast.loading("Checking data...");

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

      // Dismiss loading
      toast.dismiss(loadingToastId);

      const data = await response.json();

      if (response.ok) {
        // Successful login
        toast.success("Login Successful", {
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
        navigate("/"); // Redirect to home after successful login
      } else {
        switch (response.status) {
          case 400:
            toast.error("Please fill in both email and password");
            break;
          case 401:
            toast.error("User not found with this email");
            break;
          case 402:
            toast.error("Incorrect password");
            break;
          default:
            toast.error("An unknown error occurred. Please try again.");
        }
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong. Please try again.");
      console.log(error);
    }
  };

  const [passwordToggle, setPasswordToggle] = useState(true);

  const togglePassword = () => {
    setPasswordToggle(!passwordToggle);
  };

  return (
    <div className="flex min-h-screenmain">
      <div className="main justify-center w-full max-w-md px-8 py-10 mx-auto bg-white  rounded-lg">
        <h1 className="main text-3xl font-bold text-center mb-8 text-gray-800">
          Login to Access Your Account
        </h1>
        <div className="space-y-4">
          {/* <div className="bg-gray-200 text-start gap-4 p-2  flex flex-col justify-start rounded-md mb-4  text-sm text-gray-600">
            <p>For testing:</p>
            <p>Email: user@gmail.com</p>
            <p>Password: user1234</p>
          </div> */}
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
            <span className="text-sm text-indigo-600 hover:text-indigo-500 cursor-pointer">
              Forgot password?
            </span>
          </div>
          <button
            onClick={loginUser}
            className="mt-4 active:scale-95 py-2 px-5 text-white bg-[#1B2834] w-full"
          >
            Login
          </button>
          <LoginButton />
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
      <div className="main hidden lg:flex flex-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="731.67"
          height="511.12"
          viewBox="0 0 731.67 511.12"
        >
          <path
            d="m0,509.7c0,.66.53,1.19,1.19,1.19h729.29c.66,0,1.19-.53,1.19-1.19s-.53-1.19-1.19-1.19H1.19c-.66,0-1.19.53-1.19,1.19Z"
            fill="#3f3d58"
          />
          <polygon
            points="440.61 79.12 466.22 87.54 466.22 50.67 442.98 50.67 440.61 79.12"
            fill="#f8a8ab"
          />
          <circle cx="463.05" cy="35.35" r="25.52" fill="#f8a8ab" />
          <path
            d="m456.55,37.35l3.52,4.27,6.36-11.14s8.12.42,8.12-5.61,7.45-6.2,7.45-6.2c0,0,10.55-18.42-11.3-13.57,0,0-15.16-10.38-22.69-1.51,0,0-23.11,11.64-16.5,31.9l10.99,20.89,2.49-4.73s-1.51-19.85,11.56-14.32v.02Z"
            fill="#2f2e43"
          />
          <rect
            x="432.93"
            y="461.78"
            width="20.94"
            height="29.71"
            fill="#f8a8ab"
          />
          <path
            d="m451.55,508.51c-3.58.32-21.5,1.74-22.4-2.37-.82-3.77.39-7.71.56-8.25,1.72-17.14,2.36-17.33,2.75-17.44.61-.18,2.39.67,5.28,2.53l.18.12.04.21c.05.27,1.33,6.56,7.4,5.59,4.16-.66,5.51-1.58,5.94-2.03-.35-.16-.79-.44-1.1-.92-.45-.7-.53-1.6-.23-2.68.78-2.85,3.12-7.06,3.22-7.23l.27-.48,23.8,16.06,14.7,4.2c1.11.32,2,1.11,2.45,2.17h0c.62,1.48.24,3.2-.96,4.28-2.67,2.4-7.97,6.51-13.54,7.02-1.48.14-3.44.19-5.64.19-9.19,0-22.61-.95-22.71-.97h0Z"
            fill="#2f2e43"
          />
          <path
            d="m480.61,205.64l-54.93-2.81s-8.42,31.92,2.22,65.18l1.28,200.29h31.04l29.26-206.61-8.87-56.05h0Z"
            fill="#2f2e43"
          />
          <path
            d="m471.35,72.03l-30.15-16s-32.49,47.48-28,73.2c4.5,25.72,12.48,73.6,12.48,73.6l66.51,2.81-11.61-94.29-9.23-39.32s0,0,0,0Z"
            fill="#e2e3e4"
          />
          <rect
            x="447.83"
            y="461.78"
            width="20.94"
            height="29.71"
            fill="#f8a8ab"
          />
          <path
            d="m466.45,508.51c-3.58.32-21.5,1.74-22.4-2.37-.82-3.77.39-7.71.56-8.25,1.72-17.14,2.36-17.33,2.75-17.44.61-.18,2.39.67,5.28,2.53l.18.12.04.21c.05.27,1.33,6.56,7.4,5.59,4.16-.66,5.51-1.58,5.94-2.03-.35-.16-.79-.44-1.1-.92-.45-.7-.53-1.6-.23-2.68.78-2.85,3.12-7.06,3.22-7.23l.27-.48,23.8,16.06,14.7,4.2c1.11.32,2,1.11,2.45,2.17h0c.62,1.48.24,3.2-.96,4.28-2.67,2.4-7.97,6.51-13.54,7.02-1.48.14-3.44.19-5.64.19-9.19,0-22.61-.95-22.71-.97h0Z"
            fill="#2f2e43"
          />
          <path
            d="m492.19,205.64l-66.51-2.81s-8.42,31.92,2.22,65.18l12.86,200.29h31.04l29.26-206.61-8.87-56.05h0Z"
            fill="#2f2e43"
          />
          <path
            d="m485.25,336.46c-4.65,0-9.72-1.14-14.73-2.26-3.71-.83-6.98-1.04-9.6-1.2-3.98-.25-7.13-.45-8.88-2.78-1.73-2.3-1.73-6.21,0-13.92,2.3-10.24,7.42-26.6,13.68-40.06,8.09-17.36,15.86-25.35,23.11-23.72,9.71,2.18,13.58,18.39,15.03,27.85,2.02,13.21,1.84,28.91-.44,39.07h0c-3.02,13.45-9.95,17.01-18.18,17.01h.01Zm1.77-81.13c-5.33,0-11.87,7.78-18.57,22.18-6.17,13.25-11.21,29.36-13.48,39.45-1.45,6.48-1.61,10.01-.53,11.46.92,1.22,3.33,1.38,6.66,1.58,2.73.17,6.13.38,10.07,1.27,15.66,3.51,25.45,4.79,29.32-12.48,4.15-18.5.99-60.35-12.32-63.34-.38-.09-.77-.13-1.16-.13h.01Z"
            fill="#dfdfe0"
          />
          <polygon
            points="548.58 460.81 399.43 461.79 376.26 451.13 389.76 313.42 403.34 314.11 543.07 321.22 548.58 460.81"
            fill="#64605c"
          />
          <polygon
            points="399.43 461.79 376.26 451.13 389.76 313.42 403.34 314.11 399.43 461.79"
            fill="#272223"
            opacity=".2"
          />
          <path
            d="m487.5,311.06c-2.77,0-5.8-.68-8.78-1.35-2.21-.5-4.16-.62-5.73-.72-2.37-.15-4.25-.27-5.29-1.66-1.03-1.37-1.03-3.7,0-8.3,1.37-6.11,4.42-15.86,8.16-23.88,4.82-10.35,9.46-15.11,13.78-14.14,5.79,1.3,8.1,10.96,8.96,16.61,1.2,7.88,1.1,17.24-.26,23.29h0c-1.8,8.02-5.93,10.14-10.84,10.14h0Zm1.06-48.37c-3.18,0-7.08,4.64-11.07,13.23-3.68,7.9-6.69,17.5-8.03,23.52-.87,3.86-.96,5.97-.31,6.83.55.73,1.98.82,3.97.94,1.63.1,3.65.23,6,.76,9.33,2.09,15.17,2.85,17.48-7.44,2.47-11.03.59-35.98-7.34-37.76-.23-.05-.46-.08-.69-.08h-.01Z"
            fill="#dfdfe0"
          />
          <polygon
            points="525.25 385.21 436.33 385.79 422.51 379.44 430.56 297.33 438.66 297.74 521.97 301.98 525.25 385.21"
            fill="#e2e3e4"
          />
          <polygon
            points="436.33 385.79 422.51 379.44 430.56 297.33 438.66 297.74 436.33 385.79"
            fill="#272223"
            opacity=".2"
          />
          <path
            id="uuid-2ebd868f-c256-4818-ab73-e4d3dd12d9e3-46-44-87-46-99-367"
            d="m492.7,255.64c1.49,7.32-1.24,14.01-6.08,14.94s-9.97-4.26-11.45-11.58c-.63-2.92-.53-5.94.29-8.82l-5.89-31.11,15.22-2.41,4.19,30.92c1.89,2.36,3.16,5.12,3.72,8.06h0Z"
            fill="#f8a8ab"
          />
          <path
            d="m433,71.45s22.26-2.82,24.92,3.83,33.92,164.94,33.92,164.94h-20.62l-38.22-168.77s0,0,0,0Z"
            fill="#e2e3e4"
          />
          <polygon
            points="278.34 105.33 255.98 112.68 255.98 80.5 276.27 80.5 278.34 105.33"
            fill="#f8a8ab"
          />
          <circle cx="258.75" cy="67.13" r="22.28" fill="#f8a8ab" />
          <path
            d="m264.87,64.92c-3.73-.11-6.18-3.88-7.63-7.32s-2.94-7.39-6.4-8.81c-2.83-1.16-7.82,6.69-10.05,4.6-2.33-2.18-.06-13.37,2.41-15.38s5.85-2.4,9.03-2.55c7.76-.36,15.57.27,23.18,1.86,4.71.98,9.55,2.46,12.95,5.86,4.3,4.32,5.4,10.83,5.71,16.92.32,6.23-.04,12.75-3.07,18.2-3.03,5.45-9.37,9.47-15.45,8.08-.61-3.3.01-6.69.25-10.05.23-3.35-.01-6.97-2.06-9.64s-6.42-3.73-8.8-1.36"
            fill="#2f2e43"
          />
          <path
            d="m292.28,72.64c2.23-1.63,4.9-3,7.64-2.66,2.96.36,5.47,2.8,6.23,5.69s-.09,6.07-1.93,8.43c-1.83,2.36-4.56,3.92-7.44,4.7-1.67.45-3.5.64-5.09-.04-2.34-1.01-3.61-4-2.69-6.38"
            fill="#2f2e43"
          />
          <rect
            x="250.02"
            y="463.43"
            width="20.94"
            height="29.71"
            fill="#f8a8ab"
          />
          <path
            d="m229.62,511.12c-2.2,0-4.16-.05-5.64-.19-5.56-.51-10.87-4.62-13.54-7.02-1.2-1.08-1.58-2.8-.96-4.28h0c.45-1.06,1.34-1.86,2.45-2.17l14.7-4.2,23.8-16.06.27.48c.1.18,2.44,4.39,3.22,7.23.3,1.08.22,1.98-.23,2.68-.31.48-.75.76-1.1.92.43.45,1.78,1.37,5.94,2.03,6.07.96,7.35-5.33,7.4-5.59l.04-.21.18-.12c2.89-1.86,4.67-2.71,5.28-2.53.38.11,1.02.31,2.75,17.44.17.54,1.38,4.48.56,8.25-.89,4.1-18.81,2.69-22.4,2.37-.1.01-13.52.97-22.71.97h-.01Z"
            fill="#2f2e43"
          />
          <rect
            x="319.09"
            y="443.36"
            width="20.94"
            height="29.71"
            transform="translate(-192.55 243.81) rotate(-31.95)"
            fill="#f8a8ab"
          />
          <path
            d="m306.98,507.05c-2.46,0-4.72-.3-6.33-.58-1.58-.28-2.82-1.54-3.08-3.12h0c-.18-1.14.15-2.29.93-3.14l10.25-11.34,11.7-26.22.48.26c.18.1,4.39,2.43,6.56,4.43.83.76,1.24,1.57,1.22,2.4-.01.58-.23,1.04-.45,1.37.6.16,2.23.22,6.11-1.42,5.66-2.39,3.42-8.41,3.32-8.66l-.08-.2.09-.19c1.47-3.11,2.52-4.77,3.14-4.94.39-.11,1.03-.28,11.56,13.35.43.36,3.54,3.07,4.84,6.7,1.41,3.95-14.54,12.24-17.75,13.86-.1.08-16.79,12.21-23.65,15.66-2.72,1.37-5.94,1.79-8.87,1.79h0Z"
            fill="#2f2e43"
          />
          <path
            d="m286.38,214.98h-58.63l-5.32,54.54,23.28,201.52h29.93l-11.97-116.39,48.55,105.08,26.6-18.62-37.91-98.1s13.54-85.46,2.9-106.75-17.43-21.28-17.43-21.28h0Z"
            fill="#2f2e43"
          />
          <polygon
            points="315.54 218.3 222.43 218.3 250.36 97.92 290.93 97.92 315.54 218.3"
            fill="#64605c"
          />
          <path
            id="uuid-f899ad7f-3d0f-4b30-ad3c-9c1473a48add-47-45-88-47-100-368"
            d="m199.3,95.55c-1.49-7.32,1.24-14.01,6.08-14.94s9.97,4.26,11.45,11.58c.63,2.92.53,5.94-.29,8.82l5.89,31.11-15.22,2.41-4.19-30.92c-1.89-2.36-3.16-5.12-3.72-8.06h0Z"
            fill="#f8a8ab"
          />
          <path
            d="m289.94,97.92h-35.78l-24.12,48.24-9.1-36.15-19.99,2.12s4.73,70.63,25.4,68.24c20.67-2.39,68.88-66.02,63.58-82.46h.01Z"
            fill="#64605c"
          />
          <path
            d="m323.73,326.73c-2.77,0-5.8-.68-8.78-1.35-2.21-.5-4.16-.62-5.73-.72-2.37-.15-4.25-.27-5.29-1.66-1.03-1.37-1.03-3.7,0-8.3,1.37-6.11,4.42-15.86,8.16-23.88,4.82-10.35,9.46-15.11,13.78-14.14,5.79,1.3,8.1,10.96,8.96,16.61,1.2,7.88,1.1,17.24-.26,23.29h0c-1.8,8.02-5.93,10.14-10.84,10.14h0Zm1.06-48.37c-3.18,0-7.08,4.64-11.07,13.23-3.68,7.9-6.69,17.5-8.03,23.52-.87,3.86-.96,5.97-.31,6.83.55.73,1.98.82,3.97.94,1.63.1,3.65.23,6,.76,9.33,2.09,15.17,2.85,17.48-7.44,2.47-11.03.59-35.98-7.34-37.76-.23-.05-.46-.08-.69-.08h-.01Z"
            fill="#dfdfe0"
          />
          <polygon
            points="361.49 400.87 272.57 401.45 258.75 395.1 266.8 312.99 274.9 313.4 358.21 317.64 361.49 400.87"
            fill="#e2e3e4"
          />
          <polygon
            points="272.57 401.45 258.75 395.1 266.8 312.99 274.9 313.4 272.57 401.45"
            fill="#272223"
            opacity=".2"
          />
          <path
            id="uuid-aa721d86-32e3-4ace-957f-0814f6d1eb89-48-46-89-48-101-369"
            d="m329.89,281.37c1.49,7.32-1.24,14.01-6.08,14.94s-9.97-4.26-11.45-11.58c-.63-2.92-.53-5.94.29-8.82l-5.89-31.11,15.22-2.41,4.19,30.92c1.89,2.36,3.16,5.12,3.72,8.06h0Z"
            fill="#f8a8ab"
          />
          <path
            d="m269.54,97.92s20.33-.86,21.39,0c5.55,4.53,38.1,168.04,38.1,168.04h-20.62l-38.87-168.04s0,0,0,0Z"
            fill="#64605c"
          />
        </svg>
        {/*  className="object-cover w-full h-full main" */}
      </div>
    </div>
  );
}

export default Login;