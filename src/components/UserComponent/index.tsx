import React from 'react';
import { Avatar } from '@mui/material';
import './user-component.scss';
import { Message, User } from '../../models';
import MessageComponent from '../MessageComponent';

interface Props {
    user?: User;
    message?: Message
}

function UserComponent ({user, message} : Props) {
    return (
        <div className="user-component">
            <Avatar sx={{bgcolor: user ? user?.color : message?.user.color}}/>
            <div className={message ? "message-container" : ""}>
                <h6>{user ? user?.name : message?.user.name}</h6>
                {message && (
                    <MessageComponent message={message?.body}/>
                )}
            </div>
        </div>
    )
}

export default UserComponent;