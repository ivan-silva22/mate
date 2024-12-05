import { Container } from "react-bootstrap";
import sistema from "../../../public/sistema.png";

const Estudiantes = () => {
  return (
    <Container className="sistema-estudiante">
      <h2>Una solución integral para la gestión educativa</h2>
      <section>
        <div>
          <p>
            Nuestro sistema de autogestión estudiantil está diseñado para
            simplificar y optimizar las tareas administrativas y académicas de
            las instituciones educativas. Proporciona a estudiantes y
            administradores una herramienta práctica, moderna y eficiente.
          </p>
        </div>
        <div>
          <img src={sistema} alt="Sistema de autogestión estudiantil" />
        </div>
        <div>
          <h4>Beneficios principales</h4>
          <ul>
            <li>
              Eficiencia: Reduce el tiempo dedicado a tareas administrativas con
              procesos automatizados.
            </li>
            <li>
              Accesibilidad: Los estudiantes pueden gestionar su experiencia
              académica desde cualquier lugar y en cualquier momento.
            </li>
            <li>
              Transparencia: Información académica actualizada en tiempo real.
            </li>
          </ul>
        </div>
        <div>
          <h4>Funcionalidades:</h4>
          <ul>
            <li>
              Inscripción en materias y exámenes de manera rápida y sencilla.
            </li>
            <li>
              Consulta de estado académico con historial de notas y materias
              cursadas.
            </li>
            <li>
              Gestión de alumnos, materias y notas desde un panel administrativo
              intuitivo.
            </li>
            <li>Soporte para informes y estadísticas académicas.</li>
          </ul>
        </div>
        <div>
          <p>
            Este sistema representa un paso hacia la modernización de la
            educación. Facilitamos la conexión entre estudiantes y sus objetivos
            académicos.
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Estudiantes;
