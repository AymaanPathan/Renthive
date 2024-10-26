const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
  roomName: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
  },
  bookedBy: {
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Refers to a User model
      ref: "User",
    },
    bookedAt: {
      type: Date,
      default: Date.now,
    },
  },
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
