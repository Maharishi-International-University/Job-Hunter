package edu.miu.cs.cs425_project.job_hunter.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name= "job_seekers")
public class Job_Seeker {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long job_seeker_id;
    private Integer experienceYear;
    private String firstName;
    private String lastName;
    private  Character gender;
}
