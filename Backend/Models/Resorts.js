const mongoose = require("mongoose");
const validator = require("validator");

const ResortSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
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
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  roomTypes: {
    type: [String],
    required: true,
  },
  facilities: {
    type: [String],
    required: true,
  },
  activities: {
    type: [String],
    required: true,
  },
  rating: {
    type: Number,
  },
  wheelchairAccessible: {
    type: Boolean,
    default: false,
  },
  teenagersFacilities: {
    type: [String],
    required: true,
  },
  adultsFacilities: {
    type: [String],
    required: true,
  },
  imageUrl: {
    type: String,
    // required: [true, "image is missing"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  OwnerName: {
    type: String,
    required: [true, "Owner Name is Missing"],
  },
  OwnerExperience: {
    type: Number,
    required: [true, "Owner Exp is Missing"],
  },
  OwnerEmail: {
    type: String,
    required: [true, "Owner Email is Missing"],
    trim: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: `This is not a valid email!`,
    },
  },
  availability: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Resort", ResortSchema);
