import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router";
import reunion from "../../../../public/comoTrabajamos.webp";
import seo from "../../../../public/imgseo.webp";
import { useEffect, useState } from "react";

const Optimizacion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <main className="container sistema-estudiante">
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          {/* Spinner de carga */}
          <Spinner animation="grow" />
        </div>
      ) : (
        <>
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
          <div className="mt-4 text-center">
            <h1 className="subtitulo">Optimización y SEO: Impulsa Tu Presencia Digital</h1>
          </div>
          <section>
            <div>
              <p>
                En el mundo digital actual, no basta con tener una página web;
                necesitas que sea visible y eficaz. Nuestro servicio de
                optimización y SEO, ayuda a que tu negocio alcance una mejor
                posición en los motores de búsqueda, atrayendo más clientes y
                generando mayores oportunidades.
              </p>
            </div>
            <div className="mt-5">
              <hr />
              <h2>¿Qué es la Optimización y el SEO?</h2>
              <Row className="mt-4 justify-content-center">
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <img src={seo} className="w-100" alt="" />
                </Col>
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <ul className="card-cell">
                    <li>
                      <strong>Optimización:</strong> Se enfoca en mejorar la
                      velocidad, la navegación y la experiencia de usuario en tu
                      página.
                    </li>
                    <li>
                      <strong>SEO:</strong> Utiliza palabras clave, contenido
                      relevante y estrategias técnicas para posicionarte en los
                      primeros lugares de búsqueda.
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="mt-5">
              <hr />
              <h2>Nuestros Servicios de Optimización y SEO</h2>
              <Row className="mt-4 justify-content-center">
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <ul>
                    <li>
                      <strong>Optimización técnica:</strong> Mejoramos la
                      velocidad de carga y el rendimiento del sitio.
                    </li>
                    <li>
                      <strong>Investigación de palabras clave:</strong>{" "}
                      Identificamos los términos más buscados por tu público
                      objetivo.
                    </li>
                    <li>
                      <strong>Creación de contenido:</strong> Generamos textos
                      relevantes y atractivos que posicionen tu marca.
                    </li>
                    <li>
                      <strong>SEO local:</strong> Te posicionamos en tu zona
                      para atraer clientes cercanos.
                    </li>
                    <li>
                      <strong>Monitoreo y análisis:</strong> Seguimos el
                      rendimiento de tu página y ajustamos las estrategias.
                    </li>
                  </ul>
                </Col>
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <img src={reunion} alt="" />
                </Col>
              </Row>
            </div>

            <div>
              <p>
                Haz que tu página web sea más que un escaparate digital. Con
                nuestra ayuda, se convertirá en una herramienta poderosa para
                atraer clientes y destacar en tu industria. ¡Solicita una
                consulta gratuita!"
              </p>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Optimizacion;
