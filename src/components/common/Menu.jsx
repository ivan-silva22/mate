import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../public/MateTransparente.png";
import { Link, NavLink, useNavigate } from "react-router";
import { useEffect } from "react";


const Menu = () => {
  const navigate = useNavigate();

  const goToSection = (sectionId) => {
      navigate("/"); // Redirige a la página Inicio
      setTimeout(() => {
          const section = document.getElementById(sectionId);
          if (section) {
              section.scrollIntoView({ behavior: "smooth" });
          }
      }, 100); // Espera un poco para asegurarte de que el DOM se ha renderizado
  };

    return (
        <Navbar expand="lg" className="bg-body-tertiary shadow-lg p-3 rounded">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img className="img-logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => goToSection("sobre-nosotros")}  className=" item-menu">Sobre nosotros</Nav.Link>
              <Nav.Link onClick={() => goToSection("servicios")} className=" item-menu">Servicios</Nav.Link>
              <Nav.Link onClick={() => goToSection("logros")} className="item-menu">Logros</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;