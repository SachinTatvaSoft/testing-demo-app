import "./App.css";
import { Route, Routes } from "react-router";
import MobileAccountLogin from "./Components/MobileAccountLogin";
import MobileAccountRegistration from "./Components/MobileAccountRegistration";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Routes>
        <Route path="/" element={<MobileAccountLogin />} />
        <Route path="/mobile-login" element={<MobileAccountLogin />} />
        <Route
          path="/mobile-registration"
          element={<MobileAccountRegistration />}
        />
      </Routes>
    </div>
  );
}

export default App;
