import logo from "../../assets/Renthive.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex items-center justify-between px-11 py-4 ">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-24 h-auto mr-4" />
      </div>

      <ul className="flex items-center space-x-6 text-gray-500 font-medium">
        <Link to={"/All-Property"}>
          <li className="hover:text-gray-600 cursor-pointer">
            Property Listing
          </li>
        </Link>
        <li className="hover:text-gray-600 cursor-pointer">Contact Us</li>
        <li className="hover:text-gray-600 cursor-pointer">About Us</li>
      </ul>

      <div className="flex items-center space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 bg-[#F65730] text-white rounded-lg  transition duration-300">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-4 py-2 00 rounded-lg hover:bg-gray-300 transition duration-300">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
