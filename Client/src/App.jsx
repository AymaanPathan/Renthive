import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Home from "./Pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import AddResort from "./Components/AddRooms/AddResort";

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
        <Route path="/dashboard" element={<AddResort />} />
      </Routes>
    </main>
  );
}
