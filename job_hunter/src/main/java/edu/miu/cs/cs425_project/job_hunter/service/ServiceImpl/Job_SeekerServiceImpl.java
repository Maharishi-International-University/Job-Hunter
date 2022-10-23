package edu.miu.cs.cs425_project.job_hunter.service.ServiceImpl;

import edu.miu.cs.cs425_project.job_hunter.model.Job;
import edu.miu.cs.cs425_project.job_hunter.model.Job_Seeker;
import edu.miu.cs.cs425_project.job_hunter.repository.Job_Repository;
import edu.miu.cs.cs425_project.job_hunter.repository.Job_Seeker_Repository;
import edu.miu.cs.cs425_project.job_hunter.service.Job_SeekerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@AllArgsConstructor
public class Job_SeekerServiceImpl implements Job_SeekerService {

    private Job_Seeker_Repository jobSeekerRepo;
    private Job_Repository job_repository;

    @Override
    public List<Job_Seeker> getAllJobSeekers() {
        return jobSeekerRepo.findAll();
    }

    @Override
    public Job_Seeker getJob_SeekerBy_Id(Long job_seekerId) {
        return jobSeekerRepo.findById(job_seekerId).orElse(null);
    }

    @Override
    public Job_Seeker addNewJob_Seeker(Job_Seeker seeker) {
        return jobSeekerRepo.save(seeker);
    }

    @Override
    public Job_Seeker updateJob_Seeker(Long job_seekerId, Job_Seeker seeker) {
        var job_seeker = jobSeekerRepo.findById(job_seekerId).orElse(null);
        if(job_seeker!=null){
            job_seeker.setFirstName(seeker.getFirstName());
            jobSeekerRepo.save(job_seeker);
        }
        return job_seeker;
    }

    @Override
    public void deleteById(Long job_seekerId) {
        jobSeekerRepo.deleteById(job_seekerId);
    }

//    @Override
//    public List<Job> searchJob(String searchJob) {
//        return null;
//    }

    @Override
    public List<Job> searchJob(String searchJob, String searchJob1) {

        return job_repository.findAllByDescriptionContainsOrTitleContains(searchJob, searchJob1);

//        var allJobs= job_repository.findAll();
//         List<Job> availableJob = new ArrayList<>();


    }
}
