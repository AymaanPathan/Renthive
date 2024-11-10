import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { PageBtnContext } from "../../Context/pageBtnContext";

const Duration = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [duration, setDuration] = useState(0);
  const today = new Date().toISOString().split("T")[0];
  const { handlePage } = useContext(PageBtnContext);

  const handleDays = (from, to) => {
    if (!from || !to) {
      return toast.error("Please Select both dates!");
    }
    const startDate = new Date(from);
    const endDate = new Date(to);
    const differentBetween = endDate - startDate;
    const days = Math.floor(differentBetween / (1000 * 60 * 60 * 24));
    setDuration(days);
  };

  const handleFromDateChange = (e) => {
    const selectedFromDate = e.target.value;
    setFromDate(selectedFromDate);
  };

  const handleToDateChange = (e) => {
    const selectedToDate = e.target.value;
    setToDate(selectedToDate);
  };

  return (
    <div className="rounded-lg w-full max-w-md mx-auto  text-white">
      <h2 className="text-2xl font-semibold mb-6 text-gray-500">
        Select Date Range
      </h2>

      <div className="mb-6">
        <label className="block text-lg text-gray-500 font-medium">From:</label>
        <input
          min={today}
          type="date"
          value={fromDate}
          onChange={handleFromDateChange}
          className="mt-2 p-3 block w-full  rounded-lg border-2 border-transparent focus:ring-2 focus:ring-indigo-300 bg-white text-gray-800 shadow-md"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-500">To:</label>
        <input
          min={today}
          type="date"
          value={toDate}
          onChange={handleToDateChange}
          className="mt-2 p-3 block w-full rounded-lg border-2 border-transparent focus:ring-2 focus:ring-indigo-300 bg-white text-gray-800 shadow-md"
        />
      </div>

      <div className="text-lg text-gray-500 font-semibold mb-4">
        {duration > 0
          ? `Total days: ${duration}`
          : "Select both dates to see total Duration"}
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => handleDays(fromDate, toDate)}
          className="w-full bg-[#F88164] active:scale-95 text-white py-3 rounded-lg shadow-lg ac"
        >
          See Duration
        </button>
        <button
          onClick={handlePage}
          className="w-full hover:bg-slate-400 hover:text-white ease-in-out duration-500 active:scale-95 text-gray-500 py-3 rounded-lg shadow-lg ac"
        >
          Next step
        </button>
      </div>
    </div>
  );
};

export default Duration;
