import React from "react";
import './css/landingpage.css'
import { useNavigate } from "react-router-dom";

const LandingPage = function () {
    const navigate = useNavigate();
    const handleStart = function (event) {
        navigate('/next')
    }
    return (
        <div id="landing">
            <div id="monkey">
            </div>
            <div id="callout">
                <div id="welcometext">
                </div>
            </div>
            <div
                onClick={handleStart} 
                id="start">
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

export default LandingPage;