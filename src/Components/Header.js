import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="bg-pink-600 p-4 text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Sex Education Hub</Link>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/articles" className="mr-4">Articles</Link>
          <Link to="/signup" className="mr-4">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
