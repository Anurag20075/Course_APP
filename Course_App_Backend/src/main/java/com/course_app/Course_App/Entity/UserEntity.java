package com.course_app.Course_App.Entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data // Generates getters, setters, and toString
@Table(name = "users") // Explicitly name the table
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false)
    private String email;
    private String password;
    private String role; // e.g., "ADMIN", "USER"
    // @Column(unique= true, nullable=false)

    // private String username;

}
