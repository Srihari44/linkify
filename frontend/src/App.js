import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
