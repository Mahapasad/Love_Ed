import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Card = ({ title, description, link }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-2xl font-bold text-pink-600 mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link to={link} className="text-pink-600 font-bold underline">
        Learn More
      </Link>
    </motion.div>
  );
};

export default Card;
