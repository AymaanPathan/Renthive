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
