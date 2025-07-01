import React, { useEffect, useState } from 'react';
import './BookingHistory.css';

const BookingHistory = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editBooking, setEditBooking] = useState({});
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("bookings")) || [];
      if (!Array.isArray(stored)) {
        setError("Booking data is corrupted or not an array.");
        setData([]);
      } else {
        setData(stored);
      }
    } catch (e) {
      setError("Failed to parse booking data.");
      setData([]);
    }
  }, []);

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditBooking({ ...data[index] });
  };

  const handleEditChange = (e) => {
    setEditBooking({ ...editBooking, [e.target.name]: e.target.value });
  };

  const handleEditSave = (index) => {
    const updated = data.map((b, i) => (i === index ? editBooking : b));
    setData(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
    setEditIndex(null);
    setEditBooking({});
  };

  const handleEditCancel = () => {
    setEditIndex(null);
    setEditBooking({});
  };

  // Filter bookings by search
  const filteredData = data.filter(b =>
    Object.values(b).some(val =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="booking-history-container container py-5">
      <h2 className="mb-4 text-center fw-bold">Booking History</h2>
      <div className="mb-3">
        <div className="search-bar-wrapper">
          <span className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242 1.106a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search bookings..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          /> 
        </div>
      </div>
      {error && <div className="alert alert-danger text-center">{error}</div>}
      {filteredData.length === 0 && !error ? (
        <p className="text-center">No bookings yet.</p>
      ) : !error && (
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Destination</th>
                <th>From</th>
                <th>To</th>
                <th>Adults</th>
                <th>Children</th>
                <th>Actions</th>
                 
              </tr>
            </thead>
            <tbody>
              {filteredData.map((b, i) => (
                <tr key={i}>
                  {editIndex === i ? (
                    <>
                      <td><input name="name" value={editBooking.name} onChange={handleEditChange} className="form-control form-control-sm" /></td>
                      <td><input name="email" value={editBooking.email} onChange={handleEditChange} className="form-control form-control-sm" /></td>
                      <td><input name="destination" value={editBooking.destination} onChange={handleEditChange} className="form-control form-control-sm" /></td>
                      <td><input name="from" value={editBooking.from} onChange={handleEditChange} className="form-control form-control-sm" /></td>
                      <td><input name="to" value={editBooking.to} onChange={handleEditChange} className="form-control form-control-sm" /></td>
                      <td><input name="adults" value={editBooking.adults} onChange={handleEditChange} className="form-control form-control-sm" /></td>
                      <td><input name="children" value={editBooking.children} onChange={handleEditChange} className="form-control form-control-sm" /></td>
                      <td><input name="mobilenumber" value={editBooking.mobilenumber || ''} onChange={handleEditChange} className="form-control form-control-sm" /></td>
                      <td>
                        <div className="d-flex gap-2">
                          <button className="btn btn-success btn-sm" onClick={() => handleEditSave(i)}>Save</button>
                          <button className="btn btn-secondary btn-sm" onClick={handleEditCancel}>Cancel</button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td>{b.name}</td>
                      <td>{b.email}</td>
                      <td>{b.destination}</td>
                      <td>{b.from}</td>
                      <td>{b.to}</td>
                      <td>{b.adults}</td>
                      <td>{b.children}</td>
                      <td>
                        <button className="btn btn-primary btn-sm me-1" onClick={() => handleEdit(i)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(i)}>Delete</button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BookingHistory;
