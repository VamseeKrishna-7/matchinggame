import React from "react";
import { useNavigate } from "react-router-dom";
import './css/instructions.css'
import LinearProgress from '@mui/material/LinearProgress'

const InstructionsPage = function () {
    const navigate = useNavigate()
    const handleBack = function (event) {
        navigate('/yes')
    }
    const handlePlay = function (event) {
        navigate('/game')
    }
    return (
        <div id="instructionspage">
            <div
                onClick={handleBack} 
                id="backbutton"></div>
            <div id="progressbar">
                <LinearProgress 
                    color={'inherit'}
                    variant="buffer"
                    value={30} 
                    valueBuffer={30} 
                    id="bar" />
            </div>
            <div id="progressbarbanana">

            </div>
            <div id="instructionbox">
                <div id="firstinstruction"></div>
                <div id="secondinstruction"></div>
                <div id="thirdinstruction"></div>
            </div>

            <div
                onClick={handlePlay} 
                id="playbutton">
            </div>
        </div>
    )
}

export default InstructionsPage;