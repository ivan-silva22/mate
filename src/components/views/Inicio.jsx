import { Col, Container, Row, Card } from "react-bootstrap";
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
          <a
            href="https://wa.me/543865692626?text=Hola,%20estoy%20interesado%20en%20tus%20servicios"
            target="_blank"
            className="btn-contacto mt-5"
          >
            Contáctanos
          </a>
        </article>
      </section>
      <Container className="mt-5">
        <section className="animacion-scroll">
          <article className="text-center deslizar" id="servicios">
            <hr />
            <h2>Nuestros servicios</h2>
          </article>
          <Row className="mt-5 justify-content-center deslizar">
            <Col md={4} sm={12} className="d-flex justify-content-center">
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
                    <Link className="btn btn-info" to={"/desarrollo-web"}>
                      Ver más
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} className="d-flex justify-content-center">
              <Card className="card-shadow card-cell">
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
                    Creamos herramientas digitales que impulsan tu
                    productividad.
                  </Card.Text>
                  <div className="text-center">
                    <Link className="btn btn-info" to={"/desarrollo-sistema"}>
                      Ver más
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} className="d-flex justify-content-center">
              <Card className="card-shadow card-cell">
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
                    <Link className="btn btn-info" to={"/mantenimiento"}>
                      Ver más
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} className="d-flex justify-content-center">
              <Card className="card-shadow mt-5 card-cell">
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
                    <Link className="btn btn-info" to={"/seo"}>
                      Ver más
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12} className="d-flex justify-content-center">
              <Card className="card-shadow mt-5 card-cell">
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
                    <Link className="btn btn-info" to={"/consultoria"}>
                      Ver más
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
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
                className="img-sobre-nosotros w-100"
                variant="top"
                src={imgSobreNosotros}
              />
            </Col>
          </Row>
        </section>
        <section className="my-5" id="logros">
          <article className="text-center">
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
                    Automatizamos la administración académica para mejorar la
                    experiencia tanto de estudiantes como de administradores.
                  </Card.Text>
                  <div className="text-center">
                    <Link
                      className=" btn btn-info"
                      to={"/autogestion-estudiante"}
                    >
                      Ver más
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <Card className="card-shadow card-cell">
                <Card.Img
                  className="icono-servicio"
                  variant="top"
                  src={turnos}
                />
                <Card.Body>
                  <Card.Title>Gestión de Turnos para Clínicas</Card.Title>
                  <Card.Text>
                    Un sistema intuitivo que agiliza la reserva y administración
                    de turnos médicos.
                  </Card.Text>
                  <div className="text-center">
                    <Link className="btn btn-info" to={"/autogestion-turnos"}>
                      Ver más
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <Card className="card-shadow card-cell">
                <Card.Img
                  className="icono-servicio"
                  variant="top"
                  src={utensillos}
                />
                <Card.Body>
                  <Card.Title>Web Profesional para Restaurantes</Card.Title>
                  <Card.Text>
                    Un sitio web atractivo y funcional que destaca el menú y
                    fomenta las reservas en línea.
                  </Card.Text>
                  <div className="text-center">
                    <Link className="btn btn-info" to={"/restaurante"}>
                      Ver más
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </section>
        <a
          href="https://wa.me/543865692626?text=Hola,%20estoy%20interesado%20en%20tus%20servicios"
          className="btn-whatsapp"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-whatsapp icono-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
      </Container>
    </main>
  );
};

export default Inicio;
