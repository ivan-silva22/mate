import { Link } from "react-router";
import reunion from "../../../../public/reunion.webp";
import { Col, Row, Spinner } from "react-bootstrap";
import mantenimiento from "../../../../public/mantenimiento.jpeg";
import { useEffect, useState  } from "react";

const Mantenimiento = () => {
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
            <h1>Mantenimiento Web: Tu Sitio Siempre en Perfecto Estado</h1>
          </div>
          <section>
            <div>
              <p>
                Un sitio web no solo debe verse bien, sino también funcionar sin
                problemas. Nuestro servicio de mantenimiento asegura que tu
                página esté actualizada, rápida y segura, para que puedas
                enfocarte en lo que realmente importa: tu negocio.
              </p>
            </div>
            <div className="mt-5">
              <hr />
              <h2>Nuestros Servicios de Mantenimiento Web</h2>
              <Row className="mt-4 justify-content-center">
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <img src={mantenimiento} alt="" />
                </Col>
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <ul className="card-cell">
                    <li>
                      <strong>Actualizaciones regulares:</strong> Sistemas,
                      plugins y contenido.
                    </li>
                    <li>
                      <strong>Resolución de errores:</strong> Detectamos y
                      solucionamos problemas técnicos rápidamente.
                    </li>
                    <li>
                      <strong>Optimización de velocidad:</strong> Aseguramos una
                      experiencia de navegación fluida.
                    </li>
                    <li>
                      <strong>Copias de seguridad:</strong> Realizamos backups
                      periódicos para proteger tu información.
                    </li>
                    <li>
                      <strong>Monitoreo continuo:</strong> Supervisamos tu sitio
                      para prevenir y actuar ante posibles inconvenientes.
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
            <div className="mt-4">
              <hr />
              <h2>Cómo Trabajamos</h2>
              <Row className=" mt-4 justify-content-center">
                <Col md={6} sm={12} className="d-flex justify-content-center">
                  <ul>
                    <li>
                      <strong>Análisis inicial:</strong> Evaluamos el estado
                      actual de tu sitio.
                    </li>
                    <li>
                      <strong>Plan personalizado:</strong> Creamos un plan de
                      mantenimiento específico para tu negocio.
                    </li>
                    <li>
                      <strong>Ejecución periódica:</strong> Implementamos las
                      actualizaciones y revisiones necesarias.
                    </li>
                    <li>
                      <strong>Reportes:</strong> Te mantenemos informado sobre
                      el estado de tu web.
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
                Un sitio web bien mantenido es una inversión en tu negocio.
                Confía en nosotros para cuidar tu página como si fuera la
                nuestra. ¡Solicita tu plan de mantenimiento hoy mismo!
              </p>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Mantenimiento;
