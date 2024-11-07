import { Link } from "react-router-dom";
import ResortListing from "../ResortListing/ResortListing";
function AllProperty() {
  return (
    <div>
      <div className="header flex   py-6  items-center justify-between">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <h2 className="text-md bg-[#FE632F] py-2 px-5 cursor-pointer ml-2 font-semibold text-white rounded-full">
              Home
            </h2>
          </Link>
          <h2 className="text-md py-2 px-5 cursor-pointer ml-2 text-[#ABABAB] font-bold rounded-full">
            Property Listing
          </h2>
        </div>
        <nav>
          <ul className="flex items-center text-lg gap-8 text-[#ABABAB] border border-gray-300 rounded-full px-4 py-2 bg-white shadow-lg">
            <li className="text-[#E08F71] font-bold bg-[#FFEFEC] px-5 py-1 cursor-pointer rounded-full transition-shadow hover:shadow-md">
              All
            </li>
            <li className="cursor-pointer px-5 py-1 rounded-full transition-shadow hover:bg-[#FFEFEC] hover:text-[#E08F71] hover:shadow-md">
              Resorts
            </li>
            <li className="cursor-pointer px-5 py-1 rounded-full transition-shadow hover:bg-[#FFEFEC] hover:text-[#E08F71] hover:shadow-md">
              House & Villa
            </li>
            <li className="cursor-pointer px-5 py-1 rounded-full transition-shadow hover:bg-[#FFEFEC] hover:text-[#E08F71] hover:shadow-md">
              Apartments
            </li>
          </ul>
        </nav>

        <div className="flex">
          <input
            type="text"
            placeholder="Search Property"
            className="w-80 text-center   border border-[#eebda6]  outline-none rounded-l-full h-12"
          />
        </div>
      </div>
      <ResortListing />
    </div>
  );
}

export default AllProperty;
