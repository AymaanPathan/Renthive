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
