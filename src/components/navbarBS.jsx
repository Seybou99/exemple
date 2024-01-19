import { Navbar, Nav, Container } from "react-bootstrap";

export const NavbarBootstrap = () => {
    return(
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#apropos">A propos</Nav.Link>
            <Nav.Link href="#pricing">Partenariat</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

