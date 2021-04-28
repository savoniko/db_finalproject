const {Link, useHistory, useParams} = window.ReactRouterDOM;
import endorsementService from "./endorsement-service"
const {useState, useEffect} = React;

const EndorsementList = () => {
    const {id} = useParams()

    const [endorsements, setEndorsements] = useState([])
    useEffect(() => {
        findEndorsementsByPlayerId()
    }, [])

    const findAllEndorsements = () => {
        endorsementService.findAllEndorsements()
            .then(endorsements => setEndorsements(endorsements))
    }

    const findEndorsementsByPlayerId = () => {
        endorsementService.findEndorsementsByPlayerId(id)
            .then(endorsements => setEndorsements(endorsements))
    }

    const new_history = useHistory()

    return(
        <div>
            <h2>Endorsement List</h2>
            <button className="btn btn-primary" onClick={() => new_history.push("/player/endorsements/editor/new")}>
                Add Endorsement
            </button>
            <ul className="list-group">
                {
                    endorsements.map(endorsement =>
                        <li key={endorsement.id} className="list-group-item">
                            <Link to={`/player/endorsements/editor/${endorsement.endorsementId}`}>
                                {endorsement.endorsementCompanyName}
                                 ({endorsement.endorsementContractDuration} year(s))

                            </Link>
                        </li>)
                }
            </ul>
            <div>
                <button className="btn btn-warning" onClick={() => history.back()}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

export default EndorsementList;
