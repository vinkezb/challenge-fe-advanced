import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { UserState } from "../../store";
import UserComponent from "../../components/UserComponent";
import "./chat.scss";
import MessageInput from "../../components/MessageInput";

function Chat() {
  const messages = useSelector((state: UserState) => state.messages.messages);
  const newMessage = useRef<any>(null);
  const chatRef = useRef<any>(null);
  const [isLookingAtOlderMessages, setIsLookingAtOlderMessages] =
    useState(false);

  useEffect(() => {
    // Scroll to the new message when it arrives
    if (!isLookingAtOlderMessages && newMessage.current) {
      newMessage.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const chatContainer = chatRef.current;

    const handleScroll = () => {
      // Check if the user is near the bottom (you can adjust the threshold)
      const isNearBottom =
        chatContainer.scrollTop + chatContainer.clientHeight + 100 >=
        chatContainer.scrollHeight;

      // Update the state to reflect whether the user is looking at older messages
      setIsLookingAtOlderMessages(!isNearBottom);
    };

    // Add a scroll event listener to monitor the scroll position
    chatContainer.addEventListener("scroll", handleScroll);

    // Initial check when messages change
    handleScroll();

    return () => {
      // Clean up the event listener when the component unmounts
      chatContainer.removeEventListener("scroll", handleScroll);
    };
  }, [messages]);

  return (
    <div className="chat-template">
      <div className="chat" ref={chatRef}>
        {messages.map((message, index) => (
          <div ref={newMessage}>
            <UserComponent message={message} key={`message_${index}`} />
          </div>
        ))}
      </div>
      <MessageInput />
    </div>
  );
}

export default Chat;
