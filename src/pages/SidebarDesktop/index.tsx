import React from 'react';
import SidebarDesktopHeader from '../../components/SidebarDesktopHeader';
import './sidebar-desktop.scss';
import SidebarDesktopContent from '../../components/SidebarDesktopContent';

function SidebarDesktop () {
    return (
        <div className="sidebar">
            <SidebarDesktopHeader/>
            <SidebarDesktopContent/>
        </div>
    )
}

export default SidebarDesktop;
