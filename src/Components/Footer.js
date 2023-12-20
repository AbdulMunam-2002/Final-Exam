

import React from 'react';
import image from '../assets/images/logo.png';
import logo1 from '../assets/images/logo1.png'; // Small logo 1
import logo2 from '../assets/images/logo2.png'; // Small logo 2
import logo3 from '../assets/images/logo3.png'; // Small logo 3
//import social from '../assets/images/Social.png';

function Footer() {
  return (
    <footer style={footerStyle}>
      <div>
        <img src={image} alt="Logo" style={logoStyle} />
      </div>
      <div style={linksContainer}>
        <a href="#" style={linkStyle}>
          Web3Makr
        </a>
        <a href="#" style={linkStyle}>
          White Paper
        </a>
        <a href="#" style={linkStyle}>
          Services
        </a>
        <a href="#" style={linkStyle}>
          Tool
        </a>
        <a href="#" style={linkStyle}>
          Contact Us
        </a>
      </div>
      <div style={copyrightStyle}>
        Copyright 2022 &copy; Web3Makr
      </div>
      <div className="d-flex justify-content-end mt-2">
          {/* Small Logos */}
          <img src={logo1} alt="Small Logo 1" className="mx-1" />
          <img src={logo2} alt="Small Logo 2" className="mx-1" />
          <img src={logo3} alt="Small Logo 3" className="mx-1" />
        </div>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#333', // Dark background color
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  bottom: 0,
  width: '100%',
};

const logoStyle = {
  height: '50px',
};

const linksContainer = {
  display: 'flex',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff', // White text color
  marginRight: '20px',
};

const socialIconsContainer = {
  display: 'flex',
  gap: '10px',
};

const socialIconStyle = {
  height: '30px',
};

const copyrightStyle = {
  marginLeft: 'auto', // Push to the right
  color: '#fff', // White text color
};

export default Footer;