const {useParams, useHistory} = window.ReactRouterDOM;
import playerService from "./player-service"
const {useState, useEffect} = React;


const positionsEnum = {
    pointGuard : 1,
    shootingGuard: 2,
    smallForward: 3,
    powerForward: 4,
    center: 5
}

const positionsEnumValueToKey = {
    1 : "pointGuard",
    2 : "shootingGuard",
    3 : "smallForward",
    4 : "powerForward",
    5 : "center"
}

const teamsEnum = {
    celtics : 1,
    heat : 2,
    nets : 3,
    jazz : 4,
    clippers : 5

}

const PlayerFormEditor = () => {
    const {id} = useParams()
    const [player, setPlayer] = useState({})
    useEffect(() => {
        if(id !== "new") {
            findPlayerById(id)
            console.log(player)
        }
    }, []);
    const createPlayer = (player) => playerService.createPlayer(player).then(() => history.back())

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
            <label>Image URL</label>
            <input className="form-control" value={player.playerProfilePicture} onChange={(e) =>
                setPlayer(player =>
                    ({...player, playerProfilePicture: e.target.value}))}
            />
            <label>Team</label>
            <select className="form-control" onChange={(e) =>
                setPlayer(player =>
                    ({...player, playerTeamId: teamsEnum[e.target.value]}))}>
                <option value="">Select Team</option>
                <option value="celtics">Celtics</option>
                <option value="heat">Heat</option>
                <option value="nets">Nets</option>
                <option value="jazz">Jazz</option>
                <option value="clippers">Clippers</option>
            </select>
            <br/>
            {/*<input className="form-control" value={player.playerTeamId} onChange={(e) =>*/}
            {/*    setPlayer(player =>*/}
            {/*        ({...player, playerTeamId: e.target.value}))}*/}
            {/*/>*/}
            <label>Position</label>
            <select className="form-control" onChange={(e) =>
                setPlayer(player =>
                    ({...player, playerPositionId: positionsEnum[e.target.value]}))}>
                <option value="">Select Position</option>
                <option value="pointGuard">Point Guard</option>
                <option value="shootingGuard">Shooting Guard</option>
                <option value="smallForward">Small Forward</option>
                <option value="powerForward">Power Forward</option>
                <option value="center">Center</option>
            </select>
            {/*<input className="form-control" value={player.playerPositionId} onChange={(e) =>*/}
            {/*    setPlayer(player =>*/}
            {/*        ({...player, playerPositionId: e.target.value}))}*/}
            {/*/>*/}
            <br/>

            <button className="btn btn-primary"  onClick={() => updatePlayer(player.id, player)}>Save</button>
            <button className="btn btn-danger" onClick={() => deletePlayer(player.id)}>Delete</button>
            <button className="btn btn-success" onClick={() => createPlayer(player)}>Create</button>
            <button className="btn btn-warning" onClick={() => {history.back()}}>Cancel</button>

        </div>
    )
}

export default PlayerFormEditor;