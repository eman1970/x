import React from 'react'
import { useContext } from 'react'
import './Profile.css'
import { UserContext } from '../../shared/provider/UserProvider'


export const Profile = () => {
    const [authUser, setAuthUser] = useContext(UserContext)
    return (
        <div className="profileWrapper">
        <div>
            <img className="profileImg" src={'https://thispersondoesnotexist.com/image'} />
            {authUser.username}
            <div className="profileDropdown">
            <span>alternativ 1</span>
            <span>alternativ 2</span>
            <span>alternativ 3</span>
            <span>alternativ 4</span>
            </div>

        </div>
        </div>
    )
}
