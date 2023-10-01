import React from "react";
import "./share-button.scss";
import { IconButton } from "@mui/material";

interface Props {
  icon: any;
  title: string;
  onClick: () => void;
}

function ShareButton({ icon, title, onClick }: Props) {
  return (
    <div className="share-button" onClick={onClick}>
      <IconButton>{icon}</IconButton>
      <h6>{title}</h6>
    </div>
  );
}

export default ShareButton;
