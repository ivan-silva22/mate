import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router";
import personalizacion from "../../../../public/personalizacion.jpeg";
import imgsistema from "../../../../public/imgsistema.webp";
import { useEffect, useState } from "react";

const Sistemas = () => {
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
          <div className="text-center mt-4">
            <h1 className="subtitulo">
              Soluciones digitales hechas a medida para tu negocio
            </h1>
          </div>
          <section>
            <div>
              <p>
                Cada negocio es único, y tus herramientas digitales también
                deberían serlo. Diseñamos sistemas y aplicaciones web
                personalizadas que se adaptan a tus necesidades específicas,
                optimizando tus procesos y potenciando tus resultados.
              </p>
            </div>

            <div>
              <hr />
              <h2>¿Por Qué Elegir Soluciones Personalizadas?</h2>
              <Row className="mt-5 justify-content-center">
                <Col md={6} className="d-flex justify-content-center">
                  <ul>
                    <li>
                      <strong>Eficiencia operativa:</strong> Automatiza tareas
                      repetitivas y ahorra tiempo.
                    </li>
                    <li>
                      <strong>Escalabilidad:</strong> Adaptamos el sistema a
                      medida que crece tu negocio.
                    </li>
                    <li>
                      <strong>Integración total:</strong> Conecta tus
                      herramientas existentes para un flujo de trabajo
                      optimizado.
                    </li>
                    <li>
                      <strong>Competitividad:</strong> Obtén un sistema único
                      que te destaque en tu industria.
                    </li>
                  </ul>
                </Col>
                <Col md={6} className="d-flex justify-content-center">
                  <img src={personalizacion} alt="" />
                </Col>
              </Row>
            </div>
            <div>
              <hr />
              <h2>Tipos de Sistemas y Aplicaciones Web</h2>
              <Row className="mt-5 justify-content-center">
                <Col md={6} className="d-flex justify-content-center">
                  <img src={imgsistema} alt="" />
                </Col>
                <Col md={6} className="d-flex justify-content-center">
                  <ul className="card-cell">
                    <li>
                      <strong>Sistemas de gestión:</strong> Controla
                      inventarios, empleados, ventas y más desde un solo lugar.
                    </li>
                    <li>
                      <strong>Portales interactivos:</strong> Plataformas para
                      clientes o empleados con acceso seguro a la información.
                    </li>
                    <li>
                      <strong>E-commerce personalizados:</strong> Tiendas en
                      línea adaptadas a tus productos y mercado.
                    </li>
                    <li>
                      <strong>Aplicaciones específicas:</strong> Herramientas
                      web que cumplen funciones únicas según tus necesidades.
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div>
              <p>
                Lleva tu negocio al siguiente nivel con sistemas y aplicaciones
                web hechas para ti. En un mundo digital, tu solución
                personalizada es la clave para destacar. ¡Contáctanos y
                comencemos a construir tu éxito!
              </p>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Sistemas;
