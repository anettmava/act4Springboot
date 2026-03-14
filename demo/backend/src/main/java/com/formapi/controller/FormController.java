
package com.formapi.controller;

import com.formapi.services.FormService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/form")
@CrossOrigin(origins = "http://localhost:5173")
// Controlador REST que expone endpoints para recibir formularios.

public class FormController {

    // Servicio que contiene la logica de validacion y procesamiento.

    private final FormService formService;

    public FormController(FormService formService) {
        this.formService = formService;
    }

    @PostMapping("/submit")
    //Recibe los datos del formulario en formato JSON y retorna un mensaje de resultado dentro de un objeto JSON.
    public Map<String, String> submitStudentForm(@RequestBody Map<String, String> studentData) {

        String message = formService.processStudentForm(studentData);
        return Map.of("message", message);

    }
}