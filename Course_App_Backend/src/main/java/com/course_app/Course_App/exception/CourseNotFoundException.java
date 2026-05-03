package com.course_app.Course_App.exception;

public class CourseNotFoundException extends RuntimeException {
    private Long courseId;

    public CourseNotFoundException(Long courseId) {
        super("Course not found for id: " + courseId);
        this.courseId = courseId;
    }

    public Long getCourseId() {
        return courseId;
    }
}
