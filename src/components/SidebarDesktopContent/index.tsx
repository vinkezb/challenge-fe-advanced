import React from 'react';
import './sidebar-content.scss';
import { users } from '../../data';
import UserComponent from '../UserComponent';

function SidebarDesktopContent () {
    return (
        <div className="content">
            {users.map((user, index) => (
                <>
                    <UserComponent key={`user_${index}`} user={user}/>
                    {index != users.length - 1 && <hr/>}
                </>
            ))}
        </div>
    )
}

export default SidebarDesktopContent;