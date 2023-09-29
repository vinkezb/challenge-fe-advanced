import { useEffect } from "react";
import socketIO from 'socket.io-client';
import SidebarDesktop from "../SidebarDesktop";
import Chat from "../Chat";
import './chat-container.scss';

function ChatContainer() {
    useEffect(() => {
        // Create a WebSocket connection
        const socket = new socketIO.connect('http://localhost:8080');
    
        // Event handler for when the connection is opened
        socket.onopen = () => {
          console.log('WebSocket connection opened');
        };
    })
    return (
        <div className="chat-container">
            <SidebarDesktop/>
            <Chat/>
        </div>
    ) 
}

export default ChatContainer;