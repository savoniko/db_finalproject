const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const CourseEditorInline = ({course, deleteCourse, updateCourse}) => {
    const [courseCopy, setCourseCopy] = useState(course)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={courseCopy.title}
                            onChange={(e)=>setCourseCopy(courseCopy => ({...courseCopy, title: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/courses/${courseCopy.id}/sections`}>
                            Sections
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateCourse(courseCopy.id, courseCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteCourse(course.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/courses/${courseCopy.id}`}>
                            {courseCopy.title}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/courses/${courseCopy.id}/sections`}>
                            Sections
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default CourseEditorInline;