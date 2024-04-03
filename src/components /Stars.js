import React from 'react';

// Define a functional component Stars which takes two props: rating and onChange
const Stars = ({ rating, onChange }) => {

  // Define a function handleClick to handle star click events
  const handleClick = value => {

    onChange(value); // Call the onChange function with the clicked star value
  };

  // Render the Stars component
  return (
    <div className="stars">

      {/* Map over an array of 5 values (1 to 5) to render each star */}
      {[1, 2, 3, 4, 5].map(value => (
        <span
          key={value} 
          className={value <= rating ? 'star-filled' : 'star'} // Apply CSS 
          onClick={() => handleClick(value)} // Attach onClick event handler to call handleClick function.
          style={{ cursor: 'pointer' }} // Apply pointer cursor style to indicate clickability
        >
          {value <= rating ? '★' : '☆'} {/* Render filled star (★) or empty star (☆) based on the comparison with rating */}
        </span>
      ))}
    </div>
  );
};

export default Stars; 


