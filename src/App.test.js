import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./Components/pages/BookingForm";

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

test("BookingForm accepts user input", async () => {
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
});

function LocalStorageReader({ keyName }) {
  const value = localStorage.getItem(keyName);
  return <div data-testid="ls-value">{value}</div>;
}

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
