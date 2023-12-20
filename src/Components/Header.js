import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../assets/images/logo.png';

function Header() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Brand href="#">
          <Image src={logo} alt="Logo" fluid style={{ maxHeight: '80px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{ color: 'white' }} />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto"
            style={{
              maxHeight: '100px',
              display: 'flex',
              alignItems: 'center',
            }}
            navbarScroll
          >
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
          <Form className="d-flex">
            <Button variant="success" className="ml-2">
              Sign Up for Free
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
