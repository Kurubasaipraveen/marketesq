import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BookingForm from "./components/BookingForm";
import ConfirmBooking from './components/ConfirmBooking'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/confirm"element={<ConfirmBooking/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
