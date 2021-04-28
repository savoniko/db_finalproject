const {useParams, useHistory} = window.ReactRouterDOM;
import statService from "./stat-service"
const {useState, useEffect} = React;

const StatFormEditor = () => {
    const {id} = useParams()
    const [stat, setStat] = useState({})
    //const [createScreen, setCreateScreen] = useState(false)

    useEffect(() => {
        if(id !== "new") {
            findStatByPlayerId(id)
            console.log(stat)
        }
    }, []);

    const createStat = (stat) => statService.createStat({...stat, playerId: id}).then(() => history.back())

    //const findStatById = (id) => statService.findStatById(id).then(stat => setStat(stat))
    const findStatByPlayerId = (id) => statService.findStatByPlayerId(id).then(stat => setStat(stat))
    const deleteStat = (id) => statService.deleteStat(id).then(() => history.back())
    const updateStat = (id, newStat) => statService.updateStat(id, newStat).then(() => history.back())


    //const history = useHistory()


    return (
        <div>
            <h1>Stat Editor</h1>
            <label>Stat Id</label>
            <input className="form-control" value={stat.statId} onChange={(e) =>
                setStat(stat =>
                    ({...stat, statId: e.target.value}))}
            />
            <label>Points Per Game</label>
            <input className="form-control" value={stat.pointsPerGame} onChange={(e) =>
                setStat(stat =>
                    ({...stat, pointsPerGame: e.target.value}))}
            />
            <label>Rebounds Per Game</label>
            <input className="form-control" value={stat.reboundsPerGame}  onChange={(e) =>
                setStat(stat =>
                    ({...stat, reboundsPerGame: e.target.value}))}
            />
            <label>Assists Per Game</label>
            <input className="form-control" value={stat.assistsPerGame} onChange={(e) =>
                setStat(stat =>
                    ({...stat, assistsPerGame: e.target.value}))}
            />
            <label>Field Goal Percentage</label>
            <input className="form-control" value={stat.fieldGoalPercentage} onChange={(e) =>
                setStat(stat =>
                    ({...stat, fieldGoalPercentage: e.target.value}))}
            />
            <label>Three Pt Field Goal Percentage</label>
            <input className="form-control" value={stat.threePtFieldGoalPercentage} onChange={(e) =>
                setStat(stat =>
                    ({...stat, threePtFieldGoalPercentage: e.target.value}))}
            />
            <label>Free Throw Percentage</label>
            <input className="form-control" value={stat.freeThrowPercentage} onChange={(e) =>
                setStat(stat =>
                    ({...stat, freeThrowPercentage: e.target.value}))}
            />
            <label>Steals Per Game</label>
            <input className="form-control" value={stat.stealsPerGame} onChange={(e) =>
                setStat(stat =>
                    ({...stat, stealsPerGame: e.target.value}))}
            />
            <label>Blocks Per Game</label>
            <input className="form-control" value={stat.blocksPerGame} onChange={(e) =>
                setStat(stat =>
                    ({...stat, blocksPerGame: e.target.value}))}
            />
            <label>Player Id</label>
            <input className="form-control" value={id} onChange={(e) =>
                setStat(stat =>
                    ({...stat, playerId: e.target.value}))}
            />

            <br/>
            <button className="btn btn-primary"  onClick={() => updateStat(stat.statId, stat)}>Save</button>
            <button className="btn btn-danger"  onClick={() => deleteStat(stat.statId)}>Delete</button>
            <button className="btn btn-success" onClick={() => createStat(stat)}>Create</button>
            <button className="btn btn-warning" onClick={() => {history.back()}}>Cancel</button>


        </div>
    )
}

export default StatFormEditor;