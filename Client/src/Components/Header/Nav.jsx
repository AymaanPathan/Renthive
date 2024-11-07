import logo from "../../assets/Renthive.png";

import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="flex items-center justify-between px-4">
      <ul className="flex items-center justify-between gap-6">
        <li className="w-28 h-28">
          <img src={logo} alt="logo" />
        </li>
        <Link to={"/All-Property"}>
          <li className="hover:text-gray-600 text-gray-500 cursor-pointer">
            Property Listing
          </li>
        </Link>
        <li className="hover:text-gray-600 text-gray-500  cursor-pointer">
          Contact Us
        </li>
        <li className="hover:text-gray-600 text-gray-500  cursor-pointer">
          About Us
        </li>
      </ul>

      <div className="flex items-center relative w-96">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px"
          className="absolute left-3 text-gray-500"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
        </svg>
        <input
          className="h-12 bg-gray-100 w-full outline-none border rounded-full pl-12 pr-4"
          type="text"
          placeholder="What are you looking for?"
        />
      </div>
    </div>
  );
}

export default Nav;
