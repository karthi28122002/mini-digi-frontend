import React from 'react';
import "../components style/headerNav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

library.add(faPhoneFlip);

function HeaderNav() {
  return (
    <section className='Header-Nav'>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">MINI DIGI<span>.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link eventKey="1" href="#Home">Home</Nav.Link>
              <Nav.Link eventKey="2" href="#AboutUs">About</Nav.Link>
              <Nav.Link eventKey="3" href="#Services">Services</Nav.Link>
              <Nav.Link eventKey="4" href="#Blog">Blog</Nav.Link>
              <Nav.Link eventKey="5" href="#Contact"><span>Contact <FontAwesomeIcon icon={faPhoneFlip} /></span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
}

export default HeaderNav;
