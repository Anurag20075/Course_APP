package com.course_app.Course_App.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.course_app.Course_App.Entity.CourseEntity;

public interface CourseRepo extends JpaRepository<CourseEntity, Long> {

    public boolean existsByTitle(String title);

    @Query("SELECT c FROM CourseEntity c WHERE " +
            "LOWER(c.title) LIKE LOWER(CONCAT('%', :keyword, '%')) OR " +
            "LOWER(c.instructor) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    public List<CourseEntity> searchCoursesbykeyword(@Param("keyword") String keyword);
}