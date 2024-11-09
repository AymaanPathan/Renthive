import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import AddResort from "./Components/AddRooms/AddResort";
import AddHouse from "./Components/AddHouse/AddHouse";
import AllProperty from "./Components/PropertyListing/AllProperty";
import SingleResortPage from "./Components/Single_Resort/SingleResort";
import BookingForm from "./Components/Book_Resort/BookingMain/BookingForm";

export default function App() {
  return (
    <main>
      <Toaster position="bottom-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard/addResort" element={<AddResort />} />
        <Route path="/dashboard/addHouse" element={<AddHouse />} />
        <Route path="/All-Property" element={<AllProperty />} />
        <Route path="/getResort/:_id" element={<SingleResortPage />} />
        <Route path="/Book-resort" element={<BookingForm />} />
      </Routes>
    </main>
  );
}
