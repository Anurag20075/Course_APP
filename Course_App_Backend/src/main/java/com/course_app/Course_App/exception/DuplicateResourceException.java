package com.course_app.Course_App.exception;

public class DuplicateResourceException extends RuntimeException {
    private String title;

    public DuplicateResourceException(String title) {
        super("Course already exist with title " + title);
        this.title = title;
    }

    public String getTitle() {
        return title;
    }
}
