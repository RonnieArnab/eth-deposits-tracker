import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./pages/DashBoard";
import HistoricalData from "./pages/HistoricalData";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/historical" element={<HistoricalData />} />
      </Routes>
    </Router>
  );
}

export default App;
