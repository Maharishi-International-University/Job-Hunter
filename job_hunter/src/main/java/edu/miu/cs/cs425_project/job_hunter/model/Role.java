package edu.miu.cs.cs425_project.job_hunter.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name= "roles")
public class Role {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private  Long role_id;
    @NotBlank(message = "username is not empty")
    private String roleName;
//    @ManyToMany(mappedBy = "roles",cascade = CascadeType.ALL)
//    private List<User> users;
}
