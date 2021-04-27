package com.example.springtemplate.daos;

import com.example.springtemplate.models.Course;
import com.example.springtemplate.repositories.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class CourseOrmDao {
    @Autowired
    CourseRepository courseRepository;

    @PostMapping("/api/courses")
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }
    
    @GetMapping("/api/courses")
    public List<Course> findAllCourses() {
        return (List<Course>) courseRepository.findAll();
    }
    
    @GetMapping("/api/courses/{courseId}")
    public Course findCourseById(
            @PathVariable("courseId") Integer id) {
        return courseRepository.findById(id).get();
    }

    @GetMapping("/api/update/course/{courseId}/{password}")
    public Course updateCourse(
            @PathVariable("courseId") Integer id,
            @PathVariable("password") String newPass) {
        Course course = this.findCourseById(id);
        course.setTitle(newPass);
        return courseRepository.save(course);
    }

    @PutMapping("/api/courses/{courseId}")
    public Course updateCourse(
            @PathVariable("courseId") Integer id,
            @RequestBody() Course newCourse) {
        Course course = this.findCourseById(id);
        course.setTitle(newCourse.getTitle());
        return courseRepository.save(course);
    }

    @DeleteMapping("/api/courses/{courseId}")
    public void deleteCourse(
            @PathVariable("courseId") Integer id) {
        courseRepository.deleteById(id);
    }
}