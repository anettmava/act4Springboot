
package com.formapi.controller;

import com.formapi.services.FormService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/form")
@CrossOrigin(origins = "http://localhost:5173")
public class FormController {

    private final FormService formService;

    public FormController(FormService formService) {
        this.formService = formService;
    }

    @PostMapping("/submit")
    public Map<String, String> submitStudentForm(@RequestBody Map<String, String> studentData) {

        String message = formService.processStudentForm(studentData);
        return Map.of("message", message);

    }
}