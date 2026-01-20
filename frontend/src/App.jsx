import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import Profilepage from "./pages/Profilepage";
import Settingspage from "./pages/Settingspage";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/settings" element={<Settingspage />} />
      </Routes>
    </>
  );
}

export default App;
