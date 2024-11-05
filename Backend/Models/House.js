const mongoose = require("mongoose");

const House_Villa_Schema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["House", "Villa"],
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
    min: 1,
  },
  bathrooms: {
    type: Number,
    required: true,
    min: 1,
  },
  maxGuests: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    trim: true,
  },
  images: {
    type: [String],
  },
  availability: {
    type: Boolean,
    default: true,
  },
  features: {
    pool: {
      type: Boolean,
      default: false,
    },
    garden: {
      type: Boolean,
      default: false,
    },
    parking: {
      type: Boolean,
      default: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Property = mongoose.model("Property", House_Villa_Schema);

module.exports = Property;
