import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      props.SubmitForm({
        firstName,
        lastName,
        email,
        comments,
      });
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
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
              {errors.firstName && <span style={{color: 'red'}}>{errors.firstName}</span>}
            </div>

            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
              {errors.lastName && <span style={{color: 'red'}}>{errors.lastName}</span>}
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
            </div>

            <div>
              <label htmlFor="comments">Comments</label>
              <textarea
                id="comments"
                name="comments"
                value={comments}
                onChange={handleChange}
                rows="4"
                cols="40"
                placeholder="Enter any additional comments"
              />
            </div>

            <div className="submit-btn2">
              <input
                aria-label="On Click"
                type="submit"
                value="Confirm reservation"
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

export default UserInformation;
