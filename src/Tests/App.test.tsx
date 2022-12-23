import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe("App Tests", () => {
  test("should have header container", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const item = screen.getByTestId("header-container");
    expect(item).toBeInTheDocument();
  });

  test("should have footer container", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const item = screen.getByTestId("footer-container");
    expect(item).toBeInTheDocument();
  });

  test("register page should be render while click on register", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const registerButton = screen.getByTestId("register-button");
    fireEvent.click(registerButton);

    const registerText = screen.getByTestId("mobile-registration-container");
    expect(registerText).toBeInTheDocument();
  });
});
