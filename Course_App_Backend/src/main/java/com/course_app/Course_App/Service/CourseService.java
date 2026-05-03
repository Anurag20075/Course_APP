package com.course_app.Course_App.Service;

import java.util.List;

import com.course_app.Course_App.Entity.CourseEntity;

public interface CourseService {
    public List<CourseEntity> getCourses();

    public String addCourse(CourseEntity course);

    public String deleteCourse(Long id);
}
