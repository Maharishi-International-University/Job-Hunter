package edu.miu.cs.cs425_project.job_hunter.service;

import edu.miu.cs.cs425_project.job_hunter.model.Job;
import edu.miu.cs.cs425_project.job_hunter.model.Job_Seeker;

import java.util.List;

public interface JobService {

    List<Job> getAllJobs();
    Job getJobBy_Id(Long jobId);
    Job addNewJob(Job job);
    Job updateJob(Long jobId, Job job);
    void deleteJobById(Long jobId);

}
