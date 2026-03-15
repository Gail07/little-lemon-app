import { useLocation, useNavigate } from "react-router-dom";

const ConfirmBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};

  return (
    <header>
      <section>
        <h2>Reservation Confirmed</h2>
        {data && Object.keys(data).length > 0 ? (
          <div>
            <p>
              Thank you {data.firstName} {data.lastName} for your reservation.
            </p>
            {data.date && data.time && (
              <p>
                Date: {data.date} at {data.time}
              </p>
            )}
            {data.guests && <p>Guests: {data.guests}</p>}
            {data.occasion && <p>Occasion: {data.occasion}</p>}
            {data.comments && <p>Comments: {data.comments}</p>}
          </div>
        ) : (
          <p>No reservation details available.</p>
        )}
        <button onClick={() => navigate("/")}>Back to Home</button>
      </section>
    </header>
  );
};

export default ConfirmBooking;
