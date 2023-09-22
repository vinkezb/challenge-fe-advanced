import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import express from 'express';
import { textMessages, users } from './data';
import { Message } from './models';



function getRandomInteger(max: number) {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

function getRandomUser(){
  return users[getRandomInteger(users.length - 1)]
}

function getRandomMessage(){
  return textMessages[getRandomInteger(textMessages.length - 1)]
}

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {cors: { origin: "*"}});

io.on('connection', (socket) => {
  console.log('A user connected');

  const messageInterval = setInterval(() => {
    if (socket.connected) {
        let message: Message = {
          user: getRandomUser(),
          body: getRandomMessage()
        }
        io.emit('chat-message', JSON.stringify(message));
    } else {
        clearInterval(messageInterval);
    }
}, 2000);

  socket.on('chat-message', (msg) => {
    console.log('Message:', msg);
    io.emit('chat-message', msg);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


