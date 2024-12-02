import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../public/MateTransparente.png";

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-lg p-3 mb-5 rounded">
        <Container>
          <Navbar.Brand href="#home">
            <img className="img-logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="item-menu">Sobre nosotros</Nav.Link>
              <Nav.Link href="#link" className="item-menu">Servicios</Nav.Link>
              <Nav.Link href="#link" className="item-menu">Logros</Nav.Link>
              <Nav.Link href="#link" className="item-menu">Contáctanos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;