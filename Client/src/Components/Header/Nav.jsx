import logo from "../../assets/Renthive.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Nav() {
  const navigate = useNavigate();
  const deleteToken = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    toast.success("Logout successful");
    navigate("/");
  };
  return (
    <div className="flex items-center justify-between px-11 py-4 ">
      <Link to={"/"}>
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-24 h-auto mr-4" />
        </div>
      </Link>

      <ul className="flex items-center space-x-6 text-gray-500 font-medium">
        <Link to={"/All-Property"}>
          <li className="hover:text-gray-600 cursor-pointer">
            Property Listing
          </li>
        </Link>
        <li className="hover:text-gray-600 cursor-pointer">Contact Us</li>
        <li className="hover:text-gray-600 cursor-pointer">About Us</li>
      </ul>

      {localStorage.getItem("token") ? (
        <div className="flex justify-between gap-5 items-center ">
          <p>Hello , {localStorage.getItem("name")}</p>
          <h1
            onClick={deleteToken}
            className="cursor-pointer bg-orange-400 px-2 rounded-full text-white"
          >
            Logout
          </h1>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Nav;
