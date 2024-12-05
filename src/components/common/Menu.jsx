import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../public/MateTransparente.png";
import { Link } from "react-router";


const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-lg p-3 rounded">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img className="img-logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#sobre-nosotros" className="item-menu">Sobre nosotros</Nav.Link>
              <Nav.Link href="#servicios" className="item-menu">Servicios</Nav.Link>
              <Nav.Link href="#logros" className="item-menu">Logros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;