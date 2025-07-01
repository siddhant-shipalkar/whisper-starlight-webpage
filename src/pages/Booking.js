import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css'
const Booking = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const placeParam = params.get('place');

  const [form, setForm] = useState({
    name: '',
    email: '',
    destination: placeParam || '',
    from: '',
    to: '',
    adults: 1,
    children: 0,
    message: '',
  });
 
  const destinations = [
    "Albania",
    "Algeria",
    "Argentina",
    "Australia",
    "Austria",
    "Bahamas"
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save booking to localStorage
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(form);
    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert(`Thank you ${form.name}, your booking for ${form.destination} has been submitted!`);

    setForm({
      name: '',
      email: '',
      destination: '',
      from: '',
      to: '',
      adults: 1,
      children: 0,
      message: '',
    });
  };

  return (
    <div className="container py-5 booking-form">
      <h2 className="mb-4 text-center fw-bold">Book Your Trip</h2>
      <form onSubmit={handleSubmit} className="row g-3 shadow p-4 rounded bg-light">
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input type="text" name="name" className="form-control" value={form.name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={form.email} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Destination</label>
          <select
            name="destination"
            className="form-control"
            value={form.destination}
            onChange={handleChange}
            required
          >
            <option value="">Select Destination</option>
            {destinations.map(dest => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">From Date</label>
          <input type="date" name="from" className="form-control" value={form.from} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <label className="form-label">To Date</label>
          <input type="date" name="to" className="form-control" value={form.to} onChange={handleChange} required />
        </div>
        <div className="col-md-3">
          <label className="form-label">Adults</label>
          <input type="number" name="adults" className="form-control" value={form.adults} onChange={handleChange} min="1" required />
        </div>
        <div className="col-md-3">
          <label className="form-label">Children</label>
          <input type="number" name="children" className="form-control" value={form.children} onChange={handleChange} min="0" />
        </div>
        <div className="col-12">
          <label className="form-label">Special Requests</label>
          <textarea name="message" className="form-control" rows="3" value={form.message} onChange={handleChange}></textarea>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-4">Submit Booking</button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
