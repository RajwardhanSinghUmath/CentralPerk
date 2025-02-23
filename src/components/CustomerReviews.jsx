import { useState } from "react";
import "./CustomerReviews.css";
import Navbar from "./Navbar";

const initialReviews = [
  { id: 1, name: "John Doe", rating: 5, review: "Amazing service! Highly recommend.", date: new Date(2024, 1, 1) },
  { id: 2, name: "Sarah Lee", rating: 4, review: "Great experience, but could improve delivery time.", date: new Date(2024, 1, 5) },
  { id: 3, name: "Mike Ross", rating: 3, review: "Decent but expected better quality.", date: new Date(2024, 1, 10) }
];

const CustomerReviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [name, setName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [sortBy, setSortBy] = useState("newest");

  const handleAddReview = () => {
    if (!name || !reviewText || rating === 0) return alert("Please fill all fields");

    const newReview = {
      id: reviews.length + 1,
      name,
      rating,
      review: reviewText,
      date: new Date()
    };

    setReviews([...reviews, newReview]);
    setName("");
    setReviewText("");
    setRating(0);
    setHoverRating(0);
  };

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortBy === "newest") return b.date - a.date;
    if (sortBy === "highest") return b.rating - a.rating;
    return 0;
  });

  return (
    <div className="customer-reviews-page">
      <Navbar />
      <div className="reviews-container">
        <h2 className="reviews-title">Customer Reviews</h2>

        {/* Sort Dropdown */}
        <select className="sort-dropdown" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="newest">Newest First</option>
          <option value="highest">Highest Rated</option>
        </select>

        {/* Reviews List */}
        <div className="reviews-list">
          {sortedReviews.map((rev) => (
            <div key={rev.id} className="review-card">
              <p className="review-name">{rev.name}</p>
              <p className="review-rating">{"⭐".repeat(rev.rating)}</p>
              <p className="review-text">{rev.review}</p>
              <p className="review-date">{new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(rev.date)}</p>
            </div>
          ))}
        </div>

        {/* Add Review Form */}
        <div className="review-form">
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <textarea placeholder="Write your review..." value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
          
          <div className="star-rating">
  {[1, 2, 3, 4, 5].map((num) => (
    <span
      key={num}
      className={`star ${rating >= num || hoverRating >= num ? "selected" : ""}`}
      onClick={() => setRating(num)}
      onMouseEnter={() => setHoverRating(num)}
      onMouseLeave={() => setHoverRating(0)}
      aria-label={`Rate ${num} out of 5`}
    >
      ⭐
    </span>
  ))}
</div>

          <button className="submit-btn" onClick={handleAddReview}>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;