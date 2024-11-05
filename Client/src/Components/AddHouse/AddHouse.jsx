import { useState } from "react";
import { SidebarWithSearch } from "../SideBar/SidebarWithSearch";
import cross from "../../assets/x-button.png";
import toast from "react-hot-toast";

function AddHouse() {
  const [type, setType] = useState("House");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [pricePerNight, setPricePerNight] = useState(null);
  const [noOfBedrooms, setNoOfBedrooms] = useState(null);
  const [description, setDescription] = useState("");
  const [noOfBathrooms, setNoOfBathrooms] = useState(null);
  const [maxGeust, setMaxGuest] = useState(null);
  let [amenities, setAmenities] = useState([]);
  let [features, setFeatures] = useState([]);
  const [availability, setAvailability] = useState(true);
  const [longitude, setLongiTude] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [propertyOwner, setPropertyOwner] = useState("");
  const [ownerExp, setOwnerExp] = useState(null);
  const [ownerEmail, setOwnerEmail] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  //Array inputs
  const [amenitiesInput, setAmenitiesInput] = useState("");
  const [featuresInput, setFeatureInput] = useState("");

  const handleAmenities = (e) => {
    if (amenitiesInput.trim() === "") {
      return;
    }
    if (e.key === "Enter") {
      setAmenities((prev) => [...prev, amenitiesInput]);
      setAmenitiesInput("");
    }
  };

  const removeAmenities = (e) => {
    if (amenities.includes(e.target.alt)) {
      setAmenities(amenities.filter((item) => item !== e.target.alt));
    }
  };

  const handleFeatures = (e) => {
    if (featuresInput.trim() === "") {
      return;
    }
    if (e.key === "Enter") {
      setFeatures((prev) => [...prev, featuresInput]);
      setFeatureInput("");
    }
  };
  const removeFeatures = (e) => {
    if (features.includes(e.target.alt)) {
      setFeatures(features.filter((item) => item !== e.target.alt));
    }
  };

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
      toast.dismiss();
      toast.error("Internal Server Error For Image Uploading");
      console.log(error);
    }
  };

  const handleAddProperty = async () => {
    if (
      !type ||
      !title ||
      !location ||
      !description ||
      !latitude ||
      !longitude ||
      !pricePerNight ||
      !noOfBedrooms ||
      !noOfBathrooms ||
      !maxGeust ||
      !amenities ||
      !description ||
      !availability ||
      !propertyOwner ||
      !ownerExp ||
      !ownerEmail
    ) {
      return toast.error("All Inputs are required to Add Property");
    }
    if (!imageUrl) {
      return toast.error("Please Upload Property Image");
    }
    toast.loading("Please Wait Adding Resort in Database...");
    try {
      const response = await fetch("http://localhost:3000/addProperty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: type,
          title: title,
          location: location,
          longitude: longitude,
          latitude: latitude,
          pricePerNight: pricePerNight,
          bedrooms: noOfBedrooms,
          bathrooms: noOfBathrooms,
          maxGuests: maxGeust,
          amenities: amenities,
          description: description,
          images: imageUrl,
          availability: availability,
          features: features,
          OwnerName: propertyOwner,
          OwnerExperience: ownerExp,
          OwnerEmail: ownerEmail,
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
  console.log(imageUrl);

  return (
    <div className="flex gap-4 justify-between select-none h-[78rem]">
      <SidebarWithSearch />
      <div className="bg-[#FFFFFF] w-full h-24">
        <h2 className="text-gray-600 text-center text-2xl mt-2">Dashboard</h2>
        <div className="bg-[rgb(247,247,247)] w-[99%] rounded-xl mt-6  py-3">
          <p className="ml-4 text-center">Property Details</p>
        </div>
        <div className="bg-white mt-4 ml-2 space-y-7 px-4">
          <div className="Property Type grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Resort Name</p>
              <span className="text-xs text-[#CDD1D7]">
                Provide a Type Of Property By Selecting
              </span>
            </div>
            <div>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="bg-[#F2F4F7] cursor-pointer h-10 px-4 rounded-md outline-none w-full"
              >
                <option value="House">House</option>
                <option value="Villa">Villa</option>
              </select>
            </div>
          </div>
          <div className="Property-name grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Property Name</p>
              <span className="text-xs text-[#CDD1D7]">
                Enter a unique name for the Property
              </span>
            </div>
            <div>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Property Name Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Property-Location grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Property Location</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a brief Location of the Property
              </span>
            </div>
            <div>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                placeholder="Property Location Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Property-PricePerNight grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Property Price</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Price of the Property
              </span>
            </div>
            <div>
              <input
                value={pricePerNight}
                onChange={(e) => setPricePerNight(e.target.value)}
                type="Number"
                placeholder="Property Price Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Property-Bedrooms grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">No. Of Bedrooms</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Number of Bedrooms For Property
              </span>
            </div>
            <div>
              <input
                value={noOfBedrooms}
                onChange={(e) => setNoOfBedrooms(e.target.value)}
                type="Number"
                placeholder="No. Of  Bedrooms Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Property-Bathrooms grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">No. Of Bathrooms</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Number of Bathrooms For Property
              </span>
            </div>
            <div>
              <input
                value={noOfBathrooms}
                onChange={(e) => setNoOfBathrooms(e.target.value)}
                type="Number"
                placeholder="No. Bathrooms Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Max-Guest-Allowed grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Max Guest Allowed</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Max Guest Allowed For Property
              </span>
            </div>
            <div>
              <input
                value={maxGeust}
                onChange={(e) => setMaxGuest(e.target.value)}
                type="Number"
                placeholder="No. Of Max Guest Allowed Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="amenities grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Property Amenities</p>
              <span className="text-xs text-[#CDD1D7]">
                Add Property Amenities
              </span>
            </div>
            <div>
              <div className="flex justify-start gap-2 mb-2">
                {amenities.map((item, index) => (
                  <div
                    key={index}
                    className="border flex justify-between items-center gap-3 px-2 py-2 text-black rounded-md"
                  >
                    <p>{item}</p>
                    <img
                      onClick={(e) => removeAmenities(e)}
                      src={cross}
                      alt={item}
                      className="w-3 h-3 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <input
                onKeyDown={handleAmenities}
                value={amenitiesInput}
                onChange={(e) => setAmenitiesInput(e.target.value)}
                type="text"
                placeholder="Add Property Amenities Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>

          <div className="Property-description grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Property Description</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a brief description of the Property
              </span>
            </div>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Property Description Here"
                className="bg-[#F2F4F7]  h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Property-availability grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Property Availability</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a availability of the Property
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="Availability" className="text-gray-700">
                Yes
              </label>
              <input
                id="Availability"
                checked={availability}
                onChange={() => setAvailability((prev) => !prev)}
                type="checkbox"
                className="cursor-pointer h-5 w-5 rounded-md outline-none"
              />
            </div>
          </div>
          <div className="Features grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Property Features</p>
              <span className="text-xs text-[#CDD1D7]">
                Add Property Features
              </span>
            </div>
            <div>
              <div className="flex justify-start gap-2 mb-2">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="border flex justify-between items-center gap-3 px-2 py-2 text-black rounded-md"
                  >
                    <p>{item}</p>
                    <img
                      onClick={(e) => removeFeatures(e)}
                      src={cross}
                      alt={item}
                      className="w-3 h-3 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <input
                onKeyDown={handleFeatures}
                value={featuresInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                type="text"
                placeholder="Add Property Features Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Property-longitude grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Property Longitude</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Longitude of the Property
              </span>
            </div>
            <div>
              <input
                value={longitude}
                onChange={(e) => setLongiTude(e.target.value)}
                type="Number"
                placeholder="Property longitude Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Property-latitude grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Property Latitude</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Latitude of the Property
              </span>
            </div>
            <div>
              <input
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                type="Number"
                placeholder="Property Latitude Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Owner Name grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Owner Name</p>
              <span className="text-xs text-[#CDD1D7]">
                Provide a Owner Name Of Property
              </span>
            </div>
            <div>
              <input
                value={propertyOwner}
                onChange={(e) => setPropertyOwner(e.target.value)}
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
                type="text"
                placeholder="Enter Property Owner Here"
              />
            </div>
          </div>
          <div className="Owner-Exp grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Owner Experience</p>
              <span className="text-xs text-[#CDD1D7]">
                Add a Owner Experience.
              </span>
            </div>
            <div>
              <input
                value={ownerExp}
                onChange={(e) => setOwnerExp(e.target.value)}
                type="Number"
                placeholder="Property Owner Experience Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Owner-Email grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Owner Email</p>
              <span className="text-xs text-[#CDD1D7]">Add a Owner Email.</span>
            </div>
            <div>
              <input
                value={ownerEmail}
                onChange={(e) => setOwnerEmail(e.target.value)}
                type="email"
                placeholder="Property Owner Email Here"
                className="bg-[#F2F4F7] h-10 px-4 rounded-md outline-none w-full"
              />
            </div>
          </div>
          <div className="Resort-imageUpload grid grid-cols-2 items-center gap-4">
            <div>
              <p className="font-semibold">Upload Property Image</p>
              <span className="text-xs text-[#CDD1D7]">
                Upload an image for the Property
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
        </div>
        <button
          className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          onClick={handleAddProperty}
        >
          Submit Resort Details
        </button>
      </div>
    </div>
  );
}
export default AddHouse;
