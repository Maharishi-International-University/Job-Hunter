package edu.miu.cs.cs425_project.job_hunter.service.ServiceImpl;

import edu.miu.cs.cs425_project.job_hunter.dto.JobDTO;
import edu.miu.cs.cs425_project.job_hunter.model.Job;
import edu.miu.cs.cs425_project.job_hunter.model.Job_Seeker;
import edu.miu.cs.cs425_project.job_hunter.repository.Job_Repository;
import edu.miu.cs.cs425_project.job_hunter.service.JobService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class JobServiceImpl implements JobService {

    private Job_Repository jobRepository;
    private ModelMapper modelMapper;

    @Override
    public List<Job> getAllJobs() {
        return  jobRepository.findAll(Sort.by(Sort.Direction.ASC, "title"));
    }

    @Override
    public Job getJobBy_Id(Long jobId) {

        return jobRepository.findById(jobId).get();
    }

    @Override
    public Job addNewJob(Job job) {

        return jobRepository.save(job);
    }

    @Override
    public Job updateJob(Long jobId, Job job) {

        var updatedJob = jobRepository.findById(jobId);
        Job job1 = null;

        if (updatedJob.isPresent()) {
            job1 =  updatedJob.stream()
                    .map(newjob -> {
                        newjob.setJob_id(job.getJob_id());
                        newjob.setTitle(job.getTitle());
                        newjob.setPostDate(job.getPostDate());
                        newjob.setExpirationDate(job.getExpirationDate());
                        newjob.setDescription(job.getDescription());
                        newjob.setEmployer(job.getEmployer());
                        return newjob;
                    })
                    .findFirst()
                    .get();
            jobRepository.save(job1);

        } else {
            throw new IllegalStateException("There is something wrong with the id Number");
        }
        return job1;
    }

    @Override
    public void deleteJobById(Long jobId) {
        jobRepository.deleteById(jobId);
    }

    @Override
    public List<Job> searchByAnyTitle(String searchBy) {

        var allJobs = jobRepository.findAll();
        return allJobs.stream()
                .filter(jobs -> jobs.getTitle().contains(searchBy))
                .collect(Collectors.toList());
        //return jobRepository.findAllByTitleContains(searchBy);
    }

//    @Override
//    public List<Job> searchByAnything(String searchBy) {
//        return jobRepository.findAllByTitleAndDescriptionAndJob_idAndPostDate(searchBy);

}