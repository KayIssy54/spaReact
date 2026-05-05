import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("user can add a project", () => {
  render(<App />);

  const titleInput = screen.getByPlaceholderText(/Project title/i);
  const descInput = screen.getByPlaceholderText(/Description/i);
  const button = screen.getByText(/Add Project/i);

  fireEvent.change(titleInput, { target: { value: "Test Project" } });
  fireEvent.change(descInput, { target: { value: "Test Description" } });
  fireEvent.click(button);

  expect(screen.getByText("Test Project")).toBeInTheDocument();
});