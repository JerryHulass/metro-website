import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import GeoLandingPage from "./pages/GeoLandingPage"; // Add this import

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* This single route handles EVERY city you target */}
        <Route path="/service/:city" element={<GeoLandingPage />} /> 
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}