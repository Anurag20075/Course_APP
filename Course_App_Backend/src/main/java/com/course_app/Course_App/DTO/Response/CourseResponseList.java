package com.course_app.Course_App.DTO.Response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseResponseList {
    private List<CourseResponse> courses;
    private int total;
}
