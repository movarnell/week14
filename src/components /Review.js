import React from 'react';

// Define a functional component Review which takes two props: review (an object containing review information) and onDelete (a function to delete a review)
const Review = ({ review, onDelete }) => {
  return (
    // Render a div with class name 'review'
    <div className="review">
      
      <div className="review-header">
        
        <span className="review-name">{review.name}</span>
      
        <span className="review-rating">{review.rating}</span>
      
        <span className="review-stars">★</span>
      </div>
    
      <p className="review-comment">{review.comment}</p>

      {/* Render a delete button with onClick event handling to delete the review when clicked */}
      <button onClick={() => onDelete(review.id)} className="delete-button">Delete</button>
    </div>
  );
};

export default Review; 

