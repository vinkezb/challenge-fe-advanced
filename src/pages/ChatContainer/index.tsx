import React from 'react';
import { useEffect } from "react";
import socketIO, { io } from 'socket.io-client';
import SidebarDesktop from "../SidebarDesktop";
import Chat from "../Chat";
import './chat-container.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../../reducers/users';

function ChatContainer() {
    const dispatch = useDispatch();
    useEffect(() => {
        // Create a WebSocket connection
        const socket = io('http://localhost:8080');
    
        // Event handler for when the connection is opened
        socket.on('connect', () => {
            console.log('Connected to the server');
        });

        socket.on('current-users', (data) => {
            dispatch(setUsers(data))
        });
    })
    return (
        <div className="chat-container">
            <SidebarDesktop/>
            <Chat/>
        </div>
    ) 
}

export default ChatContainer;