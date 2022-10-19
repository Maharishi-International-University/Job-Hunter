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
@Table(name= "companies")
public class Employer {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long employer_id;
    private String companyName;


}
