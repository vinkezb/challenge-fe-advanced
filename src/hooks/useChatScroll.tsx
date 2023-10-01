import { useEffect, useState, useRef } from "react";
import { Message } from "../models";

// Custom hook for managing chat scroll and unread message count
const useChatScroll = (messages: Message[]) => {
  const chatRef = useRef<any>(null);
  const newMessageRef = useRef<any>(null);
  const [isLookingAtOlderMessages, setIsLookingAtOlderMessages] =
    useState(true);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [unreadMessageCount, setUnreadMessageCount] = useState(0);

  const handleScroll = () => {
    const chatContainer = chatRef.current;
    const isNearBottom =
      chatContainer.scrollTop + chatContainer.clientHeight + 300 >=
      chatContainer.scrollHeight;

    setIsLookingAtOlderMessages(!isNearBottom);
    setIsAutoScrolling(isNearBottom);
  };

  useEffect(() => {
    const chatContainer = chatRef.current;
    // Scroll to the new message when it arrives
    if (!isLookingAtOlderMessages && newMessageRef.current) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const chatContainer = chatRef.current;

    chatContainer.addEventListener("scroll", handleScroll);
    handleScroll();
  }, [messages]);

  useEffect(() => {
    if (isLookingAtOlderMessages && !isAutoScrolling) {
      setUnreadMessageCount(unreadMessageCount + 1);
      console.log(unreadMessageCount);
    }
  }, [messages, isAutoScrolling, isLookingAtOlderMessages]);

  // Function to perform automatic scrolling to the bottom
  const scrollToBottom = () => {
    const chatContainer = chatRef.current;
    chatContainer.scrollTop = chatContainer.scrollHeight;
    setIsAutoScrolling(true);
    setUnreadMessageCount(0);
  };

  return {
    chatRef,
    unreadMessageCount,
    isLookingAtOlderMessages,
    scrollToBottom,
    newMessageRef,
    isAutoScrolling,
  };
};

export default useChatScroll;
