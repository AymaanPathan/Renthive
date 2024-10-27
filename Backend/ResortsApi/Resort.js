const Resort = require("../Models/Resorts");

exports.addResort = async (req, res) => {
  try {
    const {
      name,
      description,
      location,
      category,
      price,
      roomTypes,
      facilities,
      activities,
      rating,
      wheelchairAccessible,
      shuttleService,
      teenagersFacilities,
      adultsFacilities,
      seniorsFacilities,
      imageUrl, // Include imageUrl from req.body
    } = req.body;

    const newResort = new Resort({
      name,
      description,
      location,
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      category,
      price,
      roomTypes,
      facilities,
      activities,
      rating,
      wheelchairAccessible,
      shuttleService,
      teenagersFacilities,
      adultsFacilities,
      seniorsFacilities,
      imageUrl, // Add imageUrl here
    });

    // Save the resort to the database
    await newResort.save();

    // Respond with success
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
