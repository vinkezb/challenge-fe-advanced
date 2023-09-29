import React from 'react';
import Logo  from '../../assets/images/Logo.png';
import './sidebar-header.scss';

function SidebarDesktopHeader () {
    return (
        <div className="header">
            <img src={Logo}/>
            <div className="header-title">
                <h5>Diveedi lab</h5>
                <p>5 membri online</p>
            </div>
        </div>
    )
}

export default SidebarDesktopHeader;