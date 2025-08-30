import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "./Components/pages/BookingForm";
import App from "./App";

test("Renders the Header heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByRole("button", {
    name: "Reserve a table",
  });
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Choose Date");
  expect(headingElementNew).toBeInTheDocument();
});

test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("BookingForm");
  expect(headingElement).toBeInTheDocument();
});

test("Initialize/Update Times", async () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  userEvent.click(screen.getByLabelText("Choose Date"));

  const testTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const timeOptions = screen.getAllByRole("option");
  const timeValues = timeOptions.map((option) => option.value);
  expect(timeValues).toEqual(testTime);
  // userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  // expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
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
