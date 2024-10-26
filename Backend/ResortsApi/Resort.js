const Resort = require("../Models/Resorts");

exports.addResort = async (req, res) => {
  try {
    const {
      name,
      location,
      category,
      priceRange,
      amenities,
      rating,
      nearbyAttractions,
      distanceFromCityCenter,
      accessibilityFeatures,
      ageGroupSuitability,
    } = req.body;

    // Ensure the image URL is available
    if (!req.imageUrl) {
      return res.status(400).json({
        message: "Image upload failed, no image URL provided.",
      });
    }

    // Create a new resort with the provided details and uploaded image URL
    const newResort = new Resort({
      name,
      location,
      category,
      priceRange,
      amenities,
      rating,
      nearbyAttractions,
      distanceFromCityCenter,
      accessibilityFeatures,
      ageGroupSuitability,
      imageUrl: req.imageUrl, // Get the image URL from the request
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
