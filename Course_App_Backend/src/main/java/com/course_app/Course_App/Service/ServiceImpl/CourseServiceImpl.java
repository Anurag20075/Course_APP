package com.course_app.Course_App.Service.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.course_app.Course_App.Entity.CourseEntity;
import com.course_app.Course_App.Repo.CourseRepo;
import com.course_app.Course_App.Service.CourseService;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepo courseRepo;

    @Override
    public List<CourseEntity> getCourses() {
        return courseRepo.findAll();
    }

    @Override
    public String addCourse(CourseEntity course) {
        return courseRepo.save(course).toString();
    }

    @Override
    public String deleteCourse(Long id) {

        if (courseRepo.existsById(id)) {
            courseRepo.deleteById(id);
            return "Course deleted successfully";
        } else {
            return "Course not found";
        }
    }
}
