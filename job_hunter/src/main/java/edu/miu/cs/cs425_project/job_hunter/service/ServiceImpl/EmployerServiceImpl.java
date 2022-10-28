package edu.miu.cs.cs425_project.job_hunter.service.ServiceImpl;

import edu.miu.cs.cs425_project.job_hunter.model.Employer;
import edu.miu.cs.cs425_project.job_hunter.repository.Employer_Repository;
import edu.miu.cs.cs425_project.job_hunter.service.EmployerService;
import edu.miu.cs.cs425_project.job_hunter.service.JobService;
import lombok.AllArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class EmployerServiceImpl implements EmployerService {
    private Employer_Repository employerRepo;
    @Autowired
    private JobService jobService;
    @Override
    public List<Employer> getAllEmployers() {
        return employerRepo.findAll();
    }

    @Override
    public Employer getEmployerBy_Id(Long employer_Id) {
        return employerRepo.findById(employer_Id).orElse(null);
    }

    @Override
    public Employer addNewEmployer(Employer employer) {
        return employerRepo.save(employer);
    }

    @Override
    public Employer updateEmployer(Long employer_Id, Employer employer) {
        var updateNewEmployer = employerRepo.findById(employer_Id).orElse(null);
        if(updateNewEmployer != null){
            updateNewEmployer.setCompanyName(employer.getCompanyName());
            employerRepo.save(updateNewEmployer);
        }
        return updateNewEmployer;
    }

    @Override
    public void deleteEmployerById(Long employer_Id) {
  employerRepo.deleteById(employer_Id);
    }
}
