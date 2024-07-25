import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <motion.section
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl text-pink-600 font-bold mb-4">Welcome to LoveEd</h2>
          <p className="text-gray-700">
            Your one-stop solution for all sexual queries and exploring things you may never know.
          </p>
        </motion.section>
        <motion.section
          className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Card 
            title="Educational Articles"
            description="Explore our collection of well-researched articles on various sex education topics."
            link="/articles"
          />
          <Card 
            title="FAQs"
            description="Get answers to frequently asked questions about sex and relationships."
            link="/faq"
          />
          <Card 
            title="Expert Advice"
            description="Submit your queries and get answers from certified sex educators."
            link="/contact"
          />
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
