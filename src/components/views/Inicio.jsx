import { Col, Container, Row, Button, Card, Form } from "react-bootstrap";
import iconoWeb from "../../../public/desarrollo-web.png";
import iconoSistema from "../../../public/desarrollo-sistemas.png";
import iconoMantenimiento from "../../../public/mantenimiento-web.png";
import iconoSeo from "../../../public/seo.png";
import iconoIdea from "../../../public/idea.png";
import imgSobreNosotros from "../../../public/sobre-nosotros.webp";
import estudiante from "../../../public/estudiante.png";
import turnos from "../../../public/calendario.png";
import utensillos from "../../../public/utensilios.png";
import { Link } from "react-router";


const Inicio = () => {
  return (
    <main>
      <section className="contenedor">
        <article className="texto-portada">
          <h1>
            Conectamos tu negocio con la tecnología, como un mate conecta
            amigos.
          </h1>
          <a href="#contacto" className="btn-contacto mt-5">
            Contáctanos
          </a>
        </article>
      </section>
      <Container className="mt-5">
        <article className="text-center" id="servicios">
        <hr />
          <h2>Nuestros servicios</h2>
        </article>
        <Row className="mt-5 justify-content-center">
          <Col md={4} className="d-flex justify-content-center">
            <Card className="card-shadow">
              <Card.Img
                className="icono-servicio"
                variant="top"
                src={iconoWeb}
              />
              <Card.Body>
                <Card.Title>Desarrollo Web</Card.Title>
                <Card.Text>
                  Transformamos tu idea en una presencia digital efectiva.
                </Card.Text>
                <div className="text-center">
                  <Button className="btn-info">Ver más</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card className="card-shadow">
              <Card.Img
                className="icono-servicio"
                variant="top"
                src={iconoSistema}
              />
              <Card.Body>
                <Card.Title>
                  Sistemas y Aplicaciones Web Personalizadas
                </Card.Title>
                <Card.Text>
                  Creamos herramientas digitales que impulsan tu productividad.
                </Card.Text>
                <div className="text-center">
                  <Button className="btn-info">Ver más</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card className="card-shadow">
              <Card.Img
                className="icono-servicio"
                variant="top"
                src={iconoMantenimiento}
              />
              <Card.Body>
                <Card.Title>Mantenimiento</Card.Title>
                <Card.Text>
                  Cuida tu página web, nosotros nos encargamos del resto.
                </Card.Text>
                <div className="text-center">
                  <Button className="btn-info">Ver más</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mt-5">
            <Card className="card-shadow">
              <Card.Img
                className="icono-servicio"
                variant="top"
                src={iconoSeo}
              />
              <Card.Body>
                <Card.Title>Optimización y SEO</Card.Title>
                <Card.Text>
                  Haz que tu página web sea la primera opción en Google.
                </Card.Text>
                <div className="text-center">
                  <Button className="btn-info">Ver más</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center mt-5">
            <Card className="card-shadow">
              <Card.Img
                className="icono-servicio"
                variant="top"
                src={iconoIdea}
              />
              <Card.Body>
                <Card.Title> Asesoramiento y Consultoría Digital</Card.Title>
                <Card.Text>
                  Te ayudamos a construir el futuro digital de tu negocio.
                </Card.Text>
                <div className="text-center">
                  <Button className="btn-info">Ver más</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <section className="mt-5">
          <article className="text-center" id="sobre-nosotros">
          <hr />
            <h2>Sobre nosotros</h2>
          </article>
          <Row className="align-items-center justify-content-center">
            <Col md={6} className="d-flex justify-content-center">
              <p className="sobre-nosotros">
                En Mate, nuestro objetivo es ofrecer soluciones digitales de
                alta calidad que ayuden a las empresas a crecer en el entorno
                digital. Creamos páginas web, sistemas personalizados y
                aplicaciones que optimizan la productividad y mejoran la
                presencia online de nuestros clientes.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <Card.Img
                className="img-sobre-nosotros"
                variant="top"
                src={imgSobreNosotros}
              />
            </Col>
          </Row>
        </section>
        <section className="mt-5" id="logros">
        <article className="text-center" >
        <hr />
          <h2>Logros</h2>
        </article>
        <Row className="mt-5 justify-content-center">
          <Col md={4} className="d-flex justify-content-center">
            <Card className="card-shadow">
              <Card.Img
              className="icono-servicio"
                variant="top"
                src={estudiante}
              />
              <Card.Body>
                <Card.Title>Sistema de Autogestión Estudiantil</Card.Title>
                <Card.Text>
                Automatizamos la administración académica para mejorar la experiencia tanto de estudiantes como de administradores.
                </Card.Text>
                <div className="text-center">
                  <Link className=" btn btn-info" to={"/autogestion-estudiante"}  >Ver más</Link> 
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card className="card-shadow">
              <Card.Img
                className="icono-servicio"
                variant="top"
                src={turnos}
              />
              <Card.Body>
                <Card.Title>
                Gestión de Turnos para Clínicas
                </Card.Title>
                <Card.Text>
                Un sistema intuitivo que agiliza la reserva y administración de turnos médicos.
                </Card.Text>
                <div className="text-center">
                  <Button className="btn-info">Ver más</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <Card className="card-shadow">
              <Card.Img
                className="icono-servicio"
                variant="top"
                src={utensillos}
              />
              <Card.Body>
                <Card.Title>Web Profesional para Restaurantes</Card.Title>
                <Card.Text>
                Un sitio web atractivo y funcional que destaca el menú y fomenta las reservas en línea.
                </Card.Text>
                <div className="text-center">
                  <Button className="btn-info">Ver más</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </section>
      </Container>
    </main>
  );
};

export default Inicio;
