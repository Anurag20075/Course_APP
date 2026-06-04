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

    private String username;
    private String password;
    private String role; // e.g., "ADMIN", "USER"
}
