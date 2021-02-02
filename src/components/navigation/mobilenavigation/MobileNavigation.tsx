import React from 'react'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { Sidebar} from './sidebar/Sidebar'
import './MobileNavigation.css'
import {useState} from 'react'

export const MobileNavigation = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false)

    return (
        <div>
            <HamburgerButton />
            <Sidebar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
            <button onClick={() => setOpenDrawer(true)}>TEST</button>
             
        </div>
    )
}
