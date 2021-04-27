const {useParams, useHistory} = window.ReactRouterDOM;
import playerService from "./player-service"
const {useState, useEffect} = React;

const PlayerFormEditor = () => {
    const {id} = useParams()
    const [player, setPlayer] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findPlayerById(id)
            console.log(player)
        }
    }, []);
    const createPlayer = (player) => playerService.createPlayer(player).then(console.log("test"))

    const findPlayerById = (id) => playerService.findPlayerById(id).then(player => setPlayer(player))
    const deletePlayer = (id) => playerService.deletePlayer(id).then(() => history.back())
    const updatePlayer = (id, newPlayer) => playerService.updatePlayer(id, newPlayer).then(() => history.back())


    //const history = useHistory()


    return (
        <div>
            <h2>Player Editor</h2>
            <label>Id</label>
            <input className="form-control" value={player.id} />
            <label>Jersey Number</label>
            <input className="form-control" value={player.playerJerseyNumber} onChange={(e) =>
                setPlayer(player =>
                    ({...player, playerJerseyNumber: e.target.value}))}
            />
            <label>First Name</label>
            <input className="form-control" value={player.playerFirstName} onChange={(e) =>
                setPlayer(player =>
                    ({...player, playerFirstName: e.target.value}))}
            />
            <label>Last Name</label>
            <input className="form-control" value={player.playerLastName}  onChange={(e) =>
                setPlayer(player =>
                    ({...player, playerLastName: e.target.value}))}
            />
            <label>Username</label>
            <input className="form-control" value={player.playerUsername} onChange={(e) =>
                setPlayer(player =>
                    ({...player, playerUsername: e.target.value}))}
            />
            <label>Password</label>
            <input className="form-control" value={player.playerPassword} onChange={(e) =>
                setPlayer(player =>
                    ({...player, playerPassword: e.target.value}))}
            />
            <label>Team</label>
            <input className="form-control" value={player.playerTeamId} onChange={(e) =>
                setPlayer(player =>
                    ({...player, playerTeamId: e.target.value}))}
            />
            <label>Position</label>
            <input className="form-control" value={player.playerPositionId} onChange={(e) =>
                setPlayer(player =>
                    ({...player, playerPositionId: e.target.value}))}
            />
            <br/>
            <button className="btn btn-warning" onClick={() => {history.back()}}>Cancel</button>
            <button className="btn btn-danger" onClick={() => deletePlayer(player.id)}>Delete</button>
            <button className="btn btn-primary"  onClick={() => updatePlayer(player.id, player)}>Save</button>
            <button className="btn btn-success" onClick={() => createPlayer(player)}>Create</button>
        </div>
    )
}

export default PlayerFormEditor;