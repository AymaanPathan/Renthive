import Progress from "../../Progress_Bar/Progress";
import { Link } from "react-router-dom";
import Detail from "../Details/Detail";
import Duration from "../Duration/Duration";
import { useContext, useState, useEffect } from "react";
import { PageBtnContext } from "../../Context/pageBtnContext";
import Payment from "../Payment/Payment";
import toast from "react-hot-toast";

function BookingForm() {
  const { page } = useContext(PageBtnContext);
  const resort_Id = localStorage.getItem("resort_id");
  const [resort, setResort] = useState(null);
  const userEmail = localStorage.getItem("email");
  const [bookingData, setBookingData] = useState(null);
  const [duration, setDuration] = useState(0);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userPhoneNumber, setUserPhoneNumber] = useState("");
  const [noOfGuest, setNoOfGuest] = useState(null);
  const [phoneOtp, setPhoneOtp] = useState(null);

  const updateData = () => {
    if (!userFirstName) {
      return toast.error("Please Provide First Name");
    }
    if (!userLastName) {
      return toast.error("Please Provide Last Name");
    }
    if (!userEmail) {
      return toast.error("Please Login To Book Resort");
    }
    if (!duration || duration < 1) {
      return toast.error("Please Provide Valid Duration");
    }
    if (!noOfGuest) {
      return toast.error("Please Provide Number Of Guests");
    }
    if (noOfGuest > 20) {
      return toast.error("Max guest allowed is 20");
    }
    setBookingData(() => ({
      firstName: userFirstName,
      LastName: userLastName,
      phone: userPhoneNumber,
      email: userEmail,
      duration: duration,
      totalGuest: noOfGuest,
      resortName: resort.name,
      resortId: resort_Id,
    }));
  };

  useEffect(() => {
    const fetchResort = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/getResort/${resort_Id}`,
          {
            headers: { "Content-Type": "application/json" },
            method: "GET",
          }
        );
        const data = await response.json();
        setResort(data);
      } catch (error) {
        console.error("Error fetching resort:", error);
      }
    };
    fetchResort();
  }, [resort_Id]);

  return (
    <div className="mt-6 p-4">
      <div className="flex items-center justify-between mx-4 mb-4">
        <Link to={"/"}>
          <button className="p-2 bg-orange-500 rounded-md text-white">
            Back To home
          </button>
        </Link>
        <p className="text-center font-semibold text-xl">
          Welcome To Booking Section
        </p>
        <p className="font-semibold text-gray-600">User Info Here:</p>
      </div>

      <div className="flex">
        <div className="w-1/3  p-6 rounded-lg mr-4">
          <Progress />
          <div className="mt-8">
            {page === 0 ? (
              <Detail
                email={userEmail}
                userFirstName={userFirstName}
                setUserFirstName={setUserFirstName}
                userLastName={userLastName}
                setUserLastName={setUserLastName}
                userPhoneNumber={userPhoneNumber}
                setPhoneUserNumber={setUserPhoneNumber}
                NoOfguest={noOfGuest}
                setNoOfGuest={setNoOfGuest}
                phoneOtp={phoneOtp}
                setPhoneOtp={setPhoneOtp}
              />
            ) : page === 1 ? (
              <Duration duration={duration} setDuration={setDuration} />
            ) : (
              <Payment />
            )}
          </div>
        </div>

        <div className="w-2/3 bg-white p-6 rounded-lg shadow-lg">
          {resort ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">{resort.name}</h2>
              <img
                src={resort.imageUrl[0]}
                alt={resort.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-700 text-lg mb-2">{resort.description}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {resort.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Loading resort information...</p>
          )}
        </div>
      </div>
      <button onClick={updateData}>Booking data</button>
    </div>
  );
}

export default BookingForm;
