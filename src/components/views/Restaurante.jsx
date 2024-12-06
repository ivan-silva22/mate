import { Container,Spinner } from "react-bootstrap";
import { Link } from "react-router";
import imgres from "../../../public/restaurante.png";
import { useEffect, useState } from "react";

const Restaurante = () => {
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
          <div className="text-center mt-4">
          <h1>Potencia la presencia digital de tu restaurante</h1>
          </div>
          <section>
            <div>
              <p>
                Transformamos la experiencia gastronómica al llevar tu
                restaurante al mundo digital. Nuestra solución ofrece un sitio
                web diseñado para captar clientes, gestionar reservas y destacar
                tu menú de manera atractiva y funcional.
              </p>
            </div>
            <div className="text-center">
              <img
                src={imgres}
                className="w-75"
                alt="Sistema de autogestión turno"
              />
            </div>
            <div>
              <h3>Beneficios principales</h3>
              <ul>
                <li>
                  <strong>Mayor alcance:</strong> Llega a más clientes con una
                  plataforma profesional y optimizada para dispositivos móviles.
                </li>
                <li>
                  <strong>Personalización total:</strong> Diseño adaptado a la
                  identidad de tu restaurante.
                </li>
                <li>
                  <strong>Reservas simples:</strong> Tus clientes pueden
                  reservar mesas directamente desde la página.
                </li>
              </ul>
            </div>
            <div>
              <h3>Funcionalidades:</h3>
              <ul>
                <li>
                  <strong>Menú digital:</strong> Presenta tus platillos con descripciones,
                  precios y fotos irresistibles.
                </li>
                <li>
                  <strong>Sistema de reservas en línea:</strong> Facilita la gestión de mesas y
                  horarios.
                </li>
                <li>
                  <strong>Promociones destacadas:</strong> Muestra ofertas y eventos especiales.
                </li>
                <li>
                  <strong>Conexión con redes sociales:</strong> Integra tus perfiles de Facebook,
                  Instagram y más.
                </li>
              </ul>
            </div>
            <div>
              <p>
                Con nuestra solución, llevarás la experiencia de tu restaurante
                al siguiente nivel. ¡Haz que cada visita cuente, desde la
                primera impresión hasta la última reserva!
              </p>
            </div>
          </section>
        </>
      )}
    </Container>
  );
};

export default Restaurante;
