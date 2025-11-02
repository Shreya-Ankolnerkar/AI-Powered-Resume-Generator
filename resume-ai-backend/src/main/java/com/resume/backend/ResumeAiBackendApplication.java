package com.resume.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.resume.backend", "controller"})
public class ResumeAiBackendApplication {
    public static void main(String[] args) {
        SpringApplication.run(ResumeAiBackendApplication.class, args);
    }
}
