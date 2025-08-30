import { useLocation } from "react-router-dom";

const ConfirmBooking = () => {
  const { state } = useLocation();
  return (
    <div className="confirm-booking">
      <h2>Booking Confirmed</h2>
      <p>Date: {state?.date}</p>
      <p>Time: {state?.time}</p>
      <p>Guests: {state?.guests}</p>
      <p>Occasion: {state?.occasion}</p>
    </div>
  );
};
export default ConfirmBooking;
