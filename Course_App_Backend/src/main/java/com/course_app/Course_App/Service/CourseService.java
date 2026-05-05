package com.course_app.Course_App.Service;

import java.util.List;

import com.course_app.Course_App.Entity.CourseEntity;

public interface CourseService {
    public List<CourseEntity> getCourses();

    public CourseEntity addCourse(CourseEntity course);

    public void deleteCourse(Long id);

    public CourseEntity getCourse(Long id);

    public CourseEntity updateCourse(Long id, CourseEntity course);

    public List<CourseEntity> searchCourses(String query);
}
