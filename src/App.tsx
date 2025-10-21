import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Index";
import Contact from "@/pages/Contact";
import Invoice from "@/pages/Invoice";
import ThankYou from "@/pages/ThankYou";
import About from "@/pages/About";
import HowItWorks from "@/pages/HowItWorks";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};

export default App;
