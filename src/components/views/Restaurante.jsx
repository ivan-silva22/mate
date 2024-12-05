import { Container } from "react-bootstrap";
import { Link } from "react-router";
import imgres from "../../../public/restaurante.png";
import { useEffect } from "react";

const Restaurante = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="sistema-estudiante">
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
      <h2>Potencia la presencia digital de tu restaurante</h2>
      <section>
        <div>
          <p>
          Transformamos la experiencia gastronómica al llevar tu restaurante al mundo digital. Nuestra solución ofrece un sitio web diseñado para captar clientes, gestionar reservas y destacar tu menú de manera atractiva y funcional.
          </p>
        </div>
        <div className="text-center">
          <img src={imgres} className="w-75" alt="Sistema de autogestión turno" />
        </div>
        <div>
          <h4>Beneficios principales</h4>
          <ul>
            <li>
            <strong>Mayor alcance:</strong> Llega a más clientes con una plataforma profesional y optimizada para dispositivos móviles.
            </li>
            <li>
            <strong>Personalización total:</strong> Diseño adaptado a la identidad de tu restaurante.
            </li>
            <li>
            <strong>Reservas simples:</strong> Tus clientes pueden reservar mesas directamente desde la página.
            </li>
          </ul>
        </div>
        <div>
          <h4>Funcionalidades:</h4>
          <ul>
            <li>
            Menú digital: Presenta tus platillos con descripciones, precios y fotos irresistibles.
            </li>
            <li>
            Sistema de reservas en línea: Facilita la gestión de mesas y horarios.
            </li>
            <li>
            Promociones destacadas: Muestra ofertas y eventos especiales.
            </li>
            <li>
            Conexión con redes sociales: Integra tus perfiles de Facebook, Instagram y más.
            </li>
          </ul>
        </div>
        <div>
          <p>
          Con nuestra solución, llevarás la experiencia de tu restaurante al siguiente nivel. ¡Haz que cada visita cuente, desde la primera impresión hasta la última reserva!
          </p>
        </div>
      </section>
    </Container>
  );
};

export default Restaurante;
