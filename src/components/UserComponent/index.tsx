import React from "react";
import { Avatar } from "@mui/material";
import "./user-component.scss";
import { Message, User } from "../../models";
import MessageComponent from "../MessageComponent";

interface Props {
  user?: User;
  message?: Message;
}

function UserComponent({ user, message }: Props) {
  return (
    <div
      className={
        message?.isFromUser ? "user-component-from-user" : "user-component"
      }
    >
      <Avatar
        sx={{
          bgcolor: user ? user?.color : message?.user.color,
          order: message?.isFromUser ? 2 : 1,
        }}
      />
      <div
        className={message ? "message-container" : ""}
        style={{ order: message?.isFromUser ? 1 : 2 }}
      >
        <h6>{user ? user?.name : message?.user.name}</h6>
        {message && <MessageComponent message={message} />}
      </div>
    </div>
  );
}

export default UserComponent;
