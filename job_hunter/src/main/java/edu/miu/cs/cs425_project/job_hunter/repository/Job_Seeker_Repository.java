package edu.miu.cs.cs425_project.job_hunter.repository;

import edu.miu.cs.cs425_project.job_hunter.model.Job_Seeker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Job_Seeker_Repository extends JpaRepository<Job_Seeker,Long> {
}
