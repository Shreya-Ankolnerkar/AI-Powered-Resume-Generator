package com.resume.backend;

import java.io.IOException;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import com.resume.backend.service.ResumeService;

@SpringBootTest
@ActiveProfiles("test")

class ResumeAiBackendApplicationTests {
	@Autowired
	private ResumeService resumeService;

	@Test
	void contextLoads() throws IOException{
		resumeService.generateResumeResponse("I am Shreya with software Development experience.");
	}

}
