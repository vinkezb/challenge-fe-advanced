import React from 'react';
import { useSelector } from 'react-redux';
import { UserState } from '../../store';
import UserComponent from '../../components/UserComponent';
import './chat.scss';

function Chat () {
    const messages = useSelector((state: UserState) => state.messages.messages)
    return (
        <div className="chat">
            {messages.map((message, index) => (
                <UserComponent message={message} key={`message_${index}`}/>
            ))}
        </div>
    )
}

export default Chat;
