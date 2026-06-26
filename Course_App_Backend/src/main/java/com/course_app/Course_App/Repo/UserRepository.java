package com.course_app.Course_App.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.course_app.Course_App.Entity.UserEntity;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
    boolean existsByEmail(String email);
}
