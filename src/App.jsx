import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar
import MenuList from "./components/MenuList"; // Example page
import Home from "./components/Home"; // Example Home page
import Seating from "./components/Seating";
import VirtualBarista from "./components/VirtualBarista";
import './App.css'
import CustomerReviews from "./components/CustomerReviews";

function App() {
  return (
    <Router>
      <div className="container">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuList />} />
        
        <Route path="/seating" element={<Seating/>} />
        <Route path="/barista" element={<VirtualBarista/>} />
        <Route path="/review" element={<CustomerReviews/>} />
        <Route path="/cart" element={<h2>Cart Page</h2>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
