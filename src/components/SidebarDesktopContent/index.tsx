import React from 'react';
import './sidebar-content.scss';
import UserComponent from '../UserComponent';
import { useSelector } from 'react-redux';
import { UserState } from '../../store';

function SidebarDesktopContent () {
    const usersOnline = useSelector((state: UserState) => state.users.usersOnline)
    return (
        <div className="content">
            {usersOnline.map((user, index) => (
                <div key={`user_${index}`}>
                    <UserComponent  user={user}/>
                    {index != usersOnline.length - 1 && <hr />}
                </div>
            ))}
        </div>
    )
}

export default SidebarDesktopContent;