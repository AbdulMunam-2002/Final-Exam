import React from 'react';
import img from '../assets/images/center.png';

export const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <h1>Web3Makr <br />Redefining How You Create</h1>
        <h5>Unlock the blockchain potential to create Web3 Applications</h5>
        <img src={img} alt="Center Image" className="center-image" />
      </div>
    </>
  );
};

// Combined CSS
const heroSectionStyles = `
  .hero-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url('./assets/bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
    color: white;
  }

  .hero-section h1 {
    font-size: 50px;
    margin-top: 10px;
  }

  .center-image {
    width: 30%;
    height: auto;
    flex-shrink: 0;
    margin-top: 100px;
    border-radius: 42px;
  }
`;

// Apply the styles
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(heroSectionStyles, styleSheet.cssRules.length);

export default HeroSection;
