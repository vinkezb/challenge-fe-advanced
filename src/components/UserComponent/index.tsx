import React from 'react';
import { Avatar } from '@mui/material';
import './user-component.scss';
import { User } from '../../models';

interface Props {
    user: User;
}

function UserComponent ({user} : Props) {
    return (
        <div className="user-component">
            <Avatar sx={{bgcolor: user.color}}/>
            <h6>{user.name}</h6>
        </div>
    )
}

export default UserComponent;