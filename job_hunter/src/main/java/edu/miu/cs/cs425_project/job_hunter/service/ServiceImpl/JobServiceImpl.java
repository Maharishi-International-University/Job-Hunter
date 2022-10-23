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
    public List<JobDTO> getAllJobs() {
        var allJobs = jobRepository.findAll(Sort.by(Sort.Direction.ASC, "title"));
        var jobDtos = new ArrayList<JobDTO>();

        allJobs.stream()
                .map(job -> jobDtos.add(modelMapper.map(job, JobDTO.class))).collect(Collectors.toList());
        return jobDtos;
    }

    @Override
    public JobDTO getJobBy_Id(Long jobId) {
        var job = jobRepository.findById(jobId);
        return modelMapper.map(job, JobDTO.class);
    }

    @Override
    public JobDTO addNewJob(Job job) {
        var job1 = jobRepository.save(job);
        return modelMapper.map(job1, JobDTO.class);
    }

    @Override
    public JobDTO updateJob(Long jobId, Job job) {

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
        return modelMapper.map(job1, JobDTO.class);
    }

    @Override
    public void deleteJobById(Long jobId) {
        jobRepository.deleteById(jobId);
    }

//    @Override
//    public List<Job> searchByAnything(String searchBy) {
//        return jobRepository.findAllByTitleAndDescriptionAndJob_idAndPostDate(searchBy);

}
