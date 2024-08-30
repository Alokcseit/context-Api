import React from 'react'
import UserContext from './context/UserContext'
import { useContext } from 'react'
function Profile() {

    const {User}=useContext(UserContext)
    if(!User){
        return (
            <div>
                <h1>Profile</h1>
                <h1>Please Login</h1>
            </div>
        )
    }

    return (
        <div>
            <h1>hello {User.name}</h1>
            
            
        </div>
    )
}

export default Profile
