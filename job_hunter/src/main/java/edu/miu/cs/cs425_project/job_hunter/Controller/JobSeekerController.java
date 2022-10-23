package edu.miu.cs.cs425_project.job_hunter.Controller;

import edu.miu.cs.cs425_project.job_hunter.dto.JobDTO;
import edu.miu.cs.cs425_project.job_hunter.model.Job;
import edu.miu.cs.cs425_project.job_hunter.model.Job_Seeker;
import edu.miu.cs.cs425_project.job_hunter.service.Job_SeekerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = { "/jobhunter"})
public class JobSeekerController {

    @Autowired
    private Job_SeekerService jobSeekerService;

    @GetMapping(value={"/searchBy/{search}/{search1}"}) // /jobhunter/searchBy/{search}/{search1}
    public ResponseEntity<List<Job>> searchJob(@PathVariable String search , @PathVariable String search1){
        return ResponseEntity.ok(jobSeekerService.searchJob(search, search1));
    }
//search
//    @PostMapping(value = {"/addnewjob"})
//    public ResponseEntity<JobDTO> addNewJob(@Valid @RequestBody Job_Seeker job_seeker){
//        return ResponseEntity.ok(jobSeekerService.addNewJob_Seeker(job_seeker);
//    }
//    @PutMapping(path = {"/update/{jobId}"})
//    public ResponseEntity<JobDTO> updateJob(@PathVariable Long jobId, @RequestBody Job_Seeker job_seeker){
//        return ResponseEntity.ok(jobSeekerService.updateJob_Seeker(jobId,job_seeker);
//    }
//
//    @DeleteMapping(value = {"/delete/{jobId}"})
//    public ResponseEntity<Void> deleteJobById(@PathVariable Long jobId)  {
//        jobSeekerService.deleteJobById(jobId);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
}
