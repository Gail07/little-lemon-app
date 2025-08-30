import { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm({
      date,
      time,
      guests,
      occasion,
    });
    setDate("");
    setTime("");
    setGuests(1);
    setOccasion("");
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
            </div>

            <div>
              <label htmlFor="occasion">Occasion</label>
              <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Wedding</option>
                <option>Date</option>
              </select>
            </div>

            <div className="submit-btn">
              <input
                aria-label="On Click"
                type="submit"
                value="Make Your reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
