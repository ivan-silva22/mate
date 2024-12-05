import { Row, Col } from "react-bootstrap";
import logo from "../../../public/Mate.png";
import facebook from "../../../public/facebook.png";
import linkedin from "../../../public/linkedin.png";

const Footer = () => {
  return (
    <footer className="shadow-lg p-3 rounded mt-0">
      <Row className="justify-content-center text-center ">
        <Col md={6}>
          <img className="img-logo-footer" src={logo} alt="logo de Mate" />
        </Col>
        <Col md={6} className="mt-2">
          <div className="redes-sociales mt-4">
            <a className="nav-link" href="">
              <img
                className="icono-redes"
                src={facebook}
                alt="logo de facebook"
              />
            </a>
            <a className="nav-link" href="">
              <img className="icono-redes" src={linkedin} alt="logo linkedin" />
            </a>
          </div>
          <div className="mt-4">
            <p className="footer-texto">contactomate@gmail.com</p>
          </div>
        </Col>
      </Row>
      <Row className="text-center mt-2">
        <Col>
          <p className="footer-texto">
            © 2024 Mate | Todos los derechos reservados.
          </p>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
