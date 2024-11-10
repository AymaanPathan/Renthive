import Progress from "../../Progress_Bar/Progress";
import { Link } from "react-router-dom";
import Detail from "../Details/Detail";
import Duration from "../Duration/Duration";
import { useContext, useState, useEffect } from "react";
import { PageBtnContext } from "../../Context/pageBtnContext";
import Payment from "../Payment/Payment";

function BookingForm() {
  const { page } = useContext(PageBtnContext);
  const resort_Id = localStorage.getItem("resort_id");
  const [resort, setResort] = useState(null);

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
        <div className="w-1/3 bg-gray-50 p-6 rounded-lg shadow-lg mr-4">
          <Progress />
          <div className="mt-8">
            {page === 0 ? <Detail /> : page === 1 ? <Duration /> : <Payment />}
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
    </div>
  );
}

export default BookingForm;
