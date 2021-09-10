import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../components/Profile.css'
import {Link} from 'react-router-dom'

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();
    return (
        isAuthenticated && (
            <>
            <Link style={{textDecoration: 'none'}} to="/my-profile">
                <div>
                    <img className="profile" src={user.picture} alt={user.name} />
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    {/* {JSON.stringify(user, null, 2)} */}
                </div>
            </Link>
        </>
        )
    )
}

export default Profile
