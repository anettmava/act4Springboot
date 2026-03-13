package com.formapi.services;

import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class FormService {

    public String processStudentForm(Map<String, String> studentData) {

        String nombre   = studentData.get("nombre");
        String email    = studentData.get("email");
        String telefono = studentData.get("telefono");
        String ciudad   = studentData.get("ciudad");
        String mensaje  = studentData.get("mensaje");

        if (nombre == null || nombre.isEmpty()) {
            return "El nombre es obligatorio";
        }

        if (email == null || email.isEmpty()) {
            return "El email es obligatorio";
        }

        if (telefono == null || telefono.isEmpty()) {
            return "El teléfono es obligatorio";
        }

        if (ciudad == null || ciudad.isEmpty()) {
            return "La ciudad es obligatoria";
        }

        if (mensaje == null || mensaje.isEmpty()) {
            return "El mensaje es obligatorio";
        }

        return "Formulario recibido. Gracias, " + nombre + " (" + email + ") desde " + ciudad + ". Mensaje: " + mensaje;
    }
}