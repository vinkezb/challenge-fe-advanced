import http from "http";
import { Socket, Server as SocketIOServer } from "socket.io";
import express from "express";
import { cssColors, textMessages, users } from "./data";
import { Message, User } from "./models";
import { v4 as uuidv4 } from "uuid";

const CHAT_MSG = "chat-message";
const USR_LOGIN = "user-login";
const USR_LOGOUT = "user-logout";
const CURRENT_USRS = "current-users";
const ME = "me";

let loggedUsers: User[] = [];

function getRandomInteger(max: number) {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

function getRandomUser() {
  return users[getRandomInteger(users.length - 1)];
}

function getRandomMessage() {
  return textMessages[getRandomInteger(textMessages.length - 1)];
}

function generateNewUser(socket: Socket): User {
  let user = {
    id: uuidv4(),
    name: socket.id,
    color: cssColors[getRandomInteger(cssColors.length - 1)],
  };
  const username = socket.handshake.query.username as string | undefined;
  if (username) {
    user.name = username;
  }
  return user;
}

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, { cors: { origin: "*" } });

io.on("connection", (socket: Socket) => {
  console.log("User connetcted");
  //generate and broadcast new user
  const newUser = generateNewUser(socket);
  loggedUsers.push(newUser);
  socket.broadcast.emit(USR_LOGIN, newUser);
  //emit current users list
  io.to(socket.id).emit(CURRENT_USRS, loggedUsers);
  //provide the client with its current data
  io.to(socket.id).emit(ME, newUser);
  //spam messages
  const messageInterval = setTimeout(() => {
    if (socket.connected) {
      let message: Message = {
        user: getRandomUser(),
        body: getRandomMessage(),
        timestamp: new Date().toDateString(),
      };
      io.emit(CHAT_MSG, message);
    } else {
      clearInterval(messageInterval);
    }
  }, 2000);

  socket.on(CHAT_MSG, (msg: Message) => {
    console.log("Message received", msg);
    io.emit(CHAT_MSG, msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
    loggedUsers = loggedUsers.filter((u) => u.id != newUser.id);
    socket.broadcast.emit(USR_LOGOUT, newUser);
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  loggedUsers = users.map((u) => {
    u.id = uuidv4();
    return u;
  });
});
