package edu.miu.cs.cs425_project.job_hunter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JobHunterApplication {

    public static void main(String[] args) {
        SpringApplication.run(JobHunterApplication.class, args);
        System.out.println("Hello spring");
    }

}