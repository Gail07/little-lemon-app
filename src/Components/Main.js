import { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./pages/Header";
import ConfirmBooking from "./pages/ConfirmBooking";
import BookingPage from "./pages/BookingForm";

const Main = () => {
  const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 25; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = async function (formData) {
    try {
      const response = await fetch("https://votre-api.com/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      return response.ok;
    } catch (error) {
      return false;
    }
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date()) };
  }

  const navigate = useNavigate();
  function SubmitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed", { state: formData });
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/bookingPage"
          element={
            <BookingPage
              availableTimes={state.availableTimes}
              dispatch={dispatch}
              SubmitForm={SubmitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
