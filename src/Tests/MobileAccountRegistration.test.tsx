import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MobileAccountRegistration from "../Components/MobileAccountRegistration";
describe("Mobile Account Login Tests", () => {
  test("should have header container", () => {
    render(
      <BrowserRouter>
        <MobileAccountRegistration />
      </BrowserRouter>
    );
    const item = screen.getByTestId("header-container");
    expect(item).toBeInTheDocument();
  });

  test("should have footer container", () => {
    render(
      <BrowserRouter>
        <MobileAccountRegistration />
      </BrowserRouter>
    );
    const item = screen.getByTestId("footer-container");
    expect(item).toBeInTheDocument();
  });

  test("should have signup heading", () => {
    render(
      <BrowserRouter>
        <MobileAccountRegistration />
      </BrowserRouter>
    );
    const item = screen.getByText("Signup using mobile");
    expect(item).toBeInTheDocument();
  });

});

