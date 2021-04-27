import User from "./user";

const { useState, useEffect } = React;

const Users = () => {
    const [users, setUsers] = useState([])
    const [newUser, setNewUser] = useState({})
    const createUser = (user) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/users`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
            .then(user => setUsers(users => ([...users, user])))
    const updateUser = (id, newUser) =>
        fetch(`http://localhost:8080/orm/update/user/${id}/${newUser.password}`)
            .then(response => response.json())
            .then(user => setUsers(users => (users.map(user => user._id === id ? newUser : user))))
    const findAllUsers = () =>
        fetch(`http://localhost:8080/orm/find/users`)
            .then(response => response.json())
            .then(users => setUsers(users))
    const deleteUser = (id) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/users/${id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(users => setUsers(users => users.filter(user => user._id !== id)))
    useEffect(() => {
        findAllUsers()
    }, [])
    return(
        <div>
            <h2>Users {users.length}</h2>
            <input value={newUser.title}
                   onChange={(e) => setNewUser(newUser => ({...newUser, title: e.target.value}))}/>
            <input value={newUser.owner}
                   onChange={(e) => setNewUser(newUser => ({...newUser, owner: e.target.value}))}/>
            <button onClick={() => createUser(newUser)}>Create</button>
            {
                users.map(user =>
                    <User key={user._id}
                        updateUser={updateUser}
                        deleteUser={deleteUser}
                        user={user}/>)
            }
        </div>
    )
}

export default Users;


