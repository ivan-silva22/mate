import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router";
import reunionconsultoria from "../../../../public/reunionconsultoria.webp";
import consultoria from "../../../../public/consultoria.webp";
import { useEffect, useState } from "react";

const Consultoria = () => {
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
            <h1 className="subtitulo">
              Asesoramiento y Consultoría Digital: Impulsa tu Negocio con
              Estrategias Expertas
            </h1>
          </div>
          <section>
            <div>
              <p>
                ¿Necesitas orientación para llevar tu negocio al siguiente nivel
                en el entorno digital? Nuestro servicio de asesoramiento y
                consultoría digital está diseñado para identificar tus
                necesidades, resolver tus desafíos y guiarte hacia el éxito
                online.
              </p>
            </div>
            <div className="mt-5">
              <hr />
              <h2>¿Por qué elegir nuestra consultoría?</h2>
              <Row className="mt-4 justify-content-center">
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <img src={consultoria} alt="" />
                </Col>
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <ul className="card-cell">
                    <li>
                      <strong>Análisis profundo:</strong> Evaluamos tus
                      necesidades y el estado actual de tu presencia digital.
                    </li>
                    <li>
                      <strong>Estrategias personalizadas:</strong> Diseñamos un
                      plan a medida que se adapta a tus objetivos.
                    </li>
                    <li>
                      <strong>Acompañamiento continuo:</strong> Estamos contigo
                      en cada etapa del proceso.
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="mt-5">
              <hr />
              <h2>Servicios que ofrecemos</h2>
              <Row className="mt-4 justify-content-center">
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <ul>
                    <li>
                      <strong>Diagnóstico digital:</strong> Identificamos áreas
                      de mejora en tu página web, redes sociales y más.
                    </li>
                    <li>
                      <strong>Estrategia digital:</strong>
                      Diseñamos un plan de marketing adaptado a tu audiencia.
                    </li>
                    <li>
                      <strong>Capacitación:</strong> Enseñamos a tu equipo a
                      gestionar herramientas y plataformas digitales.
                    </li>
                    <li>
                      <strong>Análisis de mercado:</strong> Descubrimos
                      oportunidades en tu industria para destacar frente a la
                      competencia.
                    </li>
                  </ul>
                </Col>
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <img src={reunionconsultoria} alt="" />
                </Col>
              </Row>
            </div>

            <div>
              <p>
                Permítenos ayudarte a construir una estrategia digital ganadora.
                ¡Contáctanos para comenzar tu transformación hoy mismo!
              </p>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Consultoria;
