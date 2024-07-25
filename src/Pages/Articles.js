import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const articles = [
  {
    title: 'Understanding Consent',
    description: 'Learn the importance of consent in sexual relationships and how to communicate effectively.',
    link: '/articles/understanding-consent'
  },
  {
    title: 'Safe Sex Practices',
    description: 'Explore various methods to practice safe sex and prevent STIs and unwanted pregnancies.',
    link: '/articles/safe-sex-practices'
  },
  {
    title: 'Navigating Sexual Orientation',
    description: 'A guide to understanding and accepting diverse sexual orientations.',
    link: '/articles/sexual-orientation'
  },
  {
    title: 'The Science of Sexual Attraction',
    description: 'Discover the biological and psychological factors that influence sexual attraction.',
    link: '/articles/sexual-attraction'
  },
  {
    title: 'Healthy Relationships',
    description: 'Tips and advice on building and maintaining healthy sexual relationships.',
    link: '/articles/healthy-relationships'
  },
  {
    title: 'Communication in Sex',
    description: 'Effective communication techniques for improving sexual relationships.',
    link: '/articles/communication-in-sex'
  },
  {
    title: 'Sexual Health and Hygiene',
    description: 'Best practices for maintaining sexual health and hygiene.',
    link: '/articles/sexual-health-hygiene'
  },
  {
    title: 'Birth Control Methods',
    description: 'A comprehensive guide to various birth control methods and their effectiveness.',
    link: '/articles/birth-control-methods'
  },
  {
    title: 'Sexual Myths Debunked',
    description: 'Common myths about sex debunked with scientific evidence.',
    link: '/articles/sexual-myths-debunked'
  },
  {
    title: 'Sexual Pleasure',
    description: 'Understanding sexual pleasure and techniques to enhance it.',
    link: '/articles/sexual-pleasure'
  },
  {
    title: 'LGBTQ+ Sex Education',
    description: 'Inclusive sex education topics for LGBTQ+ individuals.',
    link: '/articles/lgbtq-sex-education'
  },
  {
    title: 'Sex and Mental Health',
    description: 'The impact of sex on mental health and vice versa.',
    link: '/articles/sex-mental-health'
  },
  {
    title: 'Teen Sex Education',
    description: 'Essential sex education topics for teenagers.',
    link: '/articles/teen-sex-education'
  },
  {
    title: 'Sexual Fantasies',
    description: 'Exploring and understanding sexual fantasies.',
    link: '/articles/sexual-fantasies'
  },
  {
    title: 'Sex and Aging',
    description: 'How sex and sexual health change as we age.',
    link: '/articles/sex-aging'
  },
  {
    title: 'Sexual Anatomy',
    description: 'A detailed look at sexual anatomy for all genders.',
    link: '/articles/sexual-anatomy'
  },
  {
    title: 'Kinks and Fetishes',
    description: 'Understanding and safely exploring kinks and fetishes.',
    link: '/articles/kinks-fetishes'
  },
  {
    title: 'Sexual Consent and Boundaries',
    description: 'The importance of setting and respecting sexual boundaries.',
    link: '/articles/consent-boundaries'
  },
  {
    title: 'Sex and Technology',
    description: 'The role of technology in modern sexual relationships.',
    link: '/articles/sex-technology'
  },
  {
    title: 'Reproductive Health',
    description: 'Key topics in reproductive health and wellness.',
    link: '/articles/reproductive-health'
  }
];

const Articles = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-8">
        <section className="text-center mb-8">
          <h2 className="text-3xl text-pink-600 font-bold mb-4">Articles</h2>
          <p className="text-gray-700">Explore our collection of articles on various sex education topics.</p>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((article, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-pink-600 text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <a href={article.link} className="text-pink-600 underline">Read more</a>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Articles;
