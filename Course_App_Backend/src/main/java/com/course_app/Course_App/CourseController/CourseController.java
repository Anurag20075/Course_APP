package com.course_app.Course_App.CourseController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<CourseEntity>> getCourses() {
        return ResponseEntity.ok(courseService.getCourses());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseEntity> getCourse(@PathVariable Long id) {
        return ResponseEntity.ok(courseService.getCourse(id));
    }

    @PostMapping("/add")
    public ResponseEntity<CourseEntity> addCourse(@Valid @RequestBody CourseEntity course) {
        return ResponseEntity.ok(courseService.addCourse(course));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable Long id) {
        courseService.deleteCourse(id);
        return ResponseEntity.ok("Course deleted successfully");
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<CourseEntity> updateCourse(@PathVariable Long id, @Valid @RequestBody CourseEntity course) {
        return ResponseEntity.ok(courseService.updateCourse(id, course));
    }

    @GetMapping("/search")
    public ResponseEntity<List<CourseEntity>> searchCourses(@RequestParam String query) {
        return ResponseEntity.ok(courseService.searchCourses(query));
    }
}