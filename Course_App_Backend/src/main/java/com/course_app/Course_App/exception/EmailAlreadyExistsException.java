package com.course_app.Course_App.exception;

public class EmailAlreadyExistsException extends RuntimeException {
    private String email;

    public EmailAlreadyExistsException(String email) {
        super("An account with the email '" + email + "' already exists.");
        this.email = email;
    }

    public String getEmail() {
        return email;
    }
}
