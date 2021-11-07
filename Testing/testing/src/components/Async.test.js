import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResultValueOnce({
      json: async () => [{ id: "1", title: "first" }],
    });
    // Arrange
    render(<Async />);

    // Act
    // Nothing to do

    //Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
