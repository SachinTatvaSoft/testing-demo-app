import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Components/Footer";

describe("Footer Test", () => {
  test("should have footer container", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const item = screen.getByTestId("footer-container");
    expect(item).toBeInTheDocument();
  });

  test("should have logo image in header", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const item = screen.getByTestId("footer-logo-image");
    expect(item).toBeInTheDocument();
  });

  test("should have paragraph", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const item = screen.getByText(
      "Are you owner of a startup looking to raise funds or an individual looking to invest in top growing startups then you are at the right place."
    );
    expect(item).toBeInTheDocument();
  });

  test("should have company email", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const item = screen.getByText("hello@tatvasoft.com");
    expect(item).toBeInTheDocument();
  });

  test("should have company mobile", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const item = screen.getByText("+91-9601421472");
    expect(item).toBeInTheDocument();
  });

  test("should have company address", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    const item = screen.getByText(
      "TatvaSoft House, Sarkhej - Gandhinagar Highway, Rajpath Rangoli Rd, Ahmedabad, Gujarat 380054"
    );
    expect(item).toBeInTheDocument();
  });

  test("should footer contains all images", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    let size = 0;

    const data = screen.getAllByTestId("footer-icon-images").map((x, index) => {
      x.childElementCount;
      size = index + 1;
    });

    expect(size).toEqual(6);
  });
});
