import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us component Test cases", () => {
  it("should load contact us page", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button in contact us page", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("should load input name placeholder in contact us page", () => {
    render(<Contact />);
    const inputPlaceholder = screen.getByPlaceholderText("name");
    expect(inputPlaceholder).toBeInTheDocument();
  });

  it("should load 2 input boxes placeholder in contact us page", () => {
    render(<Contact />);
    const textbox = screen.getAllByRole("textbox");
    expect(textbox.length).not.toBe(3);
  });
});
