import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Index";
import Contact from "@/pages/Contact";
import Invoice from "@/pages/Invoice"; // ✅ matches the filename exactly
import ThankYou from "@/pages/ThankYou"; // ensure filename is ThankYou.tsx

const App: React.FC = () => {
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
};

export default App;
