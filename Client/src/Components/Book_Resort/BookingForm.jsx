import Progress from "../Progress_Bar/Progress";
import { Link } from "react-router-dom";
function BookingForm() {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mx-4">
        <Link to={"/"}>
          <button className="p-2 bg-orange-500 rounded-md text-white">
            Back To home
          </button>
        </Link>
        <p className="text-center">Welcome To Booking Section</p>
        <p>User Info Here:</p>
      </div>
      <div className="p-8">
        <Progress />
      </div>
    </div>
  );
}

export default BookingForm;
