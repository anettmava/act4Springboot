package com.formapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Punto de entrada principal de la API de formularios.
 * Inicializa el contexto de Spring Boot y habilita el escaneo de componentes.
 */
@SpringBootApplication
public class FormApiApplication {

    /**
     * Arranca la aplicacion backend.
     */
    public static void main(String[] args) {
        SpringApplication.run(FormApiApplication.class, args);
    }
}
