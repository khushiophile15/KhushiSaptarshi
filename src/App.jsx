import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Journey from "./Journey";
import LoveLetter from "./LoveLetter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/loveletter" element={<LoveLetter />} />
      </Routes>
    </Router>
  );
}

export default App;