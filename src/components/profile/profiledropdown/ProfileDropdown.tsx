import React from 'react'
import './ProfileDropdown.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'




export const ProfileDropdown = () => {
    const history = useHistory()
    const [authUser, setAuthUser] = useContext(UserContext)

    const logout = () => {
        setAuthUser(false)
        localStorage.removeItem('user')
        history.push(RoutingPath.homeView)

    }

    return (
        <div className="dropdown-content">
            <span><a href="#">accessories</a></span><br />
            <span><a href="#">brands</a></span><br />
            <span><a href="#">expertis</a></span><br />
            <span><a href="#">news</a></span><br />
            <span><a href="#">shop</a></span><br />
            <span onClick={() => logout()}><a href="#">Sign Out</a></span>
        </div>
    )
}
