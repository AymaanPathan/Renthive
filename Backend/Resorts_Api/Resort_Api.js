const Resort = require("../Models/Resorts");

exports.addResort = async (req, res) => {
  try {
    const {
      name,
      description,
      location,
      longitude,
      latitude,
      category,
      price,
      roomTypes,
      facilities,
      activities,
      rating,
      wheelchairAccessible,
      teenagersFacilities,
      adultsFacilities,
      imageUrl,
      availability,
      OwnerName,
      OwnerExperience,
      OwnerEmail,
    } = req.body;

    const newResort = new Resort({
      name,
      description,
      location,
      longitude,
      latitude,
      category,
      price,
      roomTypes,
      facilities,
      activities,
      rating,
      wheelchairAccessible,
      teenagersFacilities,
      adultsFacilities,
      imageUrl,
      availability,
      OwnerName,
      OwnerExperience,
      OwnerEmail,
    });

    await newResort.save();

    res.status(201).json({
      message: "Resort added successfully!",
      resort: newResort,
    });
  } catch (error) {
    console.error("Error adding resort:", error);
    res.status(500).json({
      message: "Failed to add resort.",
      error: error.message,
    });
  }
};

exports.getAllResort = async (req, res) => {
  try {
    const getResorts = await Resort.find();
    if (!getResorts) {
      return res.status(400).json({
        Status: "Failed",
        Message: "No Data Found",
      });
    }
    res.status(200).json({
      Status: "Success",
      Length: getResorts.length,
      Data: getResorts,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "An error occurred while retrieving resorts",
      error: error.message,
    });
  }
};
