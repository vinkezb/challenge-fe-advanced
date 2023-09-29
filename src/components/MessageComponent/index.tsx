import React from "react";
import './message-component.scss';

interface Props {
    message?: string
}

function MessageComponent({ message }: Props) {
    return (
        <div className="message">
            <p>{ message }</p>
        </div>
    )
}

export default MessageComponent;