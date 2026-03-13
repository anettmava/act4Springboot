import React, { useState } from "react";
import { submitFormData } from "../services/formService";

function FormularioAlumno() {
  const [studentData, setstudentData] = useState({
    nombre: "",
    telefono: "",
    matricula: "",
    ciudad: "",
    email: ""
  });

  const handleChange = (e) => {
    setstudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = await submitFormData(studentData);

    console.log("Respuesta del backend:", data.message);
    alert(data.message);

  } catch (error) {
    console.error("Error al enviar datos:", error);
    alert(error.message || "Error al enviar datos");
  }
};
  return (
    <form onSubmit={handleSubmit} style={{ width: "300px" }}>
      <h2>Registro de Alumno</h2>

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={studentData.nombre}
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="telefono"
        placeholder="telefono"
        value={studentData.telefono}
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="matricula"
        placeholder="Matrícula"
        value={studentData.matricula}
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="ciudad"
        placeholder="ciudad"
        value={studentData.ciudad}
        onChange={handleChange}
      />

      <br />

      <input
        type="email"
        name="email"
        placeholder="email"
        value={studentData.email}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioAlumno;