import React, { useState } from "react";
import MenuCard from "./MenuCard";
import "./MenuList.css"; // Import CSS
import CustomerReviews from "./CustomerReviews";
import Navbar from "./Navbar";

const menuItems = [
  {
    name: "Cappuccino",
    price: 150,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Latte",
    price: 180,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chocolate Cake",
    price: 250,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cheesecake",
    price: 300,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Croissant",
    price: 120,
    category: "Desserts",
    image: "https://sallysbakingaddiction.com/wp-content/uploads/2018/03/chocolate-croissants-2.jpg",
  },
  {
    name: "Sandwich",
    price: 120,
    category: "Food",
    image: "https://images.unsplash.com/photo-1485451456034-3f9391c6f769?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Avocado Sandwich",
    price: 180,
    category: "Food",
    image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Pasta",
    price: 220,
    category: "Food",
    image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "English Trifle",
    price: 280,
    category: "It tastes like feet!",
    image: "data:image/webp;base64,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",
  },
];

const MenuList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const handleToggleFavorite = (name) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(name)
        ? prevFavorites.filter((fav) => fav !== name)
        : [...prevFavorites, name]
    );
  };

  const handleCartClick = (name, price) => {
    setCart((prevCart) => {
      if (prevCart.some((item) => item.name === name)) {
        return prevCart.filter((item) => item.name !== name);
      } else {
        return [...prevCart, { name, price }];
      }
    });
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "All" || item.category === selectedCategory)
  );

  return (
    <div className="menu-container">
  <img src="/Menu.png" alt="" className="JhooltaMenu"/>
      <Navbar />
      <div  className="custom">
          <a href="./public/custom.html">
          Custom coffee
          </a>
      </div>
<div className="menu-page">
  <h1 >Joey doesn't share food!</h1>
      <div className="menu-controls">
        <input
          type="text"
          placeholder="Search for an item..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="menu-search"
        />

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
      </div>

      
        <div className="favorites-section">
          <h2>❤️ The One with all the Favourites</h2>
          <ul>
            {favorites.map((name) => (
              <li key={name}>
                {name} <button onClick={() => handleToggleFavorite(name)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>


      
        <div className="cart-section">
          <h2>🛒 Joey's Food Tray  </h2>
          <ul>
            {cart.map(({ name, price }) => (
              <li key={name}>
                {name} - ₹{price}{" "}
                <button onClick={() => handleCartClick(name, price)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>


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
      
      <p className >“What’s not to like? Custard: good. Jam: good. Meat: good!”</p>
      </div>
    </div>
  );
};

export default MenuList;
