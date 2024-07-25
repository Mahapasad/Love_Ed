import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Card from '../Components/Card';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <section className="text-center mb-8">
          <h2 className="text-3xl text-pink-600 font-bold mb-4">Welcome to LoveEd</h2>
          <p className="text-gray-700">Your one-stop solution for all sexual queries and exploring things you may never know.</p>
        </section>
        <section className="cards-container">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
