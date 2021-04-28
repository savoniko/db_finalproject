const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineStatEditor = ({stat, deleteStat, updateStat}) => {
    const [statCopy, setStatCopy] = useState(stat)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={statCopy.statId}
                            onChange={(e)=>setStatCopy(statCopy => ({...statCopy, statId: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={statCopy.pointsPerGame}
                            onChange={(e)=>setStatCopy(statCopy => ({...statCopy, pointsPerGame: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={statCopy.reboundsPerGame}
                            onChange={(e)=>setStatCopy(statCopy => ({...statCopy, reboundsPerGame: e.target.value}))}/>
                    </div>

                    <div className="col">
                        <input
                            className="form-control"
                            value={statCopy.assistsPerGame}
                            onChange={(e)=>setStatCopy(statCopy => ({...statCopy, assistsPerGame: e.target.value}))}/>
                    </div>

                    <div className="col">
                        <input
                            className="form-control"
                            value={statCopy.fieldGoalPercentage}
                            onChange={(e)=>setStatCopy(statCopy => ({...statCopy, fieldGoalPercentage: e.target.value}))}/>
                    </div>

                    <div className="col">
                        <input
                            className="form-control"
                            value={statCopy.threePtFieldGoalPercentage}
                            onChange={(e)=>setStatCopy(statCopy => ({...statCopy, threePtFieldGoalPercentage: e.target.value}))}/>
                    </div>

                    <div className="col">
                        <input
                            className="form-control"
                            value={statCopy.freeThrowPercentage}
                            onChange={(e)=>setStatCopy(statCopy => ({...statCopy, freeThrowPercentage: e.target.value}))}/>
                    </div>

                    <div className="col">
                        <input
                            className="form-control"
                            value={statCopy.stealsPerGame}
                            onChange={(e)=>setStatCopy(statCopy => ({...statCopy, stealsPerGame: e.target.value}))}/>
                    </div>



                    <div className="col">
                        <input
                            className="form-control"
                            value={statCopy.blocksPerGame}
                            onChange={(e)=>setStatCopy(statCopy => ({...statCopy, blocksPerGame: e.target.value}))}/>
                    </div>

                    <div className="col">
                        <input
                            className="form-control"
                            value={statCopy.playerId}
                            onChange={(e)=>setStatCopy(statCopy => ({...statCopy, playerId: e.target.value}))}/>
                    </div>

                    <div className="col-1">
                        <Link to={`/stats/${statCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateStat(statCopy.id, statCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteStat(stat.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/stats/${statCopy.id}`}>
                            {statCopy.statId}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/stats/${statCopy.id}`}>
                            {statCopy.pointsPerGame}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/stats/${statCopy.id}`}>
                            {statCopy.reboundsPerGame}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/stats/${statCopy.id}`}>
                            {statCopy.assistsPerGame}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/stats/${statCopy.id}`}>
                            {statCopy.fieldGoalPercentage}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/stats/${statCopy.id}`}>
                            {statCopy.threePtFieldGoalPercentage}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/stats/${statCopy.id}`}>
                            {statCopy.freeThrowPercentage}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/stats/${statCopy.id}`}>
                            {statCopy.stealsPerGame}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/stats/${statCopy.id}`}>
                            {statCopy.blocksPerGame}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/stats/${statCopy.id}`}>
                            {statCopy.playerId}
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

export default InlineStatEditor;