const Property = require("../Models/House");

exports.addProperty = async (req, res) => {
  try {
    const {
      type,
      title,
      location,
      pricePerNight,
      bedrooms,
      bathrooms,
      maxGuests,
      amenities,
      description,
      images,
      availability,
      features,
      OwnerName,
      OwnerExperience,
      OwnerEmail,
      longitude,
      rating,
      latitude,
    } = req.body;

    const newProperty = new Property({
      type,
      title,
      location,
      pricePerNight,
      bedrooms,
      bathrooms,
      maxGuests,
      amenities,
      description,
      images,
      availability,
      features,
      rating,
      OwnerName,
      OwnerExperience,
      OwnerEmail,
      longitude,
      latitude,
    });

    await newProperty.save();

    res.status(201).json({
      message: "Property added successfully!",
      property: newProperty,
    });
  } catch (error) {
    console.error("Error adding property:", error);
    res.status(500).json({
      message: "Failed to add property.",
      error: error.message,
    });
  }
};
