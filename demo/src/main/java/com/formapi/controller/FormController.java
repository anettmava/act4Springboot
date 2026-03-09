package com.formapi.controller;

import com.formapi.services.FormService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/form")
public class FormController {

    private final FormService formService;

    public FormController(FormService formService) {
        this.formService = formService;
    }

    @PostMapping("/submit")
    public String submitForm(@RequestBody Map<String, String> formData) {

        return formService.processForm(formData);

    }
}