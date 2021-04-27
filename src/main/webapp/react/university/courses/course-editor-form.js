import courseService from "./course-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;
const COURSE_URL = "http://localhost:8080/api/courses"

const CourseEditorForm = () => {
    const [course, setCourse] = useState({})
    const {id} = useParams()
    const history = useHistory()
    useEffect(() => {
        findCourseById(id)
    }, []);
    const findCourseById = (id) =>
        courseService.findCourseById(id)
            .then(course => setCourse(course))
    const updateCourse = (id, newCourse) =>
        courseService.updateCourse(id, newCourse)
            .then(() => history.goBack())
    const deleteCourse = (id) =>
        courseService.deleteCourse(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Course Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={course.id}/>
            <label>Title</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setCourse(course => ({...course, title: e.target.value}))}
                value={course.title}/>
            <button
                onClick={() => updateCourse(course.id, course)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteCourse(course.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default CourseEditorForm