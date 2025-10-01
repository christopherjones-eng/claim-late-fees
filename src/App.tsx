import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "@/pages/Contact";
import Invoice from "@/pages/Invoice"; // ✅ fixed import (capital I)
import ThankYou from "@/pages/thank-you";
import Home from "@/pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;

