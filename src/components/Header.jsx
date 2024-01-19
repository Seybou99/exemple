import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  useEffect(() => {
    const navEl = document.querySelector('.navbar');
    if (navEl) {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 95) {
          navEl.classList.add('navbar-scrolled');
          navEl.classList.add('fixed-top');
        } else {
          navEl.classList.remove('navbar-scrolled');
          navEl.classList.remove('fixed-top');
        }
      });
    }
  }, []);
  return (
    <Navbar collapseOnSelect expand="sm" class="navbar navbar-expand-sm navbar-light fixed-top">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">  
            <img
            src="https://triagency.fr/assets/img/logo_lba.png" 
            width="275"
            height="75"
            className="d-inline-block align-top"
            alt="Logo"
            style={{ maxWidth: '100%' }}
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/mentions-legales">À Propos</Nav.Link>
            <Nav.Link href="/partenariat">Partenariat Entreprise</Nav.Link>
            <Nav.Link href="/candidature">Candidature</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
