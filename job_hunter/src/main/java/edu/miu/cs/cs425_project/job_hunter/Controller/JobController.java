package edu.miu.cs.cs425_project.job_hunter.Controller;

import edu.miu.cs.cs425_project.job_hunter.dto.JobDTO;
import edu.miu.cs.cs425_project.job_hunter.model.Job;
import edu.miu.cs.cs425_project.job_hunter.service.JobService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = { "/jobHunter"})
public class JobController {

    @Autowired
    private JobService jobService;

    @GetMapping(value = {"/list/jobs"})
    public ResponseEntity<List<JobDTO>> getAllJobs() {
        var allJobs = jobService.getAllJobs();
        return ResponseEntity.ok(allJobs);
    }

    @GetMapping(path = {"/get/{jobId}"})
    public ResponseEntity<JobDTO> getJobById(@PathVariable Long jobId) {
        return ResponseEntity.ok(jobService.getJobBy_Id(jobId));
    }

    @PostMapping(value = {"/addnewjob"})
    public ResponseEntity<JobDTO> addNewJob(@Valid @RequestBody Job job){
        return ResponseEntity.ok(jobService.addNewJob(job));
    }
    @PutMapping(path = {"/update/{jobId}"})
    public ResponseEntity<JobDTO> updateJob(@PathVariable Long jobId, @RequestBody Job job){
        return ResponseEntity.ok(jobService.updateJob(jobId,job));
    }

    @DeleteMapping(value = {"/delete/{jobId}"})
    public ResponseEntity<Void> deleteJobById(@PathVariable Long jobId)  {
        jobService.deleteJobById(jobId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}