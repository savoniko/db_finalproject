import sectionService from "./section-service"

const {useState, useEffect} = React
const {useParams, useHistory} = window.ReactRouterDOM;

const SectionEditorForm = () => {
    const [section, setSection] = useState({})
    const {sectionId} = useParams()
    const history = useHistory()
    useEffect(() => {
        findSectionById(sectionId)
    }, []);
    const findSectionById = (id) =>
        sectionService.findSectionById(id)
            .then(section => setSection(section))
    const updateSection = (id, newSection) =>
        sectionService.updateSection(id, newSection)
            .then(() => history.goBack())
    const deleteSection = (id) =>
        sectionService.deleteSection(id)
            .then(() => history.goBack())
    
    return (
        <div>
            <h2>
                Section Editor
            </h2>
            <label>Id</label>
            <input
                className="form-control margin-bottom-10px"
                readOnly={true}
                value={section.id}/>
            <label>Name</label>
            <input
                className="form-control margin-bottom-10px"
                onChange={(e) => setSection(section => ({...section, name: e.target.value}))}
                value={section.name}/>
            <label>Seats</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={section.seats}
                onChange={(e)=>setSection(section => ({...section, seats: parseInt(e.target.value)}))}/>
            <label>Semester</label>
            <select
                className="form-control margin-bottom-10px"
                value={section.semester}
                onChange={(e)=>setSection(section => ({...section, semester: e.target.value}))}>
                <option>FALL</option>
                <option>SPRING</option>
                <option>SUMMER</option>
            </select>
            <label>Year</label>
            <input
                type="number"
                className="form-control margin-bottom-10px"
                value={section.year}
                onChange={(e)=>setSection(section => ({...section, year: parseInt(e.target.value)}))}/>
            <label className="margin-bottom-10px">
            <input
                type="checkbox"
                checked={section.online}
                onChange={(e)=>setSection(section => ({...section, online: e.target.checked}))}/>
                &nbsp;Online
            </label>
            <br/>
            <button
                onClick={() => updateSection(section.id, section)}
                className="btn btn-success btn-block">Save</button>
            <button
                onClick={() => {
                    history.goBack()
                }}
                className="btn btn-danger btn-block margin-left-10px">Cancel</button>
            <button
                onClick={() => deleteSection(section.id)}
                className="btn btn-danger btn-block margin-left-10px">Delete</button>
        </div>
    )
}

export default SectionEditorForm