import React from "react";
import './css/yespage.css'
import { useNavigate } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress'

const YesPage = function () {
    const navigate = useNavigate()
    const handleBack = function (event) {
        navigate('/next')
    }
    const handleYes = function (event) {
        navigate('/instructions')
    }
    return (
        <div id="yespage">
            <div
                onClick={handleBack} 
                id="backbutton"></div>
            <div id="progressbar">
                <LinearProgress 
                    color={'inherit'}
                    variant="buffer" 
                    value={25}
                    valueBuffer={25} 
                    id="bar" />
            </div>
            <div id="progressbarbanana">

            </div>
            <div id="monkey">
            </div>
            <div id="callout">
                <div id="yestext">
                </div>
                <div id="emoji"></div>
            </div>
            <div
                onClick={handleYes} 
                id="yesbutton">
            </div>
            <div id="settings">
                <div id="smallellipse1"></div>
                <div id="wheel"></div>
                <div id="largeellipse1"></div>
            </div>
            <div id="star">
                <div id="smallellipse2"></div>
                <div id="starsymbol"></div>
                <div id="largeellipse2"></div>
            </div>
        </div>
    )
}

export default YesPage;