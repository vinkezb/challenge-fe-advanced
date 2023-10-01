import React, { useEffect, useRef, useState } from "react";
import "./message-input.scss";
import { OutlinedInput } from "@mui/material";
import ActionButton from "../ActionButton";
import { PaperClipOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "../../models";
import { UserState } from "../../store";
import { setMessages } from "../../reducers/messages";
import Popup from "../Popup";

interface Props {
  sendToBottomOnSendMessage: () => void;
}

function MessageInput({ sendToBottomOnSendMessage }: Props) {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: UserState) => state.users.currentUser
  );

  const [inputValue, setInputValue] = useState("");
  const [openTagPopup, setOpenTagPopup] = useState(false);
  const [openShareMedia, setOpenShareMedia] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Do something when Enter is pressed
      sendMessage();
    }
  };

  const sendMessage = () => {
    sendToBottomOnSendMessage();
    const message: Message = {
      user: { ...currentUser, name: "You" },
      body: inputValue,
      timestamp: new Date().toISOString(),
      isFromUser: true,
    };
    dispatch(setMessages(message));
    setInputValue("");
  };

  useEffect(() => {
    if (inputValue.includes("@")) {
      setOpenTagPopup(true);
    } else {
      setOpenTagPopup(false);
    }
    if (inputValue.includes(" ")) setOpenTagPopup(false);
  }, [inputValue]);

  const shareMedia = () => {
    setOpenShareMedia(!openShareMedia);
  };

  return (
    <>
      <div className="message-input-container">
        <ActionButton
          color="#D7F8E4"
          icon={<PaperClipOutlined />}
          onClick={() => shareMedia()}
        />
        <OutlinedInput
          placeholder="Write your message"
          value={inputValue}
          onChange={(event) => handleInputChange(event)}
          onKeyDown={(event) => handleKeyPress(event)}
          className="message-input"
        />
        <ActionButton
          color="#D7ECF8"
          icon={<ArrowUpOutlined />}
          onClick={() => sendMessage()}
        />
      </div>
      {openTagPopup && (
        <Popup title="Online users" userNameString={inputValue} />
      )}
      {openShareMedia && <Popup title="Share content" />}
    </>
  );
}

export default MessageInput;
