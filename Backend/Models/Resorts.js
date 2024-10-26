const mongoose = require("mongoose");

const ResortSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  location: {
    city: String,
    state: String,
    coordinates: {
      latitude: Number,
      longitude: Number,
    },
  },
  category: {
    type: String,
    enum: [
      "Hill Resort",
      "Beach Resort",
      "Luxury Resort",
      "Eco-Friendly Resort",
      "Wellness Resort",
      "Heritage Resort",
      "Family Resort",
      "Desert Resort",
      "Forest Resort",
      "Adventure Resort",
    ],
    // required: true,
  },
  priceRange: {
    min: Number,
    max: Number,
  },
  amenities: {
    roomTypes: [String],
    facilities: [String],
    activities: [String],
  },
  rating: {
    averageRating: { type: Number, default: 0 },
    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number, required: true },
        comment: String,
      },
    ],
  },
  nearbyAttractions: [String],
  accessibilityFeatures: {
    wheelchairAccessible: { type: Boolean, default: false },
    shuttleService: { type: Boolean, default: false },
  },
  ageGroupSuitability: {
    teenagers: {
      suitable: { type: Boolean, default: false },
      description: String,
      activities: [String],
    },
    adults: {
      suitable: { type: Boolean, default: false },
      description: String,
      activities: [String],
    },
    seniors: {
      suitable: { type: Boolean, default: false },
      description: String,
      activities: [String],
    },
  },
  imageUrl: {
    type: String, // This field will hold the URL of the uploaded image
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Resort", ResortSchema);
