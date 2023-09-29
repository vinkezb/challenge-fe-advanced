import React from "react";
import './message-component.scss';
import { Message } from "../../models";

interface Props {
    message?: Message
}

function MessageComponent({ message }: Props) {
    return (
        <div className={!message?.isFromUser ? "message" : "message-from-user"}>
            <p>{ message?.body }</p>
        </div>
    )
}

export default MessageComponent;