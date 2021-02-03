import React from 'react'
import './Sidebar.css'
import { DesktopNavigationTabs} from '../../desktopnavigation/desktopnavigationtabs/DesktopNavigationTabs'

export const Sidebar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }) => {
    return (
        <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            <button onClick={() => props.drawerHandler(false)}>CLOSE sidebar</button>

            <DesktopNavigationTabs />
            

        </div>
    )
}
