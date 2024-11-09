import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BookingForm.css"; // Import CSS
import Navbar from "./Navbar";
import Footer from "./Footer";

const BookingForm = () => {
  const navigate = useNavigate(); // For navigation
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adults: 1,
    children: 0,
    checkIn: "",
    checkOut: "",
    rooms: 1,
  });

  const [bookings, setBookings] = useState([]);

  // Fetch bookings from the API
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:5000/bookings");
        const data = await response.json();
        setBookings(data);

        if (data.length > 0) {
          const latestBooking = data[0];
          setFormData({
            name: latestBooking.name || "",
            email: latestBooking.email || "",
            phone: latestBooking.phone || "",
            adults: latestBooking.adults || 1,
            children: latestBooking.children || 0,
            checkIn: latestBooking.checkIn || "",
            checkOut: latestBooking.checkOut || "",
            rooms: latestBooking.rooms || 1,
          });
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoomChange = (increment) => {
    setFormData((prev) => ({
      ...prev,
      rooms: Math.max(1, prev.rooms + increment),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting booking:", formData);
  
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      console.log("Response status:", response.status);
      console.log("Response message:", response.statusText);
  
      if (response.ok) {
        const newBooking = await response.json();
        console.log("Booking confirmed:", newBooking);
        navigate("/confirm", { state: { booking: newBooking } });
      } else {
        console.error("Failed to save the  booking:", response.statusText);
        alert("saving the booking not working");
      }
    } catch (error) {
      console.error("Error during fetch data:", error);
      alert("An unexpected error on occurred. Please try again.");
    }
  };
  
  
  

  return (
    <div>
      <Navbar />
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="info-grid">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="adults"
            placeholder="Adults"
            value={formData.adults}
            onChange={handleChange}
          />
          <input
            type="number"
            name="children"
            placeholder="Children"
            value={formData.children}
            onChange={handleChange}
          />
        </div>
        <div className="date-grid">
          <label>
            Check-In
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Check-Out
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
            />
          </label>
          <label className="room-control">
            Rooms
            <div className="room-buttons">
              <button
                type="button"
                onClick={() => handleRoomChange(-1)}
                className="btn btn-outline-secondary"
              >
                <i className="bi bi-dash"></i>
              </button>
              <span>{formData.rooms}</span>
              <button
                type="button"
                onClick={() => handleRoomChange(1)}
                className="btn btn-outline-secondary"
              >
                <i className="bi bi-plus"></i>
              </button>
            </div>
          </label>
        </div>
        <button type="submit" className="submit-button">
          ₹12,430 <span>→</span>
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default BookingForm;
