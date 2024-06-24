import React, { useState,useEffect } from 'react';
import './ImageCard.css';

const ImageCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { id: 1, name: 'John', title: 'Front end developer', rating: 4.0, description: 'Creating intuitive and engaging user interfaces. I specialize in the latest web technologies, ensuring that students learn the most relevant and up-to-date skills. On this EdTech platform, I’m dedicated to providing clear, practical instruction that empowers you to excel.', imgSrc: 'Images/InstructorImage.png', studentsTrained: 200, company: 'Microsoft', companyLogo: 'Images/logos_microsoft-icon.png',companyIcon:'Images/cap.png' },
    { id: 2, name: 'Riya', title: 'Software Engineer', rating: 4.4, description: 'Developing robust and efficient applications that solve real-world problems. With a strong foundation in coding and a keen eye for detail, I ensure that every project meets the highest standards of quality.', imgSrc: 'Images/InstructorImage1.png', studentsTrained: 200, company: 'Cognizant', companyLogo: 'Images/cognizant.jpg' ,companyIcon:'Images/cap.png'},
    { id: 3, name: 'Raj', title: 'AIML Professional', rating: 4.5, description: 'Specialize in developing intelligent systems that learn and adapt. On this platform, I am committed to sharing my expertise through clear, practical guidance. Let\'s explore the fascinating world of AIML and unleash its potential to transform industries and create meaningful impact.', imgSrc:  'Images/image1.png', studentsTrained: 200, company: 'Accenture', companyLogo: 'Images/accenture.png',companyIcon:'Images/cap.png' },
    { id: 4, name: 'John', title: 'Front end developer', rating: 4.0, description: 'Creating intuitive and engaging user interfaces. I specialize in the latest web technologies, ensuring that students learn the most relevant and up-to-date skills. On this EdTech platform, I’m dedicated to providing clear, practical instruction that empowers you to excel.', imgSrc: 'Images/InstructorImage.png', studentsTrained: 200, company: 'Microsoft', companyLogo: 'Images/logos_microsoft-icon.png',companyIcon:'Images/cap.png' },
    { id: 5, name: 'Riya', title: 'Software Engineer', rating: 4.4, description: 'Developing robust and efficient applications that solve real-world problems. With a strong foundation in coding and a keen eye for detail, I ensure that every project meets the highest standards of quality.', imgSrc: 'Images/InstructorImage1.png', studentsTrained: 200, company: 'Cognizant', companyLogo: 'Images/cognizant.jpg' ,companyIcon:'Images/cap.png'},
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (cards.length - 2));
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [cards.length]);

  return (
    <div className="carousel-container">
     
      <div className="carousel">
        <div
          className="cards"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.imgSrc} alt={`${card.name}`} />
              <div className="card-content">
              <p className="rating"> ★<span className='star'> {card.rating}</span></p>
                <h3>{card.name}</h3>
               
                <h4>{card.title}</h4>
               
                <p>{card.description}</p>
                <div className="card-footer">
                  <div className='i1'>
                  <img src={card.companyLogo} alt={`${card.company} logo`} className="company-logo" />
                  </div>
                  <span className='s1'><div className='icon1'><img src={card.companyIcon} className="company-icon" /></div>{card.studentsTrained}+ students trained</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
