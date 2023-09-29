import React from 'react';
import { useEffect } from "react";
import socketIO, { io } from 'socket.io-client';
import SidebarDesktop from "../SidebarDesktop";
import Chat from "../Chat";
import './chat-container.scss';

function ChatContainer() {
    useEffect(() => {
        // Create a WebSocket connection
        const socket = io('http://localhost:8080');
    
        // Event handler for when the connection is opened
        socket.on('connect', () => {
            console.log('Connected to the server');
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