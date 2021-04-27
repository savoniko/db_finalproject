import SectionEditorInline from "./section-editor-inline";
import sectionService, {createSectionForCourse} from "./section-service"

const COURSE_URL = "http://localhost:8080/api/sections"
const { useState, useEffect } = React;
const {Link, useParams, useHistory} = window.ReactRouterDOM;

const SectionList = () => {
    const [sections, setSections] = useState([])
    const [newSection, setNewSection] = useState({})
    const {courseId} = useParams()
    useEffect(() => {
        findSectionsForCourse(courseId)
    }, [])
    const createSectionForCourse = (section) =>
        sectionService.createSectionForCourse(courseId, section)
            .then(section => {
                setNewSection({name:''})
                setSections(sections => ([...sections, section]))
            })
    const updateSection = (id, newSection) =>
        sectionService.updateSection(id, newSection)
            .then(section => setSections(sections => (sections.map(section => section.id === id ? newSection : section))))
    const findSectionsForCourse = (courseId) =>
        sectionService.findSectionsForCourse(courseId)
            .then(sections => setSections(sections))
    const deleteSection = (id) =>
        sectionService.deleteSection(id)
            .then(sections => setSections(sections => sections.filter(section => section.id !== id)))
    return(
        <div>
            <h2>
                <Link onClick={() => history.back()}>
                    <i className="fas fa-arrow-left margin-right-10px"></i>
                </Link>
                Sections
            </h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="Section Name"
                                   title="Please enter a name for the section"
                                   className="form-control"
                                   value={newSection.title}
                                   onChange={(e) => setNewSection(newSection => ({...newSection, name: e.target.value}))}/>
                        </div>
                        <div className="col-2">
                            <i className="fas float-right fa-plus fa-2x" onClick={() => createSectionForCourse(newSection)}></i>
                        </div>
                    </div>
                </li>
            {
                sections.map(section =>
                    <li key={section.id} className="list-group-item">
                        <SectionEditorInline key={section._id}
                                             updateSection={updateSection}
                                             deleteSection={deleteSection}
                                             section={section}/>
                    </li>)
            }
            </ul>
        </div>
    )
}

export default SectionList;