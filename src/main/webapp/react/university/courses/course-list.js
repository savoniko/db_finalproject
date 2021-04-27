import CourseEditorInline from "./course-editor-inline";
import courseService from "./course-service"

const COURSE_URL = "http://localhost:8080/api/courses"
const { useState, useEffect } = React;

const CourseList = () => {
    const [courses, setCourses] = useState([])
    const [newCourse, setNewCourse] = useState({})
    useEffect(() => {
        findAllCourses()
    }, [])
    const createCourse = (course) =>
        courseService.createCourse(course)
            .then(course => {
                setNewCourse({title:''})
                setCourses(courses => ([...courses, course]))
            })
    const updateCourse = (id, newCourse) =>
        courseService.updateCourse(id, newCourse)
            .then(course => setCourses(courses => (courses.map(course => course.id === id ? newCourse : course))))
    const findAllCourses = () =>
        courseService.findAllCourses()
            .then(courses => setCourses(courses))
    const deleteCourse = (id) =>
        courseService.deleteCourse(id)
            .then(courses => setCourses(courses => courses.filter(course => course.id !== id)))
    return(
        <div>
            <h2>Courses</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Course Title"
                                   title="Please enter a title for the course" className="form-control" value={newCourse.title}
                                   onChange={(e) => setNewCourse(newCourse => ({...newCourse, title: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createCourse(newCourse)}></i>
                        </div>
                    </div>
                </li>
            {
                courses.map(course =>
                    <li key={course.id} className="list-group-item">
                        <CourseEditorInline key={course._id}
                            updateCourse={updateCourse}
                            deleteCourse={deleteCourse}
                            course={course}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default CourseList;