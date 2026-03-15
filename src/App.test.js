import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import BookingForm from "./Components/pages/BookingForm";
import UserInformation from "./Components/pages/UserInformation";
import ConfirmBooking from "./Components/pages/ConfirmBooking";

// helper component for localStorage tests
function LocalStorageReader({ keyName }) {
  const value = localStorage.getItem(keyName);
  return <div data-testid="ls-value">{value}</div>;
}

test("Renders the BookingForm heading", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      SubmitForm={mockSubmitForm}
    />
  );
  const headingElement = screen.getByText("Make Your reservation");
  expect(headingElement).toBeInTheDocument();

  // verify back button is rendered
  const backButton = screen.getByRole("button", { name: /Back to Home/i });
  expect(backButton).toBeInTheDocument();
});

test("BookingForm displays available times", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      SubmitForm={mockSubmitForm}
    />
  );

  const timeOptions = screen.getAllByRole("option");
  expect(timeOptions.length).toBeGreaterThan(0);
});

test("BookingForm disables submit when fields are empty", () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      SubmitForm={mockSubmitForm}
    />
  );

  const submitBtn = screen.getByRole("button", { name: /Make Your reservation/i });
  expect(submitBtn).toBeDisabled();
});

test("BookingForm enables submit when all fields are filled", async () => {
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      SubmitForm={mockSubmitForm}
    />
  );

  const dateInput = screen.getByLabelText("Choose Date");
  const guestInput = screen.getByLabelText("Number of Guests");
  const occasionSelect = screen.getByLabelText("Occasion");
  const timeSelect = screen.getAllByRole("combobox")[1]; // Second combobox is time select

  await userEvent.type(dateInput, "2025-06-15");
  await userEvent.selectOptions(timeSelect, "17:00");
  await userEvent.clear(guestInput);
  await userEvent.type(guestInput, "2");
  await userEvent.selectOptions(occasionSelect, "Birthday");

  const submitBtn = screen.getByRole("button", { name: /Make Your reservation/i });
  expect(submitBtn).not.toBeDisabled();
});

test("UserInformation disables submit when fields are empty", () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();

  render(
    <UserInformation
      SubmitForm={mockSubmitForm}
      dispatch={mockDispatch}
    />
  );

  const submitBtn = screen.getByRole("button", { name: /Confirm reservation/i });
  expect(submitBtn).toBeDisabled();
});

test("UserInformation validates email format", async () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();

  render(
    <UserInformation
      SubmitForm={mockSubmitForm}
      dispatch={mockDispatch}
    />
  );

  const firstNameInput = screen.getByLabelText("First Name");
  const lastNameInput = screen.getByLabelText("Last Name");
  const emailInput = screen.getByLabelText("Email");

  await userEvent.type(firstNameInput, "John");
  await userEvent.type(lastNameInput, "Doe");
  await userEvent.type(emailInput, "invalid-email");

  const submitBtn = screen.getByRole("button", { name: /Confirm reservation/i });
  expect(submitBtn).toBeDisabled();
});

test("UserInformation enables submit when all fields are valid", async () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();

  render(
    <UserInformation
      SubmitForm={mockSubmitForm}
      dispatch={mockDispatch}
    />
  );

  const firstNameInput = screen.getByLabelText("First Name");
  const lastNameInput = screen.getByLabelText("Last Name");
  const emailInput = screen.getByLabelText("Email");

  await userEvent.type(firstNameInput, "John");
  await userEvent.type(lastNameInput, "Doe");
  await userEvent.type(emailInput, "john@example.com");

  const submitBtn = screen.getByRole("button", { name: /Confirm reservation/i });
  expect(submitBtn).not.toBeDisabled();
});
  const mockAvailableTimes = ["17:00", "18:00", "19:00"];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      SubmitForm={mockSubmitForm}
    />
  );

  const dateInput = screen.getByLabelText("Choose Date");
  await userEvent.type(dateInput, "2025-03-15");
  expect(dateInput.value).toBe("2025-03-15");

// navigation test ensures UserInformation route is configured

test("Confirmed page displays passed data", () => {
  const mockData = {
    firstName: "John",
    lastName: "Doe",
    date: "2025-06-01",
    time: "18:00",
    guests: 2,
    occasion: "Birthday",
    comments: "No onions",
  };

  render(
    <MemoryRouter initialEntries={[{ pathname: "/confirmed", state: mockData }] }>
      <Routes>
        <Route
          path="/confirmed"
          element={<ConfirmBooking />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText(/Thank you John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Date: 2026-02-28 at 18:00/i)).toBeInTheDocument();
  expect(screen.getByText(/Guests: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Occasion: Birthday/i)).toBeInTheDocument();
  expect(screen.getByText(/Comments: No opinions/i)).toBeInTheDocument();
});

test("navigates to user information when booking form is submitted", async () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  render(
    <MemoryRouter initialEntries={["/bookingPage"]}>
      <Routes>
        <Route
          path="/bookingPage"
          element={
            <BookingForm
              availableTimes={[]}
              dispatch={mockDispatch}
              SubmitForm={mockSubmitForm}
            />
          }
        />
        <Route
          path="/userInformation"
          element={<UserInformation SubmitForm={mockSubmitForm} dispatch={mockDispatch} />}
        />
      </Routes>
    </MemoryRouter>
  );

  const submitBtn = screen.getByRole("button", { name: /Make Your reservation/i });
  fireEvent.click(submitBtn);
  expect(screen.getByLabelText(/Comments/i)).toBeInTheDocument();
});

// tests for UserInformation component

test("UserInformation accepts comments input", async () => {
  const mockSubmitForm = jest.fn();
  const mockDispatch = jest.fn();

  render(
    <UserInformation
      SubmitForm={mockSubmitForm}
      dispatch={mockDispatch}
    />
  );

  const commentBox = screen.getByLabelText(/Comments/i);
  await userEvent.type(commentBox, "This is a test comment");
  expect(commentBox.value).toBe("This is a test comment");
});

describe("LocalStorage reading", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("reads value from localStorage", () => {
    localStorage.setItem("username", "little-lemon");
    render(<LocalStorageReader keyName="username" />);
    expect(screen.getByTestId("ls-value").textContent).toBe("little-lemon");
  });

  test("returns null if key does not exist", () => {
    render(<LocalStorageReader keyName="notfound" />);
    expect(screen.getByTestId("ls-value").textContent).toBe("");
  });
});

