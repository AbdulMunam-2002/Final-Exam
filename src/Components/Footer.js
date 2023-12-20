import React from 'react';
import { Button, Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/images/logo.png'; // Your main logo
import logo1 from '../assets/images/logo1.png'; // Small logo 1
import logo2 from '../assets/images/logo2.png'; // Small logo 2
import logo3 from '../assets/images/logo3.png'; // Small logo 3

function Footer() {
  const mixColors = (color1, color2, color3, t) => {
    const hexToRgb = (hex) => {
      const bigint = parseInt(hex, 16);
      return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
      };
    };

    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const rgb3 = hexToRgb(color3);

    const lerpedColor1 = {
      r: Math.round(rgb1.r + t * (rgb2.r - rgb1.r)),
      g: Math.round(rgb1.g + t * (rgb2.g - rgb1.g)),
      b: Math.round(rgb1.b + t * (rgb2.b - rgb1.b))
    };

    const lerpedColor2 = {
      r: Math.round(rgb2.r + t * (rgb3.r - rgb2.r)),
      g: Math.round(rgb2.g + t * (rgb3.g - rgb2.g)),
      b: Math.round(rgb2.b + t * (rgb3.b - rgb2.b))
    };

    const componentToHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };

    const mixedColor = {
      r: Math.round((lerpedColor1.r + lerpedColor2.r) / 2),
      g: Math.round((lerpedColor1.g + lerpedColor2.g) / 2),
      b: Math.round((lerpedColor1.b + lerpedColor2.b) / 2)
    };

    return (
      '#' +
      componentToHex(mixedColor.r) +
      componentToHex(mixedColor.g) +
      componentToHex(mixedColor.b)
    );
  };

  // Define your colors
  const color1 = 'AA58AA';
  const color2 = 'EF8F2D';
  const color3 = '18ADE4';

  // Adjust the mix ratio as needed
  const mixRatio = 0.5;

  // Calculate mixed background color
  const backgroundColor = mixColors(color1, color2, color3, mixRatio);

  return (
    <Navbar expand="lg" className="justify-content-center">
      <Container fluid style={{ backgroundColor, color: 'white' }}>
        <Navbar.Brand href="#">
          <Image src={logo} alt="Logo" fluid style={{ maxHeight: '80px' }} />
        </Navbar.Brand>
        <Nav className="m-auto text-center">
          <Nav.Link href="#action1" style={{ color: 'white' }}>
            Webmakr
          </Nav.Link>
          <Nav.Link href="#action2" style={{ color: 'white' }}>
            White Paper
          </Nav.Link>
          <Nav.Link href="#" disabled style={{ color: 'white' }}>
            Services
          </Nav.Link>
          <Nav.Link href="#" disabled style={{ color: 'white' }}>
            Contact Us
          </Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ color: 'white' }} />
        <Navbar.Collapse id="navbarScroll">
          
        </Navbar.Collapse>
      </Container>
      {/* New Container for Copyright Text and Logos with a different background color */}
      <Container fluid style={{ backgroundColor: '#212529', color: 'white' }} className="text-center mt-3">
        Copyright 2022 © Web3makr
        <div className="d-flex justify-content-end mt-2">
          {/* Small Logos */}
          <Image src={logo1} alt="Small Logo 1" className="mx-1" />
          <Image src={logo2} alt="Small Logo 2" className="mx-1" />
          <Image src={logo3} alt="Small Logo 3" className="mx-1" />
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
