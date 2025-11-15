import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../2-Home/Header';
import Footer from '../2-Home/Footer';
import { 
  FaCheckCircle, 
  FaCalendarAlt, 
  FaClock, 
  FaUsers, 
  FaEnvelope, 
  FaUser,
  FaList,
  FaCalendar,
  FaPrint
} from 'react-icons/fa';
import './Booking.css';

export default function Confirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const bookingData = location.state || {
    fullDate: 'Saturday, October 26, 2024',
    time: '7:30 PM',
    guests: 2,
    table: 'Window Booth',
    contactInfo: {
      fullName: 'Alex Doe',
      emailAddress: 'alexdoe@email.com'
    },
    specialNotes: 'Celebrating an anniversary.'
  };

  // Use confirmation ID from booking data or generate new one
  const generateConfirmationId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '#RTX';
    for (let i = 0; i < 7; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const confirmationId = bookingData.confirmationId || generateConfirmationId();

  // Save booking to localStorage when component mounts
  useEffect(() => {
    if (bookingData && location.state) {
      // Get existing reservations
      const existingReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
      
      // Check if this reservation already exists (prevent duplicates on page refresh)
      const existingReservation = existingReservations.find(
        res => res.confirmationId === confirmationId
      );
      
      if (!existingReservation) {
        // Create new reservation object
        const newReservation = {
          id: Date.now(), // Unique ID based on timestamp
          confirmationId: confirmationId,
          date: bookingData.fullDate || bookingData.date,
          time: bookingData.time,
          guests: bookingData.guests,
          table: bookingData.table,
          name: bookingData.contactInfo?.fullName || 'Guest',
          email: bookingData.contactInfo?.emailAddress || '',
          phone: bookingData.contactInfo?.phoneNumber || '',
          specialNotes: bookingData.specialNotes || '',
          status: 'confirmed',
          createdAt: new Date().toISOString()
        };

        // Add new reservation to the beginning of the array
        existingReservations.unshift(newReservation);
        
        // Save back to localStorage
        localStorage.setItem('reservations', JSON.stringify(existingReservations));
      }
    }
  }, [confirmationId]);

  const maskedEmail = bookingData.contactInfo?.emailAddress
    ? bookingData.contactInfo.emailAddress.charAt(0) + '*****' + bookingData.contactInfo.emailAddress.slice(-9)
    : 'a*****e@email.com';

  return (
    <div className="booking-page">
      <Header />
      <div className="confirmation-container">
        <div className="confirmation-icon">
          <FaCheckCircle />
        </div>
        <h1 className="confirmation-title">Your Reservation is Confirmed!</h1>
        <p className="confirmation-subtitle">
          A confirmation email has been sent to your registered email address with all the details of your booking.
        </p>

        <div className="confirmation-card">
          {/* Restaurant Information */}
          <div className="restaurant-info">
            <h2 className="restaurant-name">The Gourmet Table</h2>
            <p className="restaurant-address">123 Culinary Lane, Foodie City, 90210</p>
            <p className="confirmation-id">Confirmation ID: {confirmationId}</p>
          </div>

          {/* Reservation Details Grid */}
          <div className="reservation-details-grid">
            <div className="reservation-details-column">
              <div className="reservation-detail-item">
                <FaCalendarAlt className="reservation-icon" />
                <div className="reservation-detail-content">
                  <span className="reservation-label">Date</span>
                  <span className="reservation-value">{bookingData.fullDate}</span>
                </div>
              </div>

              <div className="reservation-detail-item">
                <FaUsers className="reservation-icon" />
                <div className="reservation-detail-content">
                  <span className="reservation-label">Guests</span>
                  <span className="reservation-value">{bookingData.guests} people</span>
                </div>
              </div>

              <div className="reservation-detail-item">
                <FaEnvelope className="reservation-icon" />
                <div className="reservation-detail-content">
                  <span className="reservation-label">Contact</span>
                  <span className="reservation-value">{maskedEmail}</span>
                </div>
              </div>
            </div>

            <div className="reservation-details-column">
              <div className="reservation-detail-item">
                <FaClock className="reservation-icon" />
                <div className="reservation-detail-content">
                  <span className="reservation-label">Time</span>
                  <span className="reservation-value">{bookingData.time}</span>
                </div>
              </div>

              <div className="reservation-detail-item">
                <FaUser className="reservation-icon" />
                <div className="reservation-detail-content">
                  <span className="reservation-label">Reserved For</span>
                  <span className="reservation-value">{bookingData.contactInfo?.fullName || 'Alex Doe'}</span>
                </div>
              </div>

              <div className="reservation-detail-item">
                <FaList className="reservation-icon" />
                <div className="reservation-detail-content">
                  <span className="reservation-label">Special Requests</span>
                  <span className="reservation-value">
                    {bookingData.specialNotes || 'Celebrating an anniversary.'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="confirmation-actions">
          <button className="add-calendar-btn">
            <FaCalendar />
            Add to Calendar
          </button>
          <button className="print-btn">
            <FaPrint />
            Print Reservation
          </button>
        </div>

        {/* Policy Text */}
        <p className="confirmation-policy">
          Need to make a change? Please{' '}
          <a href="#contact" className="policy-link">contact us directly</a>.{' '}
          <a href="#policy" className="policy-link">View our cancellation policy</a>.
        </p>

        <p className="confirmation-copyright">
          © 2024 The Gourmet Table. All Rights Reserved.
        </p>
      </div>
      <Footer />
    </div>
  );
}

