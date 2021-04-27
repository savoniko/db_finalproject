const COURSE_URL = "http://localhost:8080/api/courses"
const SECTION_URL = "http://localhost:8080/api/sections"

export const createSectionForCourse = (courseId, section) =>
    fetch(`${COURSE_URL}/${courseId}/sections`, {
        method: 'POST',
        body: JSON.stringify(section),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findSectionsForCourse = (courseId) =>
    fetch(`${COURSE_URL}/${courseId}/sections`)
        .then(response => response.json())

export const findSectionById = (id) =>
    fetch(`${SECTION_URL}/${id}`)
        .then(response => response.json())

export const updateSection = (id, section) =>
    fetch(`${SECTION_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(section),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteSection = (id) =>
    fetch(`${SECTION_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createSectionForCourse,
    findSectionsForCourse,
    findSectionById,
    updateSection,
    deleteSection
}