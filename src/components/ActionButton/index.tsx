import React from "react";
import './action-button.scss';
import { IconButton } from "@mui/material";

interface Props {
    icon: any;
    onClick: () => void;
    color: string
}

function ActionButton ({icon, onClick, color}: Props) {
    return (
        <IconButton className="action-button" sx={{backgroundColor: color}} onClick={onClick}>
            {icon}
        </IconButton>
    )
}

export default ActionButton;