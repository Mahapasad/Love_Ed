import React from 'react';

const Card = ({ title, description, link }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg p-4 m-4 w-60 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-pink-600 text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-pink-600 underline">Read more</a>
    </div>
  );
};

export default Card;
