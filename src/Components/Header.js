import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-pink-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Sex Education Hub</Link>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/articles" className="mr-4">Articles</Link>
          <Link to="/signup" className="mr-4">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
