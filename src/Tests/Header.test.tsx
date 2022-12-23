import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Components/Header";

describe("Header Test", () => {
  test("should have header container", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const item = screen.getByTestId("header-container");
    expect(item).toBeInTheDocument();
  });

  test("should have logo image in header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const item = screen.getByTestId("header-logo-image");
    expect(item).toBeInTheDocument();
  });

  test("should have to render register button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const item = screen.getByText("Register");
    expect(item).toBeInTheDocument();
  });

  test("should have to render login link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const item = screen.getByText("Login");
    expect(item).toBeInTheDocument();
  });
});
