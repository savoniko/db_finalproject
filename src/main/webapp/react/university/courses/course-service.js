const COURSE_URL = "http://localhost:8080/api/courses"

export const createCourse = (course) =>
    fetch(COURSE_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const findAllCourses = () =>
    fetch(COURSE_URL)
        .then(response => response.json())

export const findCourseById = (id) =>
    fetch(`${COURSE_URL}/${id}`)
        .then(response => response.json())

export const updateCourse = (id, course) =>
    fetch(`${COURSE_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

const deleteCourse = (id) =>
    fetch(`${COURSE_URL}/${id}`, {
        method: "DELETE"
    })

export default {
    createCourse,
    findAllCourses,
    findCourseById,
    updateCourse,
    deleteCourse
}