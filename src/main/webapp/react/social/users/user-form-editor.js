const {useParams, useHistory} = window.ReactRouterDOM;
import userService from "./user-service"
const {useState, useEffect} = React;

const UserFormEditor = () => {
        const {id} = useParams()
        const [user, setUser] = useState({})
        useEffect(() => {
                if(id !== "new") {
                        findUserById(id)
                }
        }, []);
        const createUser = (user) => userService.createUser(user).then(() => history.back())

        const findUserById = (id) => userService.findUserById(id).then(user => setUser(user))
        const deleteUser = (id) => userService.deleteUser(id).then(() => history.back())
        const updateUser = (id, newUser) => playerService.updateUser(id, newUser).then(() => history.back())

        return (
            <div>
                    <h2>User Editor</h2>
                    <label>Id</label>
                    <input className="form-control" value={user.id} />
                    <label>First Name</label>
                    <input className="form-control" value={user.firstName} onChange={(e) =>
                        setUser(user =>
                            ({...user, firstName: e.target.value}))}
                    />
                    <label>Last Name</label>
                    <input className="form-control" value={user.lastName}  onChange={(e) =>
                        setUser(user =>
                            ({...user, lastName: e.target.value}))}
                    />
                    <label>Username</label>
                    <input className="form-control" value={user.username} onChange={(e) =>
                        setUser(user =>
                            ({...user, username: e.target.value}))}
                    />
                    <label>Password</label>
                    <input className="form-control" value={user.password} onChange={(e) =>
                        setUser(user =>
                            ({...user, password: e.target.value}))}
                    />
                    <br/>
                    <button className="btn btn-warning" onClick={() => {history.back()}}>Cancel</button>
                    <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                    <button className="btn btn-primary"  onClick={() => updateUser(user.id, user)}>Save</button>
                    <button className="btn btn-success" onClick={() => createUser(user)}>Create</button>
            </div>
        )
}

export default UserFormEditor