import React from 'react';
import "./CardData.css";
import ImageCard from './ImageCard';

const data = [
  {
    name: 'John',
    title: 'Front end developer',
    description:
      'Creating intuitive and engaging user interfaces. I specialize in the latest web technologies, ensuring that students learn the most relevant and up-to-date skills. On this EdTech platform, I\'m dedicated to providing clear, practical instruction that empowers you to excel.',
    rating: 4.5,
    studentsTrained: 200,
  },
  {
    name: 'Jane',
    title: 'UI/UX Designer',
    description:
      'I specialize in designing user-friendly and visuallt CardDataealing interfaces. My goal is to create seamless and intuitive experiences for users.',
    rating: 4.8,
    studentsTrained: 350,
  },
  {
    name: 'David',
    title: 'Full Stack Developer',
    description:
      'I have a passion for building scalable and efficient web applications. I enjoy working with both front-end and back-end technologies.',
    rating: 4.2,
    studentsTrained: 250,
  },
];

const CardData = () => {
  return (
    <div className="container">
      <h1>Advance Your Path with Expert Guidance</h1>
      <p>
        Embark on Your Journey to Success. Discover the tailored support that
        prepares you for your dream career.
      </p>
      <div className="cards">
        {data.map((item) => (
          <ImageCard
            key={item.name}
            name={item.name}
            title={item.title}
            description={item.description}
            rating={item.rating}
            studentsTrained={item.studentsTrained}
          />
        ))}
      </div>
    </div>
  );
};

export default CardData;