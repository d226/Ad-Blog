import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import CreateAds from "./components/Create Ads/CreateAds";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateTextAds from "./components/Create Ads/CreateTextAds";
import CreateMediaAds from "./components/Create Ads/CreateMediaAds";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-ads" element={<CreateAds />} />
          <Route path="/create-text-ads" element={<CreateTextAds />} />
          <Route path="/create-media-ads" element={<CreateMediaAds />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
