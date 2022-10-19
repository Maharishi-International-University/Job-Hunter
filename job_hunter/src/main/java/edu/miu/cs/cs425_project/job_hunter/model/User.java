package edu.miu.cs.cs425_project.job_hunter.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name= "users")
public class User {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private  Long user_id;
    @NotBlank(message = "username is not empty")
    private String userName;
    @NotBlank(message = "password is not empty")
    private String password;
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    /**
     * we have user_id column in role
     */
    @JoinColumn(name = "user_id")
    private List<Role> roles;
}
