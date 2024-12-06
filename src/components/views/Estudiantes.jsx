import { Container, Spinner } from "react-bootstrap";
import sistema from "../../../public/sistema.png";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const Estudiantes = () => {
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
                className="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
              </svg>
            </Link>
          </div>
          <div className="mt-4 text-center">
          <h1>Una solución integral para la gestión educativa</h1>
          </div>
          <section>
            <div>
              <p>
                Nuestro sistema de autogestión estudiantil está diseñado para
                simplificar y optimizar las tareas administrativas y académicas
                de las instituciones educativas. Proporciona a estudiantes y
                administradores una herramienta práctica, moderna y eficiente.
              </p>
            </div>
            <div className="text-center">
              <img
                src={sistema}
                className="w-75"
                alt="Sistema de autogestión estudiantil"
              />
            </div>
            <div>
              <h4>Beneficios principales</h4>
              <ul>
                <li>
                  <strong>Eficiencia:</strong> Reduce el tiempo dedicado a
                  tareas administrativas con procesos automatizados.
                </li>
                <li>
                  <strong>Accesibilidad:</strong> Los estudiantes pueden
                  gestionar su experiencia académica desde cualquier lugar y en
                  cualquier momento.
                </li>
                <li>
                  <strong>Transparencia:</strong> Información académica
                  actualizada en tiempo real.
                </li>
              </ul>
            </div>
            <div>
              <h4>Funcionalidades:</h4>
              <ul>
                <li>
                  Inscripción en materias y exámenes de manera rápida y
                  sencilla.
                </li>
                <li>
                  Consulta de estado académico con historial de notas y materias
                  cursadas.
                </li>
                <li>
                  Gestión de alumnos, materias y notas desde un panel
                  administrativo intuitivo.
                </li>
                <li>Soporte para informes y estadísticas académicas.</li>
              </ul>
            </div>
            <div>
              <p>
                Este sistema representa un paso hacia la modernización de la
                educación. Facilitamos la conexión entre estudiantes y sus
                objetivos académicos.
              </p>
            </div>
          </section>
        </>
      )}
    </Container>
  );
};

export default Estudiantes;
