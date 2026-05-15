import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import Explore from "./pages/Dashboard";
import Community from "./pages/Community";
import Signup from "./pages/Signup";
import HowItWorks from "./pages/HowItWorks";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
<Route path="/login" element={<Login />} />
<Route path="/Dashboard" element={<Dashboard/>} />
<Route path="/community" element={<Community />} />
<Route path="/signup" element={<Signup />} />
<Route path="/how-it-works" element={<HowItWorks />} />
      
    </Routes>
  );
}

export default App;
