import React from 'react'
import { HamburgerButton } from './hamburgerbutton/HamburgerButton'
import { Sidebar} from './sidebar/Sidebar'
import './MobileNavigation.css'
import {useState} from 'react'

export const MobileNavigation = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(true)

    return (
        <div>
            <HamburgerButton />
            <Sidebar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
            
             
        </div>
    )
}
