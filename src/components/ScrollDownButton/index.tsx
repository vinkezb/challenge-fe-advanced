import React from "react";
import "./scroll-down-button.scss";
import ActionButton from "../ActionButton";
import { IconButton } from "@mui/material";

interface Props {
  icon: any;
  onClick: () => void;
  messageNumber: number;
}

function ScrollDonwButton({ icon, onClick, messageNumber }: Props) {
  return (
    <div className="scroll-down-button">
      <IconButton onClick={onClick}>{icon}</IconButton>
      <p>{messageNumber}</p>
    </div>
  );
}

export default ScrollDonwButton;
