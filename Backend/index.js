const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./Models/User");
const Auth = require("./Auth/Auth");
const bcrypt = require("bcryptjs");
const RoomsApi = require("./Room/Room");
const fs = require("fs");

const app = express();

app.use(express.json());
// CORS configuration
app.use(
  cors({
    origin: "*",
  })
);

// Connect to Database
const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aymaanpathan5:Z7a4XGQoIekJLKjQ@cluster0.tzf2e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { serverSelectionTimeoutMS: 5000 } // Adjust timeout as needed
    );
    console.log("Connected To DataBase⭐");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

// Mongoose connection events
mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

// Call the connect function
connectDb();

const importData = async () => {};

importData();

if (process.argv[2] == "--import") {
  importData();
} else if (process.argv[2] == "--delete") {
  deleteData();
}

// Define routes
const Route = express.Router();
Route.post("/register", Auth.Register);
Route.post("/addRoom", RoomsApi.createRoom);

app.use(Route);

const port = 3000;
app.listen(port, () => {
  console.log(`Server Started on port ${port}🟢`);
});
