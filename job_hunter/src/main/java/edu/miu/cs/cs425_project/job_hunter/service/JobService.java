package edu.miu.cs.cs425_project.job_hunter.service;

import edu.miu.cs.cs425_project.job_hunter.dto.JobDTO;
import edu.miu.cs.cs425_project.job_hunter.model.Job;
import edu.miu.cs.cs425_project.job_hunter.model.Job_Seeker;

import java.util.List;

public interface JobService {

    List<JobDTO> getAllJobs();
    JobDTO getJobBy_Id(Long jobId);
    JobDTO addNewJob(Job job);
    JobDTO updateJob(Long jobId, Job job);
    void deleteJobById(Long jobId);

    //List<Job> searchByAnything(String searchBy);

}
