import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserInformation.css";

const UserInformation = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!firstName || firstName.trim() === "") {
      newErrors.firstName = "First name is required";
    } else if (!/^[a-zA-Z\s'-]+$/.test(firstName)) {
      newErrors.firstName = "First name can only contain letters, spaces, hyphens, and apostrophes";
    }
    
    if (!lastName || lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
    } else if (!/^[a-zA-Z\s'-]+$/.test(lastName)) {
      newErrors.lastName = "Last name can only contain letters, spaces, hyphens, and apostrophes";
    }
    
    if (!email || email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    return newErrors;
  };

  const isFormValid = () => {
    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      /^[a-zA-Z\s'-]+$/.test(firstName) &&
      /^[a-zA-Z\s'-]+$/.test(lastName) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      const userInfo = {
        firstName,
        lastName,
        email,
        comments,
      };
      
      props.SubmitForm(userInfo);
      
      // Get reservation details from state or dispatch
      const reservationData = {
        date: localStorage.getItem("reservationDate") || "",
        time: localStorage.getItem("reservationTime") || "",
        guests: localStorage.getItem("reservationGuests") || "",
        occasion: localStorage.getItem("reservationOccasion") || "",
        firstName,
        lastName,
        email,
        comments,
      };
      
      // Navigate to confirmation page with all data
      navigate("/confirmed", { state: reservationData });
      
      setFirstName("");
      setLastName("");
      setEmail("");
      setComments("");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "comments":
        setComments(value);
        break;
      default:
        break;
    }
    props.dispatch({ type: "UPDATE_USER_INFORMATION", payload: { [name]: value } });
  };
  
  return (
    <div className="user-information-container">
      <div className="form-card">
        <div className="form-header">
          <h1>Personal Information</h1>
          <p className="form-subtitle">Complete your information to finalize your booking</p>
        </div>

        <form onSubmit={handleSubmit} className="user-form">
          <fieldset className="form-fieldset">
            <legend className="form-legend">Your Information</legend>
            
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">Firstname <span className="required">*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                className={`form-input ${errors.firstName ? 'input-error' : ''}`}
                placeholder="Entrez votre prénom"
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Surname<span className="required">*</span></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleChange}
                className={`form-input ${errors.lastName ? 'input-error' : ''}`}
                placeholder="Entrez votre nom"
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="votre.email@exemple.com"
                required
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="comments" className="form-label">Remarks (optional)</label>
              <textarea
                id="comments"
                name="comments"
                value={comments}
                onChange={handleChange}
                className="form-textarea"
                rows="4"
                placeholder="Entrez vos remarques spéciales ou demandes particulières..."
              />
            </div>

            <div className="form-actions">
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`btn btn-confirm ${isFormValid() ? 'btn-active' : 'btn-disabled'}`}
              >
                Confirm the Reservation
              </button>
              
              <button
                type="button"
                onClick={() => navigate("/")}
                className="btn btn-back"
              >
                Return to Homepage
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UserInformation;
