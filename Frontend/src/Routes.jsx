import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
