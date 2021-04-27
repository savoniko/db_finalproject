const {Link, useHistory} = window.ReactRouterDOM;
import userService from "./user-service"
const {useState, useEffect} = React;

const UserList = () => {

    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])

    const findAllUsers = () => {
        userService.findAllUsers()
            .then(users => setUsers(users))
    }

    const history = useHistory()

    return(
        <div>
            <h2>Player List</h2>
            <button className="btn btn-primary" onClick={() => history.push("/players/new")}>
                Add Player
            </button>
            <ul className="list-group">
                {
                    users.map(user =>
                        <li key={user.id} className="list-group-item">
                            <Link to={`/players/${user.id}`}>
                            {user.playerFirstName},
                            {user.playerLastName},
                            {user.playerUsername}
                            </Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default UserList;