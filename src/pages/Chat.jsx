import { useEffect } from "react";
import socketIO from 'socket.io-client';

function Chat() {
    useEffect(() => {
        // Create a WebSocket connection
        const socket = new socketIO.connect('http://localhost:8080');
    
        // Event handler for when the connection is opened
        socket.onopen = () => {
          console.log('WebSocket connection opened');
        };
    })
    return (
        <div className="chat"></div>
    ) 
}

export default Chat;