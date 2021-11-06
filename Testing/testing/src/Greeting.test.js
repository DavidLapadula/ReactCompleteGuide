import { render, screen } from "@testing-library/react";
import Greeting from "./components/Greeting";

test("renders hello", () => {
  // Arrange
  render(<Greeting />);

  // Act
  // Nothing to do

  // Assert
  const helloElement = screen.getByText("Hello", { exact: false });
  expect(helloElement).toBeInTheDocument();
});
