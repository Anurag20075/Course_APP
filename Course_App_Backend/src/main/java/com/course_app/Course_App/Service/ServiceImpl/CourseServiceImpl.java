package com.course_app.Course_App.Service.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.course_app.Course_App.Entity.CourseEntity;
import com.course_app.Course_App.Repo.CourseRepo;
import com.course_app.Course_App.Service.CourseService;
import com.course_app.Course_App.exception.CourseNotFoundException;
import com.course_app.Course_App.exception.DuplicateResourceException;

@Service
public class CourseServiceImpl implements CourseService {

    @Autowired
    private CourseRepo courseRepo;

    @Override
    public List<CourseEntity> getCourses() {
        return courseRepo.findAll();
    }

    @Override
    public CourseEntity addCourse(CourseEntity course) {

        if (courseRepo.existsByTitle(course.getTitle())) {
            throw new DuplicateResourceException(course.getTitle());
        }

        return courseRepo.save(course);
    }

    @Override
    public String deleteCourse(Long id) {
        CourseEntity course = courseRepo.findById(id)
                .orElseThrow(() -> new CourseNotFoundException(id));
        courseRepo.delete(course);
        return "Course deleted successfully";
    }

    @Override
    public CourseEntity getCourse(Long id) {
        CourseEntity course = courseRepo.findById(id)
                .orElseThrow(() -> new CourseNotFoundException(id));
        return course;
    }

    @Override
    public CourseEntity updateCourse(Long id, CourseEntity course) {

        CourseEntity existingCourse = courseRepo.findById(id)
                .orElseThrow(() -> new CourseNotFoundException(id));

        if (course.getTitle() != null && !course.getTitle().isBlank()) {

            if (courseRepo.existsByTitle(course.getTitle()) &&
                    !existingCourse.getTitle().equals(course.getTitle())) {

                throw new DuplicateResourceException(
                        "Course already exists with title: " + course.getTitle());
            }

            existingCourse.setTitle(course.getTitle());
        }

        if (course.getDescription() != null && !course.getDescription().isBlank()) {
            existingCourse.setDescription(course.getDescription());
        }
        if (course.getInstructor() != null && !course.getInstructor().isBlank()) {
            existingCourse.setInstructor(course.getInstructor());
        }

        return courseRepo.save(existingCourse);
    }
}
