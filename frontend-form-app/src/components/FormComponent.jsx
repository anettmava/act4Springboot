import { useState } from "react";
import { submitFormData } from "../services/formService";

function FormComponent() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    telefono: "",
    ciudad: ""
  });
  const [backendResponse, setBackendResponse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setBackendResponse("");

    try {
      const result = await submitFormData(formData);
      setBackendResponse(result.message);
    } catch (error) {
      setBackendResponse(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "0.75rem", maxWidth: "420px" }}>
        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="telefono" placeholder="Telefono" value={formData.telefono} onChange={handleChange} required />
        <input type="text" name="ciudad" placeholder="Ciudad" value={formData.ciudad} onChange={handleChange} required />
        <textarea name="mensaje" placeholder="Mensaje" value={formData.mensaje} onChange={handleChange} rows={4} required />
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Enviando..." : "Enviar"}</button>
      </form>

      <p style={{ marginTop: "1rem" }}>
        <strong>Respuesta backend:</strong> {backendResponse || "Aun sin respuesta"}
      </p>
    </section>
  );
}

export default FormComponent;
