const {useParams, useHistory} = window.ReactRouterDOM;
import playerService from "./player-service"
const {useState, useEffect} = React;



const PlayerInfo = () => {

    const {id} = useParams()
    const [player, setPlayer] = useState({})
    useEffect(() => {
        findPlayerById(id)
        //console.log(player)

    }, []);

    const findPlayerById = (id) => playerService.findPlayerById(id).then(player => setPlayer(player))

    const next_history = useHistory()

    return (
        <div>
            <h2>{ player.playerFirstName} {player.playerLastName}</h2>
            <div>
                <img src={player.playerProfilePicture}  />
            </div>
            <button className="btn btn-primary"  onClick={() => next_history.push(`/player/editor/${player.id}`) }>Edit Player</button>
            <button className="btn btn-success" onClick={() => next_history.push(`/player/stat/editor/${player.id}`)}>Stats</button>
            <button className="btn btn-danger" onClick={() => next_history.push(`/player/endorsements/${player.id}`)}>Endorsements</button>
            <button className="btn btn-warning" onClick={() => {history.back()}}>Cancel</button>
        </div>
    )
}


export default PlayerInfo;