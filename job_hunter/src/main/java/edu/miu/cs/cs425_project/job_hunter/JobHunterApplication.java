package edu.miu.cs.cs425_project.job_hunter;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class JobHunterApplication {

    @Bean
    public ModelMapper getModelMapper(){
        return new ModelMapper();
    }

    public static void main(String[] args) {
        SpringApplication.run(JobHunterApplication.class, args);
        System.out.println("Hello spring");
    }

}
