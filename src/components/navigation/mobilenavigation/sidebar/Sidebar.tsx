import React from 'react'
import './Sidebar.css'

export const Sidebar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }) => {
    return (
        <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            <button onClick={() => props.drawerHandler(false)}>CLOSE sidebar</button>

            <ul>
                <li>1</li>
                <li>2</li>
            </ul>

        </div>
    )
}
