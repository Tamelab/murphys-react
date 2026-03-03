'use client';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar id="topMenu" expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="#">
        <img src="/murphys-logo.png" alt="Murphy's Logo" height="55" />
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
          <Nav.Link href="#" className="text-success">
            St. Patricks Day
          </Nav.Link>
        </Nav>

<Nav>
  <Nav.Link href="#">To Go Ordering</Nav.Link>

  <Nav.Link href="#" className="ms-3">
    <Instagram className="me-2" />
    <Facebook className="me-2" />
    <Twitter />
  </Nav.Link>
</Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopMenu;