import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main style={{ padding: "1rem" }}>
      <h1>404 - Pagina no encontrada</h1>
      <p>
        Volver a <Link to="/">Home</Link>.
      </p>
    </main>
  );
}

export default NotFound;
