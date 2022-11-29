import React from "react";
import Box from '@mui/material/Box';
import "./Rules.css"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Rules() {
    return (
        <div >
            <Box className="again" sx={style}>
                <img className="rules-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Rock-paper-scissors.svg/800px-Rock-paper-scissors.svg.png"
            alt="scissors >> paper >> rock >> scissors"/>
            </Box>
            </div>

    )
}