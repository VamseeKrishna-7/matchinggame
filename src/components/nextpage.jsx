import React from "react";
import './css/nextpage.css'
import { useNavigate } from "react-router-dom";

const NextPage = function () {
    const navigate = useNavigate()
    const handleBack = function (event) {
        navigate('/')
    }
    const handleNext = function (event) {
        navigate('/yes')
    }
    return (
        <div id="nextpage">
            <div
                onClick={handleBack} 
                id="backbutton"></div>
            <div id="monkey">
            </div>
            <div id="callout">
                <div id="nexttext">
                </div>
                <div id="banana"></div>
            </div>
            <div
                onClick={handleNext} 
                id="nextbutton">
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

export default NextPage;