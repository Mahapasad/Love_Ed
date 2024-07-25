import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-pink-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faHeart} className="text-white mr-2" />
        <h1 className="text-2xl font-bold">LoveEd</h1>
      </div>
      <nav className="space-x-4">
        <a href="/" className="hover:text-pink-300">Home</a>
        <a href="/articles" className="hover:text-pink-300">Articles</a>
        <a href="/faq" className="hover:text-pink-300">FAQs</a>
        <a href="/contact" className="hover:text-pink-300">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
