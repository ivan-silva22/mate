import { Col, Row } from "react-bootstrap";
import { Link } from "react-router";
import desarrolloweb from "../../../../public/desarrolloweb.jpeg";
import trabajo from "../../../../public/trabajo.webp";

const Web = () => {
  return (
    <main className="container sistema-estudiante">
      <div>
        <Link className="btn btn-info" to={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </Link>
      </div>
      <h1 className="my-4">Páginas web que conectan a tus clientes con tus servicios</h1>
      <section>
        <div>
          <p>
            En el mundo digital, tu página web es la primera impresión que los
            clientes tienen de tu negocio. Diseñamos y desarrollamos páginas web
            que no solo reflejan la calidad de tus servicios, sino que también
            te ayudan a atraer y fidelizar clientes.
          </p>
        </div>

        <div>
          <h2>Beneficios de una Página Web Profesional</h2>
          <Row className="mt-5 justify-content-center">
            <Col md={6} className="d-flex justify-content-center">
              <ul>
                <li>
                  <strong>Visibilidad online:</strong> Aumenta tu alcance y
                  permite que tus clientes te encuentren fácilmente.
                </li>
                <li>
                  <strong>Optimización móvil:</strong> Diseños adaptados para
                  todos los dispositivos.
                </li>
                <li>
                  <strong>Credibilidad:</strong> Genera confianza y
                  profesionalismo desde la primera visita.
                </li>
              </ul>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <img src={desarrolloweb} alt="" />
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <h2>Proceso de Desarrollo</h2>
          <Row className="mt-5 justify-content-center">
            <Col md={6} className="d-flex justify-content-center">
              <img src={trabajo} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <ul>
                <li>
                  <strong>Reunión inicial:</strong> Analizamos tus necesidades y
                  objetivos.
                </li>
                <li>
                  <strong>Diseño personalizado:</strong> Creamos un boceto
                  visual que refleja tu identidad.
                </li>
                <li>
                  <strong>Desarrollo ágil:</strong> Construimos tu página web
                  con tecnologías modernas.
                </li>
                <li>
                  <strong>Lanzamiento y soporte:</strong> Te acompañamos en el
                  lanzamiento y ofrecemos soporte técnico.
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="mt-5">
          <p>
            Transforma tu negocio con una página web diseñada para destacar. En
            el mundo digital, tu presencia online marca la diferencia.
            ¡Contáctanos hoy y da el primer paso hacia el éxito!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Web;
