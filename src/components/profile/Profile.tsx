import React from 'react'
import { useContext } from 'react'
import './Profile.css'
import { UserContext } from '../../shared/provider/UserProvider'


export const Profile = () => {
    const [authUser, setAuthUser] = useContext(UserContext)
    return (
        <div className="profileWrapper">

            <img className="profileImg" src={'https://thispersondoesnotexist.com/image'} />
            { authUser.username}
            <div className="profileDropdown">

                <div className="dropdown-content">
                    <span><a href="#">Mouse over me</a></span><br />
                    <span><a href="#">Mouse over me</a></span><br />
                    <span><a href="#">Mouse over me</a></span><br />
                    <span><a href="#">Mouse over me</a></span>
                </div>
            </div>
        </div >


    )
}
