package com.example2.demo.services;

import org.springframework.stereotype.Service;

@Service
public class HelloWorldServices {
    public String generateMessage(String name) {
        return "Hello world " + name;
    }
}
