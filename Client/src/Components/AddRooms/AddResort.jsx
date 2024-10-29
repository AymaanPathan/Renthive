import { useState } from "react";
import { SidebarWithSearch } from "../SideBar/SidebarWithSearch";
import toast from "react-hot-toast";
import cross from "../../assets/x-button.png";

function AddResort() {
  const [resortName, setResortName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [longitude, setLongiTude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [roomTypes, setRoomTypes] = useState("");
  let [facilities, setFacilities] = useState([]);
  let [activities, setActivities] = useState([]);
  const [wheelchairAccessible, setWheelchairAccessible] = useState(false);
  const [shuttleService, setShuttleService] = useState(false);
  let [teenagersFacilities, setTeenagersFacilities] = useState([]);
  let [adultsFacilities, setAdultsFacilities] = useState([]);

  const [imageUrl, setImageUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // all array Inputs
  const [facilitiesInput, setFacilitiesInput] = useState("");
  const [activitiesInput, setActivitiesInput] = useState("");
  const [teenagersFacilitiesInput, setTeenagersFacilitiesInput] = useState("");
  const [adultsFacilitiesInput, setAdultsFacilitiesInput] = useState("");

  console.log(adultsFacilities);

  // Adding Array Values in Facilities
  const handleFacilities = (e) => {
    if (facilitiesInput.trim() === "") {
      return;
    }
    if (e.key === "Enter") {
      setFacilities((prev) => [...prev, facilitiesInput]);
      setFacilitiesInput("");
    }
  };

  const handleActivities = (e) => {
    if (activitiesInput.trim() === "") {
      return;
    }
    if (e.key === "Enter") {
      setActivities((prev) => [...prev, activitiesInput]);
      setActivitiesInput("");
    }
  };

  const handleTeenagefacilities = (e) => {
    if (teenagersFacilitiesInput.trim() === "") {
      return;
    }
    if (e.key === "Enter") {
      setTeenagersFacilities((prev) => [...prev, teenagersFacilitiesInput]);
      setTeenagersFacilitiesInput("");
    }
  };

  const handleAdultFacilities = (e) => {
    if (adultsFacilitiesInput.trim() === "") {
      return;
    }
    if (e.key === "Enter") {
      setAdultsFacilities((prev) => [...prev, adultsFacilitiesInput]);
      setAdultsFacilitiesInput("");
    }
  };

  // Upload Image
  const uploadImage = async () => {
    toast.loading("Uploading File Please Wait...");
    if (!selectedFile) {
      toast.dismiss();
      return toast.error("Please Upload Resort Image ");
    }
    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        toast.dismiss();
        toast.success("File Uploaded Successfully!");
        setImageUrl(data.imageUrl);
      } else {
        toast.dismiss();
        toast.error("Please Try Again Later");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddResort = async () => {
    if (
      !resortName ||
      !description ||
      !location ||
      !latitude ||
      !longitude ||
      !category ||
      !price ||
      !roomTypes ||
      !activities ||
      !teenagersFacilities ||
      !adultsFacilities ||
      !imageUrl
    ) {
      return toast.error("All Inputs are required to Add resort");
    }
    toast.loading("Please Wait Adding Resort in Database...");
    try {
      const response = await fetch("http://localhost:3000/addResort", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resortName,
          description: description,
          location: location,
          longitude: longitude,
          latitude: latitude,
          category: category,
          price: price,
          roomTypes: roomTypes,
          facilities: facilities,
          activities: activities,
          wheelchairAccessible: wheelchairAccessible,
          shuttleService: shuttleService,
          teenagersFacilities: teenagersFacilities,
          adultsFacilities: adultsFacilities,

          imageUrl: imageUrl,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.dismiss();
        toast.success("Resort Added To Database");
      } else {
        toast.dismiss();
        toast.error("Please Verify all Input again");
      }
      console.log(data);
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error("please Try Again Later!");
    }
  };

  // Removing array values
  const removefacility = (e) => {
    if (facilities.includes(e.target.alt)) {
      setFacilities(facilities.filter((item) => item !== e.target.alt));
    }
  };
  const removeActivity = (e) => {
    if (activities.includes(e.target.alt)) {
      setActivities(activities.filter((item) => item !== e.target.alt));
    }
  };
  const removeTeenagersFacilities = (e) => {
    if (teenagersFacilities.includes(e.target.alt)) {
      setTeenagersFacilities(
        teenagersFacilities.filter((item) => item !== e.target.alt)
      );
    }
  };

  const removeAdultFacilities = (e) => {
    if (adultsFacilities.includes(e.target.alt)) {
      setAdultsFacilities(
        adultsFacilities.filter((item) => item !== e.target.alt)
      );
    }
  };

  return (
    <div className="flex gap-4 justify-between select-none h-[78rem]">
      <SidebarWithSearch />
      <div className="bg-[#FFFFFF] w-full h-24">
        <h2 className="text-gray-600 text-center text-2xl mt-2">Dashboard</h2>
        <div className="bg-[rgb(247,247,247)] w-[99%] rounded-xl mt-6  py-3">
          <p className="ml-4 text-center">Resort Details</p>
        </div>
        <div className="bg-white mt-4 ml-2 space-y-7 px-4">
          <div className="Resort-name grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Name</p>
              <span className="text-xs text-[#CDD1D7]">
                Enter a unique name for the Resort
              </span>
            </div>
            <div>
              <input
                value={resortName}
                onChange={(e) => setResortName(e.target.value)}
                type="text"
                placeholder="Resort Name Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-description grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Description</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a brief description of the Resort
              </span>
            </div>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Resort Description Here"
                className="bg-[#F2F4F7]  h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-Location grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Location</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a brief Location of the Resort
              </span>
            </div>
            <div>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                placeholder="Resort Location Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-longitude grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Longitude</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Longitude of the Resort
              </span>
            </div>
            <div>
              <input
                value={longitude}
                onChange={(e) => setLongiTude(e.target.value)}
                type="Number"
                placeholder="Resort longitude Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-latitude grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Latitude</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Latitude of the Resort
              </span>
            </div>
            <div>
              <input
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                type="Number"
                placeholder="Resort longitude Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-category grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Category</p>
              <span className="text-xs text-[#CDD1D7]">
                Select a category for the Resort
              </span>
            </div>
            <div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Hill Resort">Hill Resort</option>
                <option value="Beach Resort">Beach Resort</option>
                <option value="Luxury Resort">Luxury Resort</option>
                <option value="Eco-Friendly Resort">Eco-Friendly Resort</option>
                <option value="Wellness Resort">Wellness Resort</option>
                <option value="Heritage Resort">Heritage Resort</option>
                <option value="Family Resort">Family Resort</option>
                <option value="Desert Resort">Desert Resort</option>
                <option value="Forest Resort">Forest Resort</option>
                <option value="Adventure Resort">Adventure Resort</option>
              </select>
            </div>
          </div>
          <div className="Resort-price grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Price</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a price of the Resort
              </span>
            </div>
            <div>
              <input
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                type="Number"
                placeholder="Resort price Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-roomTypes grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Room Types</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Room Types of the Resort
              </span>
            </div>
            <div>
              <input
                value={roomTypes}
                onChange={(e) => setRoomTypes(e.target.value)}
                type="text"
                placeholder="Resort Room Types Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-facilities grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort facilities</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Room facilities of the Resort
              </span>
            </div>
            <div>
              <div className="flex justify-start gap-2 mb-2">
                {facilities.map((item, index) => (
                  <div
                    key={index}
                    className="border flex justify-between items-center gap-3 px-2 py-2 text-black rounded-md"
                  >
                    <p>{item}</p>
                    <img
                      onClick={(e) => removefacility(e)}
                      src={cross}
                      alt={item}
                      className="w-3 h-3 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <input
                value={facilitiesInput}
                onChange={(e) => setFacilitiesInput(e.target.value)}
                onKeyDown={handleFacilities}
                type="text"
                placeholder="Resort facilities Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-activities grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort activities</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Room activities of the Resort
              </span>
            </div>
            <div>
              <div className="flex justify-start gap-2 mb-2">
                {activities.map((item, index) => (
                  <div
                    key={index}
                    className="border flex justify-between items-center gap-3 px-2 py-2 text-black rounded-md"
                  >
                    <p>{item}</p>
                    <img
                      onClick={(e) => removeActivity(e)}
                      src={cross}
                      alt={item}
                      className="w-3 h-3 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <input
                value={activitiesInput}
                onChange={(e) => setActivitiesInput(e.target.value)}
                onKeyDown={handleActivities}
                type="text"
                placeholder="Resort activities Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-wheelchairAccessible grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Wheelchair Accessible</p>
              <span className="text-xs text-[#CDD1D7]">
                Is the resort wheelchair accessible?
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="wheelchairAccessible" className="text-gray-700">
                Accessible
              </label>
              <input
                id="wheelchairAccessible"
                checked={wheelchairAccessible}
                onChange={() => setWheelchairAccessible((prev) => !prev)}
                type="checkbox"
                className="cursor-pointer h-5 w-5 rounded-md outline-none"
              />
            </div>
          </div>
          <div className="Resort-shuttleService grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Shuttle Service</p>
              <span className="text-xs text-[#CDD1D7]">
                Does the resort offer shuttle service?
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="shuttleService" className="text-gray-700">
                Available
              </label>
              <input
                id="shuttleService"
                checked={shuttleService}
                onChange={() => setShuttleService((prev) => !prev)}
                type="checkbox"
                className="cursor-pointer h-5 w-5 rounded-md outline-none"
              />
            </div>
          </div>
          <div className="Resort-teenagersFacilities grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Teenagers Facilities</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Room teenagers Facilities of the Resort
              </span>
            </div>
            <div>
              <div className="flex justify-start gap-2 mb-2">
                {teenagersFacilities.map((item, index) => (
                  <div
                    key={index}
                    className="border flex justify-between items-center gap-3 px-2 py-2 text-black rounded-md"
                  >
                    <p>{item}</p>
                    <img
                      onClick={(e) => removeTeenagersFacilities(e)}
                      src={cross}
                      alt={item}
                      className="w-3 h-3 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <input
                value={teenagersFacilitiesInput}
                onChange={(e) => setTeenagersFacilitiesInput(e.target.value)}
                type="text"
                onKeyDown={handleTeenagefacilities}
                placeholder="Resort teenagers Facilities Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-adultsFacilities grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Adults Facilities</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Room Adults Facilities of the Resort
              </span>
            </div>
            <div>
              <div className="flex justify-start gap-2 mb-2">
                {adultsFacilities.map((item, index) => (
                  <div
                    key={index}
                    className="border flex justify-between items-center gap-3 px-2 py-2 text-black rounded-md"
                  >
                    <p>{item}</p>
                    <img
                      onClick={(e) => removeAdultFacilities(e)}
                      src={cross}
                      alt={item}
                      className="w-3 h-3 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <input
                value={adultsFacilitiesInput}
                onChange={(e) => setAdultsFacilitiesInput(e.target.value)}
                type="text"
                onKeyDown={handleAdultFacilities}
                placeholder="Resort Adults Facilities Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>

          <div className="Resort-imageUpload grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Upload Resort Image</p>
              <span className="text-xs text-[#CDD1D7]">
                Upload an image for the resort
              </span>
            </div>
            <div className="flex flex-col">
              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
              <button
                onClick={uploadImage}
                className="mt-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Upload Image
              </button>
            </div>
          </div>

          <button
            className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
            onClick={handleAddResort}
          >
            Submit Resort Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddResort;