import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Import the Navbar
import MenuList from "./components/MenuList"; // Example page
import Home from "./components/Home"; // Example Home page
import Seating from "./components/Seating";
import VirtualBarista from "./components/VirtualBarista";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuList />} />
        <Route path="/seating" element={<Seating/>} />
        <Route path="/barista" element={<VirtualBarista/>} />
        <Route path="/favourites" element={<h2>Favourites Page</h2>} />
        <Route path="/cart" element={<h2>Cart Page</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
