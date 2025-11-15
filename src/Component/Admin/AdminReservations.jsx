import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaUsers, FaMapMarkerAlt, FaTrash, FaSearch } from 'react-icons/fa';
import AdminLayout from './AdminLayout';
import './Admin.css';

export default function AdminReservations() {
  const [reservations, setReservations] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadReservations();
    // Refresh every 5 seconds to get new reservations
    const interval = setInterval(loadReservations, 5000);
    return () => clearInterval(interval);
  }, []);

  const loadReservations = () => {
    const savedReservations = JSON.parse(localStorage.getItem('reservations') || '[]');
    // Sort by date (newest first)
    const sorted = savedReservations.sort((a, b) => {
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    });
    setReservations(sorted);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this reservation?')) {
      const updatedReservations = reservations.filter(res => res.id !== id);
      localStorage.setItem('reservations', JSON.stringify(updatedReservations));
      setReservations(updatedReservations);
    }
  };

  const filteredReservations = reservations.filter(reservation =>
    reservation.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.confirmationId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.date?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.table?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="admin-content">
        <div className="admin-header">
          <div>
            <h1 className="admin-title">Reservations</h1>
            <p className="admin-description">View and manage all restaurant reservations.</p>
          </div>
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search reservations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="reservations-table">
          <div className="table-header">
            <div className="table-cell">Confirmation ID</div>
            <div className="table-cell">Date & Time</div>
            <div className="table-cell">Guest Name</div>
            <div className="table-cell">Guests</div>
            <div className="table-cell">Table</div>
            <div className="table-cell">Status</div>
            <div className="table-cell">Actions</div>
          </div>

          {filteredReservations.length === 0 ? (
            <div className="no-reservations">
              <p>No reservations found.</p>
            </div>
          ) : (
            filteredReservations.map((reservation) => (
              <div key={reservation.id} className="table-row">
                <div className="table-cell">
                  <span className="confirmation-id">{reservation.confirmationId}</span>
                </div>
                <div className="table-cell">
                  <div className="date-time-info">
                    <FaCalendarAlt className="info-icon-small" />
                    <span>{reservation.date}</span>
                  </div>
                  <div className="date-time-info">
                    <FaClock className="info-icon-small" />
                    <span>{reservation.time}</span>
                  </div>
                </div>
                <div className="table-cell">
                  <strong>{reservation.name || 'Guest'}</strong>
                </div>
                <div className="table-cell">
                  <FaUsers className="info-icon-small" />
                  {reservation.guests} {reservation.guests === 1 ? 'Guest' : 'Guests'}
                </div>
                <div className="table-cell">
                  <FaMapMarkerAlt className="info-icon-small" />
                  {reservation.table}
                </div>
                <div className="table-cell">
                  <span className={`status-badge ${reservation.status || 'confirmed'}`}>
                    {reservation.status ? reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1) : 'Confirmed'}
                  </span>
                </div>
                <div className="table-cell">
                  <button 
                    className="delete-reservation-btn"
                    onClick={() => handleDelete(reservation.id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="reservations-summary">
          <p>Total Reservations: <strong>{filteredReservations.length}</strong></p>
        </div>
      </div>
    </AdminLayout>
  );
}

