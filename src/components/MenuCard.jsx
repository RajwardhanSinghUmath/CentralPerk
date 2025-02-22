import React, { useState } from "react";
import "./MenuCard.css"; // Import the CSS file

const MenuCard = ({ name, price, category, image, onAddToCart, onToggleFavorite, isFavorite }) => {
  const [isInCart, setIsInCart] = useState(false);

  const handleCartClick = () => {
    setIsInCart(!isInCart);
    onAddToCart(name, price);
  };

  return (
    <div className="menu-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="category">{category}</p>
      <p className="price">₹{price}</p>

      {/* Favorite Button */}
      <button
        className={`favorite-btn ${isFavorite ? "fav" : ""}`}
        onClick={() => onToggleFavorite(name)}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      {/* Add to Cart Button */}
      <button className="cart-btn" onClick={handleCartClick}>
        {isInCart ? "Remove from Cart" : "🛒 Add to Cart"}
      </button>
    </div>
  );
};

export default MenuCard;
