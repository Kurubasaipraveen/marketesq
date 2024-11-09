import React, { useEffect, useState } from "react";
import "../styles/ConfirmBooking.css"; 
import Navbar from "./Navbar";
import Footer from "./Footer";
const ConfirmBooking = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await fetch("");
        const data = await response.json();
        console.log("Fetched Booking Data:", data);
        setBooking(data[0]); 
      } catch (error) {
        console.error("Error fetching booking confirmation:", error);
      }
    };

    fetchBooking();
  }, []);

  if (!booking) {
    return <p>Loading confirmation details...</p>;
  }

  return (
    <div>
        <Navbar/>
    <div className="confirmation-container">
      <div className="header">
        <div className="user-details">
          <h3>{booking.name || "N/A"}</h3>
          <p> {booking.phone || "N/A"}</p>
          <p> {booking.email || "N/A"}</p>
          <p>
            {booking.adults || 0} Adults and {booking.children || 0} Children
          </p>
        </div>
        <div className="order-status">
          <p>Order Complete</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91_CeQ5sVGu9pmbfeNdaBJjOK3N1bMiZBBw&s"/>
          <a href="/contact">Have questions? Contact us</a>
        </div>
      </div>
      <div className="booking-details">
        <div className="details">
          <h4>Check-In</h4>
          <p>{booking.checkIn ? new Date(booking.checkIn).toLocaleDateString() : "N/A"}</p>
        </div>
        <div className="details">
          <h4>Check-Out</h4>
          <p>{booking.checkOut ? new Date(booking.checkOut).toLocaleDateString() : "N/A"}</p>
        </div>
        <div className="details">
          <h4>Rooms</h4>
          <p>{booking.rooms || "N/A"}</p>
        </div>
        <div className="price">
          <button>₹ {booking.price || "12,430"}</button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ConfirmBooking;
