import React from 'react';
import Logo  from '../../assets/images/Logo.png';
import './sidebar-header.scss';
import { useSelector } from 'react-redux';
import { UserState } from '../../store';

function SidebarDesktopHeader () {
    const usersOnline = useSelector((state: UserState) => state.users.usersOnline)
    return (
        <div className="header">
            <img src={Logo}/>
            <div className="header-title">
                <h5>Diveedi lab</h5>
                <p>{usersOnline.length} membri online</p>
            </div>
        </div>
    )
}

export default SidebarDesktopHeader;