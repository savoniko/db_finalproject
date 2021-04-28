const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineEndorsementEditor = ({endorsement, deleteEndorsement, updateEndorsement}) => {
    const [endorsementCopy, setEndorsementCopy] = useState(endorsement)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={endorsementCopy.endorsementId}
                            onChange={(e)=>setEndorsementCopy(endorsementCopy => ({...endorsementCopy, endorsementId: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={endorsementCopy.companyName}
                            onChange={(e)=>setEndorsementCopy(endorsementCopy => ({...endorsementCopy, companyName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={endorsementCopy.contractDuration}
                            onChange={(e)=>setEndorsementCopy(endorsementCopy => ({...endorsementCopy, contractDuration: e.target.value}))}/>
                    </div>

                    <div className="col">
                        <input
                            className="form-control"
                            value={endorsementCopy.endorsementPlayerId}
                            onChange={(e)=>setEndorsementCopy(endorsementCopy => ({...endorsementCopy, endorsementPlayerId: e.target.value}))}/>
                    </div>

                    <div className="col-1">
                        <Link to={`/endorsements/${endorsementCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateEndorsement(endorsementCopy.id, endorsementCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteEndorsement(endorsement.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/endorsements/${endorsementCopy.id}`}>
                            {endorsementCopy.endorsementId}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/endorsements/${endorsementCopy.id}`}>
                            {endorsementCopy.companyName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/endorsements/${endorsementCopy.id}`}>
                            {endorsementCopy.contractDuration}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/endorsements/${endorsementCopy.id}`}>
                            {endorsementCopy.endorsementPlayerId}
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

export default InlineEndorsementEditor;