package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Course;
import com.example.springtemplate.models.Section;
import org.springframework.data.repository.CrudRepository;

public interface SectionRepository
        extends CrudRepository<Section, Integer> {
}
