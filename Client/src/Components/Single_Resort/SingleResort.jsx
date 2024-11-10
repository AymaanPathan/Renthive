import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Nav from "../Header/Nav";

function SingleResortPage() {
  const { _id } = useParams();
  const [resort, setResort] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResort = async () => {
      try {
        const response = await fetch(`http://localhost:3000/getResort/${_id}`, {
          headers: { "Content-Type": "application/json" },
          method: "GET",
        });
        const data = await response.json();
        setResort(data);
      } catch (error) {
        console.error("Error fetching resort:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResort();
  }, [_id]);

  if (loading) {
    return <p>Loading...</p>; // or use a spinner/loading component
  }

  if (!resort) {
    return <p>Resort not found.</p>;
  }

  localStorage.setItem("resort_id", _id);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Nav />
      <div className="container mx-auto p-6 md:flex md:space-x-10">
        {/* Resort Image */}
        <div className="md:w-1/2">
          <img
            src={resort.imageUrl[0]} // assuming resort.image is a URL
            alt={resort.name}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Resort Details */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-900">{resort.name}</h1>
          <p className="text-gray-500 mt-1">{resort.location}</p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {resort.description}
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Amenities:</h3>
            <ul className="mt-2 space-y-1">
              {resort.facilities.map((amenity, index) => (
                <li key={index} className="text-gray-600 flex items-center">
                  <span className="bg-blue-100 text-blue-600 mr-2 rounded-full p-1 text-sm">
                    ✓
                  </span>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-2xl font-bold text-gray-900">
            ₹{resort.price}
            <span className="text-lg text-gray-600">/ night</span>
          </div>

          <Link to={"/Book-resort"}>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleResortPage;
