import React from "react";
import "./message-component.scss";
import { Message } from "../../models";

interface Props {
  message?: Message;
}

function MessageComponent({ message }: Props) {
  const date = new Date(message?.timestamp as string);

  const hour = date.getHours();
  const minutes = date.getMinutes();
  return (
    <>
      <div className={!message?.isFromUser ? "message" : "message-from-user"}>
        <p>{message?.body}</p>
      </div>
      <p className={message?.isFromUser ? "timestamp-from-user" : "timestamp"}>
        {hour}:{minutes}
      </p>
    </>
  );
}

export default MessageComponent;
