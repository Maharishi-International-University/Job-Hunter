package edu.miu.cs.cs425_project.job_hunter.repository;

import edu.miu.cs.cs425_project.job_hunter.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
}
