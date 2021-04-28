const {useParams, useHistory} = window.ReactRouterDOM;
import endorsementService from "./endorsement-service"
const {useState, useEffect} = React;

const EndorsementFormEditor = () => {
    const {id} = useParams()
    const [endorsement, setEndorsement] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findEndorsementById(id)
            console.log(endorsement)
        }
    }, []);
    const createEndorsement = (endorsement) => endorsementService.createEndorsement(endorsement).then(() => history.back())

    const findEndorsementById = (id) => endorsementService.findEndorsementById(id).then(endorsement => setEndorsement(endorsement))
    const deleteEndorsement = (id) => endorsementService.deleteEndorsement(id).then(() => history.back())
    const updateEndorsement = (id, newEndorsement) => endorsementService.updateEndorsement(id, newEndorsement).then(() => history.back())


    //const history = useHistory()


    return (
        <div>
            <h2>Endorsement Editor</h2>
            <label>Endorsement Id</label>
            <input className="form-control" value={endorsement.endorsementId} onChange={(e) =>
                setEndorsement(endorsement =>
                    ({...endorsement, endorsementId: e.target.value}))}
            />
            <label>Company Name</label>
            <input className="form-control" value={endorsement.endorsementCompanyName} onChange={(e) =>
                setEndorsement(endorsement =>
                    ({...endorsement, endorsementCompanyName: e.target.value}))}
            />
            <label>Contract Duration</label>
            <input className="form-control" value={endorsement.endorsementContractDuration}  onChange={(e) =>
                setEndorsement(endorsement =>
                    ({...endorsement, endorsementContractDuration: e.target.value}))}
            />
            <label>Endorsement Player Id</label>
            <input className="form-control" value={endorsement.endorsementPlayerId} onChange={(e) =>
                setEndorsement(endorsement =>
                    ({...endorsement, endorsementPlayerId: e.target.value}))}
            />

            <br/>

            <button className="btn btn-danger" onClick={() => deleteEndorsement(endorsement.endorsementId)}>Delete</button>
            <button className="btn btn-primary"  onClick={() => updateEndorsement(endorsement.endorsementId, endorsement)}>Save</button>
            <button className="btn btn-success" onClick={() => createEndorsement(endorsement)}>Create</button>
            <button className="btn btn-warning" onClick={() => {history.back()}}>Cancel</button>
        </div>
    )
}

export default EndorsementFormEditor;