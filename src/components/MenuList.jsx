import React, { useState } from "react";
import MenuCard from "./MenuCard";
import "./MenuList.css"; // Import CSS

const menuItems = [
  { name: "Cappuccino", price: 150, category: "Coffee", image: "https://source.unsplash.com/200x200/?cappuccino,coffee" },
  { name: "Latte", price: 180, category: "Coffee", image: "https://source.unsplash.com/200x200/?latte,coffee" },
  { name: "Chocolate Cake", price: 250, category: "Desserts", image: "https://source.unsplash.com/200x200/?cake,dessert" },
  { name: "Cheesecake", price: 300, category: "Desserts", image: "https://source.unsplash.com/200x200/?cheesecake,dessert" },
  { name: "Sandwich", price: 120, category: "Food", image: "https://source.unsplash.com/200x200/?sandwich,food" },
  { name: "Pasta", price: 220, category: "Food", image: "https://source.unsplash.com/200x200/?pasta,food" },
];

const MenuList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  // Toggle Favorite
  const handleToggleFavorite = (name) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(name)
        ? prevFavorites.filter((fav) => fav !== name)
        : [...prevFavorites, name]
    );
  };

  // Add or Remove from Cart
  const handleCartClick = (name, price) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.name === name)) {
        return prevCart.filter((item) => item.name !== name); // Remove if exists
      } else {
        return [...prevCart, { name, price }];
      }
    });
  };

  // Filter items based on search and category
  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "All" || item.category === selectedCategory)
  );

  return (
    <div className="menu-container">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for an item..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="menu-search"
      />

      {/* Category Filter Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="menu-filter"
      >
        <option value="All">All Categories</option>
        <option value="Coffee">Coffee</option>
        <option value="Food">Food</option>
        <option value="Desserts">Desserts</option>
      </select>
{/* Favorites Section */}
{favorites.length > 0 && (
        <div className="favorites-section">
          <h2>❤️ Favorite Items</h2>
          <ul>
            {favorites.map((name) => (
              <li key={name}>
                {name} <button onClick={() => handleToggleFavorite(name)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Cart Section */}
      {cart.length > 0 && (
        <div className="cart-section">
          <h2>🛒 Cart</h2>
          <ul>
            {cart.map(({ name, price }) => (
              <li key={name}>
                {name} - ₹{price}{" "}
                <button onClick={() => handleCartClick(name, price)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Display Menu Cards */}
      <div className="menu-items">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <MenuCard
              key={item.name}
              {...item}
              onToggleFavorite={handleToggleFavorite}
              onAddToCart={handleCartClick}
              isFavorite={favorites.includes(item.name)}
            />
          ))
        ) : (
          <p className="menu-no-items">No items found.</p>
        )}
      </div>

      
    </div>
  );
};

export default MenuList;
