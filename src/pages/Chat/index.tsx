import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { UserState } from "../../store";
import UserComponent from "../../components/UserComponent";
import "./chat.scss";
import MessageInput from "../../components/MessageInput";
import ScrollDonwButton from "../../components/ScrollDownButton";
import { ArrowDownOutlined } from "@ant-design/icons";
import useChatScroll from "../../hooks/useChatScroll";

function Chat() {
  const messages = useSelector((state: UserState) => state.messages.messages);

  const {
    chatRef,
    unreadMessageCount,
    isLookingAtOlderMessages,
    scrollToBottom,
    newMessageRef,
    isAutoScrolling,
  } = useChatScroll(messages);

  return (
    <div className="chat-template">
      <div className="chat" ref={chatRef}>
        {messages.map((message, index) => (
          <UserComponent
            ref={newMessageRef}
            //@ts-ignore
            message={message}
            key={`message_${index}`}
          />
        ))}
        {!isAutoScrolling && (
          <ScrollDonwButton
            icon={<ArrowDownOutlined />}
            onClick={() => scrollToBottom()}
            messageNumber={unreadMessageCount}
          />
        )}
      </div>
      <MessageInput />
    </div>
  );
}

export default Chat;
