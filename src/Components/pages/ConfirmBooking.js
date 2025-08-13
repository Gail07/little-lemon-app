
const ConfirmBooking = (props) => {
    return (
        <div className="confirm-booking">
            <h2>Booking Confirmed</h2>
            <p>Date: {props.date}</p>
            <p>Time: {props.time}</p>
            <p>Guests: {props.guests}</p>
            <p>Occasion: {props.occasion}</p>
        </div>
    )
}
export default ConfirmBooking;
