import { Container, Spinner } from "react-bootstrap";
import { Link } from "react-router";
import turno from "../../../public/turnos.png";
import { useEffect, useState } from "react";

const Turnos = () => {
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
    <Container className="sistema-estudiante">
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
                class="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
              </svg>
            </Link>
          </div>
          <h2>Optimiza la gestión de turnos en tu Clínica</h2>
          <section>
            <div>
              <p>
                Nuestro sistema de gestión de turnos está diseñado para
                facilitar y automatizar la organización de citas. Brindamos una
                herramienta moderna que ahorra tiempo, mejora la experiencia del
                paciente y optimiza tus recursos.
              </p>
            </div>
            <div className="text-center">
              <img
                src={turno}
                className="w-75"
                alt="Sistema de autogestión turno"
              />
            </div>
            <div>
              <h4>Beneficios principales</h4>
              <ul>
                <li>
                  <strong>Eficiencia:</strong> Menor tiempo perdido en la
                  asignación y reprogramación de turnos.
                </li>
                <li>
                  <strong>Accesibilidad:</strong> Plataforma disponible 24/7
                  para pacientes y administradores.
                </li>
                <li>
                  <strong>Personalización:</strong> Configuración adaptada a las
                  necesidades de tu clínica.
                </li>
              </ul>
            </div>
            <div>
              <h4>Funcionalidades:</h4>
              <ul>
                <li>
                  <strong>Reservas en línea:</strong> Los pacientes pueden programar sus citas
                  desde cualquier dispositivo.
                </li>
                <li>
                  <strong>Recordatorios automáticos:</strong> Notificaciones para minimizar
                  ausencias.
                </li>
                <li>
                  <strong>Gestión centralizada:</strong> Panel intuitivo para administrar turnos
                  y horarios del personal.
                </li>
                <li>
                  <strong>Estadísticas:</strong> Informes detallados para mejorar la
                  planificación y los resultados.
                </li>
              </ul>
            </div>
            <div>
              <p>
                Con nuestra solución, transformarás la experiencia de tus
                pacientes y simplificarás la gestión de tu clínica.
              </p>
            </div>
          </section>
        </>
      )}
    </Container>
  );
};

export default Turnos;
