package com.course_app.Course_App.CourseController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.course_app.Course_App.Entity.CourseEntity;
import com.course_app.Course_App.Service.CourseService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @GetMapping("")
    public List<CourseEntity> getCourses() {
        return courseService.getCourses();
    }

    @GetMapping("/{id}")
    public CourseEntity getCourse(@PathVariable Long id) {
        return courseService.getCourse(id);
    }

    @PostMapping("/add")
    public CourseEntity addCourse(@Valid @RequestBody CourseEntity course) {
        return courseService.addCourse(course);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteCourse(@PathVariable Long id) {
        return courseService.deleteCourse(id);
    }

    @PutMapping("/update/{id}")
    public CourseEntity updateCourse(@PathVariable Long id, @Valid @RequestBody CourseEntity course) {
        return courseService.updateCourse(id, course);
    }

}
