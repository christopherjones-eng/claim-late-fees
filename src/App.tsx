import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "@/pages/Contact";
import Invoice from "@/pages/invoice";   // lowercase import
import ThankYou from "@/pages/thank-you"; // lowercase import
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

