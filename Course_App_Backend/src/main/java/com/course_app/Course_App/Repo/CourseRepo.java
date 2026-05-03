package com.course_app.Course_App.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.course_app.Course_App.Entity.CourseEntity;

public interface CourseRepo extends JpaRepository<CourseEntity, Long> {

}
