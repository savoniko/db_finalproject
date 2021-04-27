const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const SectionEditorInline = ({section, deleteSection, updateSection}) => {
    const [sectionCopy, setSectionCopy] = useState(section)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={sectionCopy.name}
                            onChange={(e)=>setSectionCopy(sectionCopy => ({...sectionCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={sectionCopy.seats}
                            onChange={(e)=>setSectionCopy(sectionCopy => ({...sectionCopy, seats: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={sectionCopy.semester}
                            onChange={(e)=>setSectionCopy(sectionCopy => ({...sectionCopy, semester: e.target.value}))}>
                            <option>FALL</option>
                            <option>SPRING</option>
                            <option>SUMMER</option>
                        </select>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={sectionCopy.year}
                            onChange={(e)=>setSectionCopy(sectionCopy => ({...sectionCopy, year: parseInt(e.target.value)}))}/>
                    </div>
                    <div className="col">
                        <label>
                        <input
                            type="checkbox"
                            checked={sectionCopy.online}
                            onChange={(e)=>setSectionCopy(sectionCopy => ({...sectionCopy, online: e.target.checked}))}/>
                            &nbsp;
                            Online
                        </label>
                    </div>
                    <div className="col">
                        <input
                            type="date"
                            className="form-control"
                            value={sectionCopy.startDate}
                            onChange={(e)=>setSectionCopy(sectionCopy => ({...sectionCopy, startDate: e.target.value}))}/>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateSection(sectionCopy.id, sectionCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteSection(section.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/sections/${sectionCopy.id}`}>
                            {sectionCopy.name}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/sections/${sectionCopy.id}`}>
                            {sectionCopy.seats}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/sections/${sectionCopy.id}`}>
                            {sectionCopy.semester}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/sections/${sectionCopy.id}`}>
                            {sectionCopy.year}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/sections/${sectionCopy.id}`}>
                            {sectionCopy.online && 'Online'}
                            {!sectionCopy.online && 'On Campus'}
                        </Link>
                    </div>
                    <div className="col-1">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default SectionEditorInline;