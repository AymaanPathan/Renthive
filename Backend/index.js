const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Auth = require("./Auth/Auth");
const Resort = require("./Resorts_Api/Resort_Api");
const Property = require("./House_Villa_Api/House_Villa_Api");
const app = express();
const upload = require("./Middleware/multer");
const uploadApi = require("./Upload/Upload");

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
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
//User
Route.post("/register", Auth.Register);
Route.post("/login", Auth.Login);

//Resort
Route.post("/addResort", Resort.addResort);
Route.get("/getAllResorts", Resort.getAllResort);
Route.get("/getResort/:_id", Resort.getResortByName);
// House & Villa
Route.post("/addProperty", Property.addProperty);

// Image Upload
Route.post("/upload", upload.array("image"), uploadApi.uploadImages);

app.use(Route);

const port = 3000;
app.listen(port, () => {
  console.log(`Server Started on port ${port}🟢`);
});
