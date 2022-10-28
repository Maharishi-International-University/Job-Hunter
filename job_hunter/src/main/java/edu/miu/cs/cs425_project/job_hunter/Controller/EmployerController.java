package edu.miu.cs.cs425_project.job_hunter.Controller;

import edu.miu.cs.cs425_project.job_hunter.dto.JobDTO;
import edu.miu.cs.cs425_project.job_hunter.model.Job;
import edu.miu.cs.cs425_project.job_hunter.service.EmployerService;
import edu.miu.cs.cs425_project.job_hunter.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/employer")
public class EmployerController {

    @Autowired
    private EmployerService employerService;
    @Autowired
    private JobService jobService;

    @PostMapping("/new")
    public ResponseEntity<Void> addNewJob(@RequestBody Job job) {
        jobService.addNewJob(job);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/get/{jobId}")
    public ResponseEntity<JobDTO> getJobById(@PathVariable Long jobId){
        return ResponseEntity.ok(jobService.getJobBy_Id(jobId));
    }

    @PutMapping("/update/{jobId}")
    public ResponseEntity<JobDTO> updateJob(@PathVariable("jobId") Long jobId, @RequestBody Job job) {
        return ResponseEntity.ok(jobService.updateJob(jobId, job));
    }

    @DeleteMapping("/delete/{jobId}")
    public ResponseEntity<Void> deleteJobById(@PathVariable Long jobId) {
        jobService.deleteJobById(jobId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/list")
    public ResponseEntity<List<JobDTO>> getAllJobs() {
        return ResponseEntity.ok(jobService.getAllJobs());
    }
}
