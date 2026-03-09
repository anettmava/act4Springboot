import React, { useState } from "react";

function FormularioAlumno() {
  const [studentData, setstudentData] = useState({
    nombre: "",
    carrera: "",
    matricula: "",
    campus: "",
    correo: ""
  });

  const handleChange = (e) => {
    setstudentData({
      ...studentData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", studentData);
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
        name="carrera"
        placeholder="Carrera"
        value={studentData.carrera}
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
        name="campus"
        placeholder="Campus"
        value={studentData.campus}
        onChange={handleChange}
      />

      <br />

      <input
        type="email"
        name="correo"
        placeholder="Correo"
        value={studentData.correo}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioAlumno;