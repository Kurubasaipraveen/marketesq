import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/Header.css';
import Discover from "./Discover";
import Services from "./Services";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Header = () => {
  const [checkIn, setCheckIn] = useState("2024-11-08");
  const [checkOut, setCheckOut] = useState("2024-11-15");
  const [rooms, setRooms] = useState(1);
  const navigate = useNavigate();

  const handleRoomChange = (type) => {
    setRooms((prevRooms) => {
      if (type === "increment") return prevRooms + 1;
      if (type === "decrement" && prevRooms > 1) return prevRooms - 1;
      return prevRooms;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bookingData = { checkIn, checkOut, rooms };

    try {
      const response = await axios.post("http://localhost:5000/bookings", bookingData);
      alert(`Booking stored successfully with ID: ${response.data.id}`);
      navigate('./booking');
    } catch (error) {
      console.error("Error storing booking data:", error);
      alert("Failed to store booking data.");
    }
  };

  return (
    <div>
      <Navbar />
      <header className="header">
        <div className="content-wrapper">
          <div className="header-row">
            <div className="header-content">
              <h1>Work from<br />Ladakh</h1>
              <p>India's first true digital tourism ecosystem</p>
              <div className="social-icons">
                <i className="fab fa-facebook li lifacebook"></i>
                <i className="fab fa-instagram li lifacebook"></i>
              </div>
            </div>
            <div className="image-section">
              <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAfeqvb-Qdq1rxfbeRI7B2T9SFGZD_XNaIX8R4kzQdufL2zFSe" alt="Ladakh" />
            </div>
          </div>
        </div>
        
        <form className="order-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Check-In:</label>
            <input 
              type="date" 
              value={checkIn} 
              onChange={(e) => setCheckIn(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Check-Out:</label>
            <input 
              type="date" 
              value={checkOut} 
              onChange={(e) => setCheckOut(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Rooms:</label>
            <div className="input-icon">
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => handleRoomChange("decrement")}
              >
                <i className="bi bi-dash-circle"></i>
              </button>
              <span>{rooms}</span>
              <button 
                type="button" 
                className="btn btn-outline-secondary" 
                onClick={() => handleRoomChange("increment")}
              >
                <i className="bi bi-plus-circle-fill"></i>
              </button>
            </div>
          </div>
          <button type="submit" className="button1">Book</button>
        </form>
      </header>
      <Discover />
      <Services />
      <Footer />
    </div>
  );
};

export default Header;
