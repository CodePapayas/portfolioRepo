import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function groceryNav() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/groceries">Groceries</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default groceryNav;
