import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { SidebarWithSearch } from "../SideBar/SidebarWithSearch";

const AddResort = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    category: "",
    price: "",
    roomTypes: [],
    facilities: [],
    activities: [],
    wheelchairAccessible: false,
    shuttleService: false,
    teenagersFacilities: "",
    adultsFacilities: "",
    seniorsFacilities: "",
    longitude: "",
    latitude: "",
  });

  const [facilityInput, setFacilityInput] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle facility addition
  const handleAddFacility = () => {
    if (facilityInput.trim() && !formData.facilities.includes(facilityInput)) {
      setFormData({
        ...formData,
        facilities: [...formData.facilities, facilityInput],
      });
      setFacilityInput(""); // clear input
    }
  };

  // Remove a facility
  const handleRemoveFacility = (facility) => {
    setFormData({
      ...formData,
      facilities: formData.facilities.filter((f) => f !== facility),
    });
  };

  const uploadImage = async () => {
    if (!selectedFile) {
      alert("Please choose an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setImageUrl(response.data.imageUrl);
      console.log("Image uploaded successfully:", response.data.imageUrl);
    } catch (error) {
      console.error(
        "Error uploading image:",
        error.response?.data || error.message
      );
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resortData = {
        ...formData,
        imageUrl,
      };

      const response = await axios.post(
        "http://localhost:3000/addResort",
        resortData
      );
      toast.success(response.data.message || "Resort added successfully!");

      // Reset form fields
      setFormData({
        name: "",
        description: "",
        location: "",
        category: "",
        price: "",
        roomTypes: [],
        facilities: [],
        activities: [],
        wheelchairAccessible: false,
        shuttleService: false,
        teenagersFacilities: "",
        adultsFacilities: "",
        seniorsFacilities: "",
        longitude: "",
        latitude: "",
      });
      setImageUrl("");
      setSelectedFile(null);
    } catch (error) {
      console.error(
        "Error adding resort:",
        error.response?.data || error.message
      );
      toast.error("Failed to add resort. Please try again.");
    }
  };

  return (
    <div className="flex">
      <SidebarWithSearch />
      <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md flex-grow">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Add Resort</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Two inputs in one row */}
          <div className="grid grid-cols-2 gap-4">
            {["name", "location", "category", "price"].map((field) => (
              <div key={field} className="flex flex-col">
                <label className="text-gray-600 font-medium">
                  {field.replace(/([A-Z])/g, " $1")}
                </label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            ))}
          </div>

          {/* Description, Rating, Longitude, and Latitude as single column inputs */}
          {["description", "longitude", "latitude"].map((field) => (
            <div key={field} className="flex flex-col">
              <label className="text-gray-600 font-medium">
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
          ))}

          {/* Facilities input with tags */}
          <div className="flex flex-col">
            <label className="text-gray-600 font-medium">Facilities</label>
            <div className="flex flex-wrap gap-2 mb-2">
              {formData.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                >
                  <span>{facility}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveFacility(facility)}
                    className="text-red-500 hover:text-red-700"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            <input
              type="text"
              value={facilityInput}
              onChange={(e) => setFacilityInput(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Add facility"
            />
            <button
              type="button"
              onClick={handleAddFacility}
              className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            >
              Add Facility
            </button>
          </div>

          <div>
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="border border-gray-300 rounded px-3 py-2"
            />
            <button
              type="button"
              onClick={uploadImage}
              className="mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
            >
              Upload Image
            </button>
            {imageUrl && (
              <div>
                <p>Uploaded Image:</p>
                <img src={imageUrl} alt="Uploaded" />
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <label className="flex items-center text-gray-600 font-medium">
              <input
                type="checkbox"
                name="wheelchairAccessible"
                checked={formData.wheelchairAccessible}
                onChange={handleChange}
                className="mr-2"
              />
              Wheelchair Accessible
            </label>
            <label className="flex items-center text-gray-600 font-medium">
              <input
                type="checkbox"
                name="shuttleService"
                checked={formData.shuttleService}
                onChange={handleChange}
                className="mr-2"
              />
              Shuttle Service
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700"
          >
            Add Resort
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddResort;
