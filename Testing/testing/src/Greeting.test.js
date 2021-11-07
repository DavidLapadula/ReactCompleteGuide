import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./components/Greeting";

describe("Greeting comp", () => {
  test("renders hello", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Nothing to do

    // Assert
    const helloElement = screen.getByText("Hello", { exact: false });
    expect(helloElement).toBeInTheDocument();
  });

  test("renders good to see you without button", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // Nothing to do

    // Assert
    const outputElement = screen.getByText("false", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed if button clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedElement = screen.getByText("changed", { exact: false });
    expect(changedElement).toBeInTheDocument();
  });
});
