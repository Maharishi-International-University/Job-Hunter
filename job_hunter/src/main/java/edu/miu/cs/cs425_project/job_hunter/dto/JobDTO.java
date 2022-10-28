package edu.miu.cs.cs425_project.job_hunter.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class JobDTO {

    private Long id;
    private String title;
    private LocalDate postDate;
    private LocalDate expirationDate;
    private String description;

}
