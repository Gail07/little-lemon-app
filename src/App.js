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
import About from "./Components/pages/About";
import OrderOnline from "./Components/pages/OrderOnline/OrderOnline";
import Cart from "./Components/pages/Cart/Cart";
import PlaceOrder from "./Components/pages/PlaceOrder/PlaceOrder";
import AppDownload from "./Components/AppDownload/AppDownload";



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

  const initialState = { 
    availableTimes: fetchAPI(new Date()),
    reservationDetails: {},
    userInformation: {}
  };
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, action) {
    if (action.type === "SET_RESERVATION_DETAILS") {
      return { 
        ...state, 
        reservationDetails: action.payload 
      };
    } else if (action.type === "UPDATE_USER_INFORMATION") {
      return { 
        ...state, 
        userInformation: { ...state.userInformation, ...action.payload } 
      };
    }
    return { availableTimes: fetchAPI(new Date()), ...state };
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
        <Route path="/about" element={<About />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
