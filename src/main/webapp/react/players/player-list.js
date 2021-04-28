const {Link, useHistory} = window.ReactRouterDOM;
import playerService from "./player-service"
const {useState, useEffect} = React;


const teamsEnum = {
    1 : "Celtics",
    2 : "Heat",
    3 : "Nets",
    4 : "Jazz",
    5 : "Clippers"
};


const cityEnum = {
    1 : "Boston",
    2 : "Miami",
    3 : "Brooklyn",
    4 : "Salt Lake City",
    5 : "Los Angeles"
};


let tempPlayerInTeams = []
var i

//filter from players

const PlayerList = () => {

    const [playerInTeams, setPlayers] = useState([])
    useEffect(() => {
        findAllPlayers()
    }, [])

    const findAllPlayers = () => {
        playerService.findAllPlayers()
            .then(players => {
                for( i = 1; i <= 5; i++) {
                    tempPlayerInTeams[i] = players.filter((player) => player.playerTeamId === i)
                }
                setPlayers(tempPlayerInTeams)
            })

    }

    const history = useHistory()

    return(
        <div >
        <div className="header">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.TLaX0ASEKjIKz9nXdsWPIQHaHa%26pid%3DApi&f=1"
                 width="15%" height="15%"/>
        </div>
        <div>
            <h1>Player List</h1>
            <button className="btn btn-primary" onClick={() => history.push("/player/editor/new")}>
                Add Player
            </button>
                {
                    playerInTeams.map(playersPerTeam => <ul className="list-group">
                        <h2>{cityEnum[playersPerTeam[0].playerTeamId.toString()] + " " +
                        teamsEnum[playersPerTeam[0].playerTeamId.toString()]}</h2>
                        {playersPerTeam.map(player =>
                        <li key={player.id} className="list-group-item">

                            <Link to={`/players/${player.id}`}>
                                {player.playerLastName},
                                {player.playerFirstName}

                            </Link>
                        </li>)
                    }
                        </ul>)

                   /* players.map(player =>
                        <li key={player.id} className="list-group-item">

                            <h2>{cityEnum[player.playerTeamId.toString()] + " " +
                                teamsEnum[player.playerTeamId.toString()]}</h2>

                            <Link to={`/players/${player.id}`}>
                                {player.playerLastName},
                                {player.playerFirstName}

                            </Link>
                        </li>)*/
                }

            </div>
        </div>

    )
}

export default PlayerList;