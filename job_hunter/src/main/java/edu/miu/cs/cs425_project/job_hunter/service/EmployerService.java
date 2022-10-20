package edu.miu.cs.cs425_project.job_hunter.service;

import edu.miu.cs.cs425_project.job_hunter.model.Address;
import edu.miu.cs.cs425_project.job_hunter.model.Employer;

import java.util.List;

public interface EmployerService {
    List<Employer> getAllEmployers();
    Employer getEmployerBy_Id(Long employer_Id);
    Employer addNewEmployer(Employer employer);
    Employer updateEmployer(Long employer_Id, Employer employer);
    void deleteEmployerById(Long employer_Id);
}
