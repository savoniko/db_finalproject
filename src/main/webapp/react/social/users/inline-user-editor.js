const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlinePlayerEditor = ({player, deletePlayer, updatePlayer}) => {
    const [playerCopy, setPlayerCopy] = useState(player)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={playerCopy.firstName}
                            onChange={(e)=>setPlayerCopy(playerCopy => ({...playerCopy, firstName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={playerCopy.lastName}
                            onChange={(e)=>setPlayerCopy(playerCopy => ({...playerCopy, lastName: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            className="form-control"
                            value={playerCopy.username}
                            onChange={(e)=>setPlayerCopy(playerCopy => ({...playerCopy, username: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/players/${playerCopy.id}/blogs`}>
                            Blogs
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updatePlayer(playerCopy.id, playerCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deletePlayer(player.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/players/${playerCopy.id}`}>
                            {playerCopy.firstName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/players/${playerCopy.id}`}>
                            {playerCopy.lastName}
                        </Link>
                    </div>
                    <div className="col">
                        <Link to={`/players/${playerCopy.id}`}>
                            {playerCopy.username}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/players/${playerCopy.id}/blogs`}>
                            Blogs
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

export default InlinePlayerEditor;