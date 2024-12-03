import { Col, Container, Row, Button, Card } from "react-bootstrap";
import iconoWeb from "../../../public/desarrollo-web.png";
import iconoSistema from "../../../public/desarrollo-sistemas.png";
import iconoMantenimiento from "../../../public/mantenimiento-web.png";
import iconoSeo from "../../../public/seo.png";
import iconoIdea from "../../../public/idea.png";

const Inicio = () => {
  return (
    <main className="mt-4">
      <section className="contenedor">
        <article className="texto-portada">
          <h1>
            Conectamos tu negocio con la tecnología, como un mate conecta
            amigos.
          </h1>
          <button type="button" className="btn-contacto mt-5">
            Contáctanos
          </button>
        </article>
      </section>
      <Container className="mt-5">
        <article className="text-center">
          <h2>Nuestros servicios</h2>
          <hr />
        </article>
        <Row className="mt-5 justify-content-center">
          <Col md={4} className="d-flex justify-content-center">
            <Card className="card-shadow">
              <Card.Img className="icono-servicio" variant="top" src={iconoWeb} />
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
              <Card.Img className="icono-servicio" variant="top" src={iconoSistema} />
              <Card.Body>
                <Card.Title>Sistemas y Aplicaciones Web Personalizadas</Card.Title>
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
              <Card.Img className="icono-servicio" variant="top" src={iconoMantenimiento} />
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
              <Card.Img className="icono-servicio" variant="top" src={iconoSeo} />
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
              <Card.Img className="icono-servicio" variant="top" src={iconoIdea} />
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
      </Container>
    </main>
  );
};

export default Inicio;
