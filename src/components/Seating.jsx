import React, { useState } from 'react';
import './Seating.css';
import Navbar from './Navbar';

const Seating = () => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [seatingData, setSeatingData] = useState([
    {
      id: 1,
      x: 68,
      y: 59,
      name: "Famous Orange Couch (Left)",
      isOccupied: true,
      attributes: ["social"]
    },
    {
      id: 2,
      x: 68,
      y: 65,
      name: "Famous Orange Couch (Right)",
      isOccupied: true,
      attributes: ["social"]
    },
    {
      id: 3,
      x: 83,
      y: 42,
      name: "Window Corner Table (North)",
      isOccupied: false,
      attributes: ["quiet", "window", "power"]
    },
    {
      id: 4,
      x: 83,
      y: 52,
      name: "Window Corner Table (South)",
      isOccupied: false,
      attributes: ["quiet", "window", "power"]
    },
    {
      id: 5,
      x: 79,
      y: 46,
      name: "Window Corner Table (Middle)",
      isOccupied: false,
      attributes: ["quiet", "window", "power"]
    },
    {
      id: 6,
      x: 73.5,
      y: 53,
      name: "Famous Green Couch",
      isOccupied: true,
      attributes: ["social"]
    },
    {
      id: 7,
      x: 71,
      y: 75,
      name: "Social Table (Southwest)",
      isOccupied: false,
      attributes: ["social", "power"]
    },
    {
      id: 8,
      x: 76,
      y: 75,
      name: "Social Table (Southeast)",
      isOccupied: false,
      attributes: ["social", "power"]
    },
    // Removed duplicate id 9 as it was identical to 8
    {
      id: 10,
      x: 49,
      y: 56,
      name: "Central Table (South)",
      isOccupied: false,
      attributes: ["social"]
    },
    {
      id: 11,
      x: 49,
      y: 51,
      name: "Central Table (North)",
      isOccupied: false,
      attributes: ["social"]
    },
    {
      id: 12,
      x: 54,
      y: 51,
      name: "Central Power Table",
      isOccupied: false,
      attributes: ["social", "power"]
    },
    {
      id: 13,
      x: 62,
      y: 51,
      name: "Central Table (Northeast)",
      isOccupied: false,
      attributes: ["social"]
    },
    {
      id: 14,
      x: 62,
      y: 56,
      name: "Central Table (Southeast)",
      isOccupied: false,
      attributes: ["social"]
    },
    {
      id: 15,
      x: 57,
      y: 56,
      name: "Central Table (Middle)",
      isOccupied: false,
      attributes: ["social"]
    },
    // Bar seating section
    {
      id: 16,
      x: 45,
      y: 75,
      name: "Bar Seat (West)",
      isOccupied: false,
      attributes: ["social"]
    },
    {
      id: 17,
      x: 54,
      y: 64,
      name: "Bar Seat (Middle-West)",
      isOccupied: false,
      attributes: ["social"]
    },
    {
      id: 18,
      x: 57.5,
      y: 64,
      name: "Bar Seat (Middle)",
      isOccupied: false,
      attributes: ["social"]
    },
    {
      id: 19,
      x: 61,
      y: 66,
      name: "Bar Seat (East)",
      isOccupied: false,
      attributes: ["social"]
    },
    // Quiet section
    {
      id: 20,
      x: 47,
      y: 43,
      name: "Quiet Corner (South)",
      isOccupied: true,
      attributes: ["quiet", "power"]
    },
    {
      id: 21,
      x: 47,
      y: 38,
      name: "Quiet Corner (North)",
      isOccupied: true,
      attributes: ["quiet", "power"]
    },
    // Corner section
    {
      id: 22,
      x: 59,
      y: 32,
      name: "Corner Sofa (West)",
      isOccupied: true,
      attributes: ["social", "window"]
    },
    {
      id: 23,
      x: 64,
      y: 32,
      name: "Corner Sofa (East)",
      isOccupied: true,
      attributes: ["social", "window"]
    },
    {
      id: 24,
      x: 69,
      y: 38,
      name: "Corner Social Table (East)",
      isOccupied: true,
      attributes: ["social", "window"]
    },
    {
      id: 25,
      x: 55,
      y: 38,
      name: "Corner Social Table (West)",
      isOccupied: true,
      attributes: ["social", "window"]
    },
    // Luxury section
    {
      id: 26,
      x: 43,
      y: 48,
      name: "Luxury Sofa (North)",
      isOccupied: true,
      attributes: ["social", "power"]
    },
    {
      id: 27,
      x: 36,
      y: 53,
      name: "Luxury Sofa (Middle-North)",
      isOccupied: true,
      attributes: ["social", "power"]
    },
    {
      id: 28,
      x: 36,
      y: 58,
      name: "Luxury Sofa (Middle-South)",
      isOccupied: true,
      attributes: ["social", "power"]
    },
    {
      id: 29,
      x: 40,
      y: 66,
      name: "Luxury Sofa (South)",
      isOccupied: true,
      attributes: ["social", "power"]
    },
    // Outer quiet section
    {
      id: 30,
      x: 37,
      y: 35,
      name: "Outer Quiet Table (Northwest)",
      isOccupied: false,
      attributes: ["quiet", "window", "power"]
    },
    {
      id: 31,
      x: 42,
      y: 35,
      name: "Outer Quiet Table (Northeast)",
      isOccupied: false,
      attributes: ["quiet", "window", "power"]
    },
    {
      id: 32,
      x: 55,
      y: 25,
      name: "Outer Quiet Table (West)",
      isOccupied: false,
      attributes: ["quiet", "window", "power"]
    },
    {
      id: 33,
      x: 59,
      y: 25,
      name: "Outer Quiet Table (Middle-West)",
      isOccupied: false,
      attributes: ["quiet", "window", "power"]
    },
    {
      id: 34,
      x: 64,
      y: 25,
      name: "Outer Quiet Table (Middle-East)",
      isOccupied: false,
      attributes: ["quiet", "window", "power"]
    },
    {
      id: 35,
      x: 69,
      y: 25,
      name: "Outer Quiet Table (East)",
      isOccupied: false,
      attributes: ["quiet", "window", "power"]
    }
  ]);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const filters = [
    { id: 'quiet', label: 'Quiet Study', icon: '📚' },
    { id: 'social', label: 'Social Space', icon: '👥' },
    { id: 'window', label: 'Window View', icon: '🪟' },
    { id: 'power', label: 'Power Outlet', icon: '🔌' }
  ];

  const toggleFilter = (filterId) => {
    setActiveFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const getFilteredSeats = () => {
    if (activeFilters.length === 0) return seatingData;
    return seatingData.filter(seat =>
      activeFilters.every(filter => seat.attributes.includes(filter))
    );
  };

  const bookSeat = (seatId) => {
    setSeatingData(prevSeats =>
      prevSeats.map(seat =>
        seat.id === seatId ? { ...seat, isOccupied: true } : seat
      )
    );
  };

  const cancelBooking = (seatId) => {
    setSeatingData(prevSeats =>
      prevSeats.map(seat =>
        seat.id === seatId ? { ...seat, isOccupied: false } : seat
      )
    );
  };

  const handleMouseEnter = (seatId) => {
    clearTimeout(hoverTimeout); // Prevent hiding if user moves quickly
    setHoverTimeout(
      setTimeout(() => {
        document.getElementById(`tooltip-${seatId}`).style.display = "block";
      }, 150) // Small delay to prevent flickering
    );
  };
  
  const handleMouseLeave = (seatId) => {
    setHoverTimeout(
      setTimeout(() => {
        document.getElementById(`tooltip-${seatId}`).style.display = "none";
      }, 800) // Tooltip stays visible for 1 second after leaving
    );
  };
  

  return (
    <div className="seating-chart">
      <Navbar />
      <header className="chart-header">
        <h1>☕ Central Perk Seating Chart</h1>
        <div className="filter-container">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-button ${activeFilters.includes(filter.id) ? 'active' : ''}`}
              onClick={() => toggleFilter(filter.id)}
            >
              <span className="filter-icon">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>
      </header>

      <div className="floor-plan-container">
        <img
          src="../public/Map.png"
          alt="Central Perk Floor Plan"
          className="floor-plan"
        />

        <div className="seating-markers">
          {getFilteredSeats().map(seat => (
            <div 
            key={seat.id} 
            className="seat-marker"
            style={{ left: `${seat.x}%`, top: `${seat.y}%` }}
            onMouseEnter={() => handleMouseEnter(seat.id)}
            onMouseLeave={() => handleMouseLeave(seat.id)}
          >
            <div className={`marker ${seat.isOccupied ? "occupied" : "available"}`}>
              <div id={`tooltip-${seat.id}`} className="tooltip">
                <h3>{seat.name}</h3>
                <div className="attributes">
                  {seat.attributes.map(attr => (
                    <span key={attr} className="attribute-badge">{attr}</span>
                  ))}
                </div>
                <p className="status">
                  {seat.isOccupied ? "Occupied" : "Available"}
                </p>
                {!seat.isOccupied && (
                  <button className="book-button" onClick={() => bookSeat(seat.id)}>
                    Book
                  </button>
                )}
                {seat.isOccupied && (
                  <button className="cancel-button" onClick={() => cancelBooking(seat.id)}>
                    Cancel Booking
                  </button>
                )}
              </div>
            </div>
          </div>
          
          ))}
        </div>
      </div>

      <div className="legend">
        <div className="legend-item">
          <span className="legend-marker available"></span>
          Available
        </div>
        <div className="legend-item">
          <span className="legend-marker occupied"></span>
          Occupied
        </div>
      </div>
    </div>
  );
};

export default Seating;


