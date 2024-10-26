const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Auth = require("./Auth/Auth");
const Resort = require("./ResortsApi/Resort");
const app = express();
const upload = require("./Middleware/multer");
const uploadApi = require("./Upload/Upload");

app.use(express.json());
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
      { serverSelectionTimeoutMS: 5000 }
    );
    console.log("Connected To DataBase⭐");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

connectDb();

const importData = async () => {};

importData();

if (process.argv[2] == "--import") {
  importData();
} else if (process.argv[2] == "--delete") {
  deleteData();
}

// Define routes ///

const Route = express.Router();
Route.post("/register", Auth.Register);
Route.post(
  "/addResort",
  upload.single("image"),
  uploadApi.uploadImage,
  Resort.addResort
);

// Image Upload
Route.post("/upload", upload.single("image"), uploadApi.uploadImage);

app.use(Route);

const port = 3000;
app.listen(port, () => {
  console.log(`Server Started on port ${port}🟢`);
});
