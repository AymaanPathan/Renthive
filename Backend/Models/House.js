const mongoose = require("mongoose");
const validator = require("validator");

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
  rating: {
    type: Number,
  },
  description: {
    type: String,
    trim: true,
  },
  images: {
    type: [String],
    required: [true, "image is missing"],
  },
  availability: {
    type: Boolean,
    default: true,
  },
  features: {
    type: [String],
    default: [],
  },
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  OwnerName: {
    type: String,
    required: true,
  },
  OwnerExperience: {
    type: Number,
    required: true,
  },
  OwnerEmail: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: `This is not a valid email!`,
    },
  },
});

const Property = mongoose.model("Property", House_Villa_Schema);

module.exports = Property;
