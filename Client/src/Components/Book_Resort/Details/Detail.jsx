/* eslint-disable react/prop-types */
import { useContext } from "react";
import { PageBtnContext } from "../../Context/pageBtnContext";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./PhoneInputCustom.css"; // Custom CSS file to override default PhoneInput styles

function Detail({
  email,
  userFirstName,
  setUserFirstName,
  userLastName,
  setUserLastName,
  userPhoneNumber,
  setPhoneUserNumber,
  NoOfguest,
  setNoOfGuest,
}) {
  const { handlePage } = useContext(PageBtnContext);

  const handleNextPage = (e) => {
    if (
      !email ||
      !userFirstName ||
      !userLastName ||
      !userPhoneNumber ||
      !NoOfguest
    ) {
      return toast.error("Please Provide All Information");
    }
    if (NoOfguest > 20) {
      return toast.error("Max guest allowed is 20");
    }
    handlePage(e);
  };

  return (
    <form className="w-full max-w-lg mx-auto">
      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First Name
          </label>
          <input
            value={userFirstName}
            onChange={(e) => setUserFirstName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Your First Name"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name
          </label>
          <input
            value={userLastName}
            onChange={(e) => setUserLastName(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Your Last Name"
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-3">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none block w-full cursor-not-allowed text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-password"
            type="email"
            readOnly
            placeholder={email}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Phone Number
          </label>
          <PhoneInput
            className="number"
            country={"in"}
            containerClass="phone-input-container"
            inputClass="phone-input-field"
            value={userPhoneNumber}
            onChange={(e) => setPhoneUserNumber(e)}
          />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 ">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            No. Of Guests
          </label>
          <input
            value={NoOfguest}
            onChange={(e) => setNoOfGuest(Number(e.target.value))}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-guests"
            type="number"
            max={20}
            placeholder="No. Of Guests"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleNextPage}
        className="w-full bg-[#F65730] mt-2 border text-lg hover:text-white active:scale-90 ease-in-out duration-500 text-gray-200 py-3 rounded-lg shadow-lg"
      >
        Next step
      </button>
    </form>
  );
}

export default Detail;
