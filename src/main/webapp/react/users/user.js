const { useState, useEffect } = React;

const User = ({user, deleteUser, updateUser}) => {
    const [userCopy, setUserCopy] = useState(user)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                    <div>
                        <input value={userCopy.firstName} onChange={(e)=>setUserCopy(userCopy => ({...userCopy, firstName: e.target.value}))}/>
                        <input value={userCopy.lastName} onChange={(e)=>setUserCopy(userCopy => ({...userCopy, lastName: e.target.value}))}/>
                        <button onClick={() => deleteUser(user._id)}>Delete</button>
                        <button onClick={() => {
                            setEditing(false)
                            updateUser(userCopy._id, userCopy)
                        }}>Save</button>
                    </div>
            }
            {
                !editing &&
                    <div>
                        {userCopy.firstName}
                        {userCopy.lastName}
                        <button onClick={() => setEditing(true)}>Edit</button>
                    </div>
            }
        </div>
    )
}

export default User;