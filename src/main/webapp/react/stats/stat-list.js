const {Link, useHistory} = window.ReactRouterDOM;
import statService from "./stat-service"
const {useState, useEffect} = React;

const StatList = () => {

    const [stats, setStats] = useState([])
    useEffect(() => {
        findAllStats()
    }, [])

    const findAllStats = () => {
        statService.findAllStats()
            .then(stats => setStats(stats))
    }

    const history = useHistory()

    return(
        <div>
            <h2>Stat List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/stats/new")}>
                Add Stat
            </button>
            <ul className="list-group">
                {
                    stats.map(stat =>
                        <li key={stat.id} className="list-group-item">
                            <Link to={`/stats/${stat.statId}`}>
                                {stat.pointsPerGame},
                                {stat.reboundsPerGame},
                                {stat.assistsPerGame},
                                {stat.fieldGoalPercentage},
                                {stat.threePtFieldGoalPercentage},
                                {stat.freeThrowPercentage},
                                {stat.stealsPerGame},
                                {stat.blocksPerGame},
                                {stat.playerId},
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default StatList;
