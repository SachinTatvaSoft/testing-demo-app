import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MobileAccountLogin from "../Components/MobileAccountLogin";
describe("Mobile Account Login Tests", () => {
  test("should have header container", () => {
    render(
      <BrowserRouter>
        <MobileAccountLogin />
      </BrowserRouter>
    );
    const item = screen.getByTestId("header-container");
    expect(item).toBeInTheDocument();
  });

  test("should have footer container", () => {
    render(
      <BrowserRouter>
        <MobileAccountLogin />
      </BrowserRouter>
    );
    const item = screen.getByTestId("footer-container");
    expect(item).toBeInTheDocument();
  });

  test("should have login heading", () => {
    render(
      <BrowserRouter>
        <MobileAccountLogin />
      </BrowserRouter>
    );
    const item = screen.getByText("Login using mobile");
    expect(item).toBeInTheDocument();
  });
});
