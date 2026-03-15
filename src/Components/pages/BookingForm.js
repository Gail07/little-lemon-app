import { useState } from "react";
import { useNavigate } from "react-router-dom";


const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!date) newErrors.date = "Please select a date";
    if (!time) newErrors.time = "Please select a time";
    if (!guests || guests < 1) newErrors.guests = "Please select at least 1 guest";
    if (!occasion) newErrors.occasion = "Please select an occasion";
    return newErrors;
  };

  const isFormValid = () => {
    return date && time && guests >= 1 && occasion;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      // store date/time info in parent state, then go to user info step
      props.dispatch({ type: "SET_RESERVATION_DETAILS", payload: { date, time, guests, occasion }});
      navigate("/userInformation");
      // clear local fields
      setDate("");
      setTime("");
      setGuests(1);
      setOccasion("");
    }
  };

  const handleChange = (event) => {
    setDate(event);
    props.dispatch(event);
  };
  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="res-date">Choose Date</label>
              <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                required
              />
              {errors.date && <span style={{color: 'red'}}>{errors.date}</span>}
            </div>

            <div>
              <label htmlFor="res-time">Choose Time</label>
              <input
                type="time"
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option value="">Select time</option>
                {props.availableTimes.map((time) => (
                  <option key={time}>{time}</option>
                ))}
              </select>
              {errors.time && <span style={{color: 'red'}}>{errors.time}</span>}
            </div>

            <div>
              <label htmlFor="guests">Number of Guests</label>
              <input
                type="number"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                min="1"
                required
              />
              {errors.guests && <span style={{color: 'red'}}>{errors.guests}</span>}
            </div>

            <div>
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select an occasion</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Wedding</option>
                <option>Date</option>
              </select>
              {errors.occasion && <span style={{color: 'red'}}>{errors.occasion}</span>}
            </div>

            <div className="submit-btn">
              <input
                aria-label="On Click"
                type="submit"
                value="Make Your reservation"
                disabled={!isFormValid()}
                style={{opacity: isFormValid() ? 1 : 0.5, cursor: isFormValid() ? 'pointer' : 'not-allowed'}}
              />
            </div>

            <div className="back-btn">
              <input
                aria-label="On Click"
                type="button"
                value="Back to Home"
                onClick={() => navigate("/")}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
