package com.formapi.services;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class FormService {

    public String processForm(Map<String, String> formData) {

        String nombre = formData.get("nombre");
        String correo = formData.get("correo");
        String carrera = formData.get("carrera");
        String matricula = formData.get("matricula");
        String campus = formData.get("campus");

        if (nombre == null || nombre.isEmpty()) {
            return "El nombre es obligatorio";
        }

        if (correo == null || correo.isEmpty()) {
            return "El correo es obligatorio";
        }

        if (matricula == null || matricula.isEmpty()) {
            return "La matrícula es obligatoria";
        }


        return "Formulario recibido correctamente para el estudiante: " + nombre;
    }
}