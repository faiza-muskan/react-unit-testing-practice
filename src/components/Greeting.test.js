import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("test for Greeting component", () => {
  test("renders hello world as text", () => {
    // arrange
    render(<Greeting />);

    // assert
    const helloElement = screen.getByText("Hello world", { exact: true });
    expect(helloElement).toBeInTheDocument();
  });

  test("renders it's good to see you", () => {
    // arrange
    render(<Greeting />);

    // assert
    const outputElement = screen.getByText("It's good to see you", {
      exact: true,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders changed! on click", () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("hide good to see you text", () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // assert
    const outputElement = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
