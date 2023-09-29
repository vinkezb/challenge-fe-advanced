import React from "react";
import './message-input.scss';
import { OutlinedInput } from "@mui/material";
import ActionButton from "../ActionButton";
import { PaperClipOutlined, ArrowUpOutlined } from "@ant-design/icons";

function MessageInput () {
    return (
        <div className="message-input-container">
            <ActionButton color="#D7F8E4" icon={<PaperClipOutlined />} onClick={() => {}}/>
            <OutlinedInput className="message-input"/>
            <ActionButton color="#D7ECF8" icon={<ArrowUpOutlined />} onClick={() => {}}/>
        </div>
    )
}

export default  MessageInput;