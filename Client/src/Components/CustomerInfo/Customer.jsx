import { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateFrom: "",
    dateTo: "",
    adults: 1,
    kids: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate & send data to backend
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add form inputs and bind to handleChange */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        required
      />
      <input
        type="date"
        name="dateFrom"
        value={formData.dateFrom}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dateTo"
        value={formData.dateTo}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="adults"
        value={formData.adults}
        onChange={handleChange}
        min="1"
        required
      />
      <input
        type="number"
        name="kids"
        value={formData.kids}
        onChange={handleChange}
        min="0"
        required
      />
      <button type="submit">Proceed to Payment</button>
    </form>
  );
}
export default BookingForm;
