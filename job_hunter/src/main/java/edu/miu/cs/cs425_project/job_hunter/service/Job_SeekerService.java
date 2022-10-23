package edu.miu.cs.cs425_project.job_hunter.service;

import edu.miu.cs.cs425_project.job_hunter.model.Job;
import edu.miu.cs.cs425_project.job_hunter.model.Job_Seeker;

import java.util.List;

public interface Job_SeekerService {

    List<Job_Seeker> getAllJobSeekers();
   Job_Seeker getJob_SeekerBy_Id(Long job_seekerId);
    Job_Seeker addNewJob_Seeker(Job_Seeker seeker);
   Job_Seeker updateJob_Seeker(Long job_seekerId, Job_Seeker seeker);
   void deleteById(Long job_seekerId);
//   List<Job> searchJob(String searchJob);

    List<Job> searchJob(String searchJob, String searchJob1);
}
