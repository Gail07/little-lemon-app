import "./App.css";
import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Menu from "./Components/pages/Menu";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Header from "./Components/pages/Header";
import BookingPage from "./Components/pages/BookingForm";
import UserInformation from "./Components/pages/UserInformation";
import ConfirmBooking from "./Components/pages/ConfirmBooking";

function App() {
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

  function SubmitForm(formData) {
    if (submitAPI(formData)) {
      // Navigation handled in BookingForm component
    }
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Menu />
              <Testimonials />
            </>
          }
        />
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
        <Route
          path="/userInformation"
          element={
            <UserInformation
              SubmitForm={SubmitForm}
              dispatch={dispatch}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmBooking />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
