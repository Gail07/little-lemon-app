import { useLocation, useNavigate } from "react-router-dom";
import "./ConfirmBooking.css";

const ConfirmBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="confirm-booking-container">
      <div className="confirmation-card">
        <div className="confirmation-header">
          <div className="success-icon">✓</div>
          <h1>Reservation Confirmed</h1>
          <p className="subtitle">Thank you for booking with Little Lemon</p>
        </div>

        {data && Object.keys(data).length > 0 ? (
          <div className="confirmation-content">
            {/* Greeting */}
            <div className="greeting-section">
              <p className="greeting-text">
                Welcome{data.firstName} {data.lastName},
              </p>
              <p className="message-text">
                Your reservation has been successfully confirmed. You will receive a confirmation email at the address {data.email}.
              </p>
            </div>

            {/* Reservation Details */}
            <div className="details-section">
              <h2>Your Reservation Details</h2>
              <div className="details-grid">
                {data.date && (
                  <div className="detail-item">
                    <span className="detail-label">📅 Date</span>
                    <span className="detail-value">{formatDate(data.date)}</span>
                  </div>
                )}
                {data.time && (
                  <div className="detail-item">
                    <span className="detail-label">⏰ Hour</span>
                    <span className="detail-value">{data.time}</span>
                  </div>
                )}
                {data.guests && (
                  <div className="detail-item">
                    <span className="detail-label">👥 Number of Guests</span>
                    <span className="detail-value">{data.guests} {data.guests > 1 ? "personnes" : "personne"}</span>
                  </div>
                )}
                {data.occasion && (
                  <div className="detail-item">
                    <span className="detail-label">🎉 Occasion</span>
                    <span className="detail-value">{data.occasion}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Customer Information */}
            <div className="customer-section">
              <h2>Customer Information</h2>
              <div className="info-box">
                <div className="info-row">
                  <span className="info-label">Full Name:</span>
                  <span className="info-value">{data.firstName} {data.lastName}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Email:</span>
                  <span className="info-value">{data.email}</span>
                </div>
                {data.comments && (
                  <div className="info-row">
                    <span className="info-label">Remarks:</span>
                    <span className="info-value comment-text">{data.comments}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Important Notice */}
            <div className="notice-section">
              <p className="notice-text">
                💡 <strong>Key points to remember:</strong> Please arrive 10 minutes before your reservation. 
                If you need to cancel or change your reservation, please contact us at least 24 hours in advance.
              </p>
            </div>
          </div>
        ) : (
          <div className="no-data-section">
            <p>No booking details available.</p>
          </div>
        )}

        {/* Action Buttons */}
        <div className="button-group">
          <button 
            className="btn btn-primary" 
            onClick={() => navigate("/")}
          >
           Return to homepage
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => window.print()}
          >
            Print confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
