package com.example.springtemplate.daos;

import com.example.springtemplate.models.Course;
import com.example.springtemplate.models.Section;
import com.example.springtemplate.repositories.CourseRepository;
import com.example.springtemplate.repositories.SectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class SectionOrmDao {
    @Autowired
    SectionRepository sectionRepository;

    @Autowired
    CourseRepository courseRepository;

    @PostMapping("/api/sections")
    public Section createSection(@RequestBody Section section) {
        return sectionRepository.save(section);
    }

    @PostMapping("/api/courses/{courseId}/sections")
    public Section createSectionForCourse(
            @PathVariable("courseId") Integer cid,
            @RequestBody Section section) {
        section = sectionRepository.save(section);
        Course course = courseRepository.findById(cid).get();
        section.setCourse(course);
        return sectionRepository.save(section);
    }

    @GetMapping("/api/courses/{cid}/sections")
    public List<Section> findSectionsForCourse(
            @PathVariable("cid") Integer courseId) {
        Course course = courseRepository.findById(courseId).get();
        return course.getSections();
    }
    
    @GetMapping("/api/sections")
    public List<Section> findAllSections() {
        return (List<Section>) sectionRepository.findAll();
    }
    
    @GetMapping("/api/sections/{sectionId}")
    public Section findSectionById(
            @PathVariable("sectionId") Integer id) {
        return sectionRepository.findById(id).get();
    }

    @PutMapping("/api/sections/{sectionId}")
    public Section updateSection(
            @PathVariable("sectionId") Integer id,
            @RequestBody() Section newSection) {
        Section section = this.findSectionById(id);
        section.setName(newSection.getName());
        section.setSeats(newSection.getSeats());
        section.setSemester(newSection.getSemester());
        section.setYear(newSection.getYear());
        section.setOnline(newSection.getOnline());
//        section.setStartDate(newSection.getStartDate());
        return sectionRepository.save(section);
    }

    @DeleteMapping("/api/sections/{sectionId}")
    public void deleteSection(
            @PathVariable("sectionId") Integer id) {
        sectionRepository.deleteById(id);
    }
}