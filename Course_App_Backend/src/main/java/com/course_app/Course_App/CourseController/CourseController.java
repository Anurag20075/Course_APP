package com.course_app.Course_App.CourseController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.course_app.Course_App.Entity.CourseEntity;
import com.course_app.Course_App.Service.CourseService;

import jakarta.validation.Valid;

public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping()
    public List<CourseEntity> getCourses() {
        return courseService.getCourses();
    }

    @PostMapping("/add")
    public String addCourse(@Valid @RequestBody CourseEntity course) {
        return courseService.addCourse(course);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCourse(@PathVariable Long id) {
        return courseService.deleteCourse(id);
    }
}
