package edu.miu.cs.cs425_project.job_hunter.service.ServiceImpl;

import edu.miu.cs.cs425_project.job_hunter.model.Job;
import edu.miu.cs.cs425_project.job_hunter.model.Job_Seeker;
import edu.miu.cs.cs425_project.job_hunter.repository.Job_Repository;
import edu.miu.cs.cs425_project.job_hunter.service.JobService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class JobServiceImpl  implements JobService {
    private Job_Repository jobRepo;
    @Override
    public List<Job> getAllJobs() {
        return jobRepo.findAll();
    }

    @Override
    public Job getJobBy_Id(Long jobId) {
        return jobRepo.findById(jobId).orElse(null);
    }

    @Override
    public Job addNewJob(Job job) {
        return jobRepo.save(job);
    }

    @Override
    public Job updateJob(Long jobId, Job job) {
        var jobs =jobRepo.findById(jobId).orElse(null);
        if(jobs != null){
            jobs.setTitle(jobs.getTitle());
            jobRepo.save(jobs);
        }
        return jobs;
    }

    @Override
    public void deleteJobById(Long jobId) {
      jobRepo.deleteById(jobId);
    }
}
