import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LinearProgress from '@mui/material/LinearProgress'
import './css/gamepage.css' 
import '../static/alphabets/a.png'
const CLICKS = 24
const alphabets = {
    1: {
        letter: 'a',
        picture: 'apple.png'
    },
    2: {
        letter: 'b',
        picture: 'ball.png'
    },
    3: {
        letter: 'c',
        picture: 'cat.png'
    },
    4: {
        letter: 'd',
        picture: 'dog.png'
    },
    5: {
        letter: 'e',
        picture: 'elephant.png'
    },
    6: {
        letter: 'f',
        picture: 'fish.png'
    },
    7: {
        letter: 'g',
        picture: 'goat.png'
    },
    8: {
        letter: 'h',
        picture: 'horse.png'
    },
    9: {
        letter: 'i',
        picture: 'ink.png'
    },
    10: {
        letter: 'j',
        picture: 'jug.png'
    },
    11: {
        letter: 'k',
        picture: 'kite.png'
    },
    12: {
        letter: 'l',
        picture: 'lion.png'
    },
    13: {
        letter: 'm',
        picture: 'monkey.png'
    },
    14: {
        letter: 'n',
        picture: 'nest.png'
    },
    15: {
        letter: 'o',
        picture: 'owl.png'
    },
    16: {
        letter: 'p',
        picture: 'parrot.png'
    },
    17: {
        letter: 'q',
        picture: 'queen.png'
    },
    18: {
        letter: 'r',
        picture: 'rabbit.png'
    },
    19: {
        letter: 's',
        picture: 'sun.png'
    },
    20: {
        letter: 't',
        picture: 'tiger.png'
    },
    21: {
        letter: 'u',
        picture: 'umbrella.png'
    },
    22: {
        letter: 'v',
        picture: 'van.png'
    },
    23: {
        letter: 'w',
        picture: 'watch.png'
    },
    24: {
        letter: 'x',
        picture: 'xylo.png'
    },
    25: {
        letter: 'y',
        picture: 'yak.png'
    },
    26: {
        letter: 'z',
        picture: 'zebra.png'
    }
}

const GamePage = function () {
    const [clicks, setClicks] = useState(0)
    const [buffer, setBuffer] = useState(0)
    const navigate = useNavigate()
    const [pictureClicked, setPictureClicked] = useState(false)
    const [matchVisibility, setMatchVisibility] = useState(false)
    const [cards, setCards] = useState([])
    const [cardsCopy, setCardsCopy] = useState([])
    const [cardsLeft, setCardsLeft] = useState(12)
    const [cardsLeftPercentage, setCardsLeftPercentage] = useState(0)
    const [lastnextVisibility, setLastnextVisibility] = useState(false)
    const [score, setScore] = useState(0)
    const [scoreVisibility, setScoreVisiblity] = useState(false)

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 20) + 1;
        let arr = []
        for (let i = 1; i <= 6; i++) {
            arr.push(alphabets[randomIndex+i])
        }
        setCards(arr)
        let arrCopy = [...arr]
        arrCopy.sort(() => Math.random() - 0.5)
        setCardsCopy(arrCopy)
        const progressbar = document.querySelector('#progressbar')
        progressbar.style.color = "#FFD700";
        const progressbarbanana = document.querySelector('#progressbarbanana')
        progressbarbanana.style.backgroundImage = `url("./static/goldbanana.png")`
    }, [])
    useEffect(() => {
        const clicksPercentage = (clicks / CLICKS) * 100;
        const cardsleft = cardsLeftPercentage
        if (clicksPercentage > cardsleft) {
            setBuffer(clicksPercentage)
        } else {
            setBuffer(cardsleft)
        }
        const scr = CLICKS-clicks
        if (scr === 0) {
            setScore(Math.round(Math.random() * 5 + 1))
        } else {
            setScore(Math.round(CLICKS-clicks))
        }
        if (clicks >= CLICKS || cardsLeftPercentage >= 100) {
            const cardscontainer = document.getElementById('cardscontainer')
            cardscontainer.remove()
            const entirepage = document.querySelectorAll('#gamepage')
            entirepage[0].classList.add('blurrer')
            setLastnextVisibility(true)
            return
        }
    }, [clicks, cardsLeftPercentage])

    const handleLastNext = function (event) {
        const nextbutton = document.getElementById('lastnext')
        if (nextbutton) nextbutton.remove()
        const entirepage = document.querySelectorAll('#gamepage')
        entirepage[0].classList.remove('blurrer')
        setScoreVisiblity(true)
    }
    const handleBack = function (event) {
        navigate('/instructions')
    }
    const handleAlphabetPicutreClick = function (event) {
        if (pictureClicked) return
        setClicks(clicks+1)
        setPictureClicked(true)
        const card = event.currentTarget.classList
        const backface = event.currentTarget.children[1]
        backface.style.backgroundImage = `url("./static/${backface.getAttribute('imagename')}")`
        card.toggle('is-flipped')
    }
    const handleAlphabetClick = function (event) {
        if (!pictureClicked) return
        setClicks(clicks+1)
        setPictureClicked(false)
        const card = event.currentTarget.classList
        const backface = event.currentTarget.children[1]
        backface.style.backgroundImage = `url("./static/${backface.getAttribute('imagename')}")`
        card.toggle('is-flipped')
        // check for match
        const openpicutre = document.querySelectorAll('#alphabetslist>.card.is-flipped')
        const picturefirstletter = openpicutre[0].children[0].getAttribute('imagename').charAt(0)
        const openalphabet = document.querySelectorAll('#pictures>.card.is-flipped')
        const alphabetfirstletter = openalphabet[0].children[0].getAttribute('imagename').charAt(0)
        // if match remove from dom
        if (picturefirstletter === alphabetfirstletter) {
            setCardsLeft(cardsLeft-2)
            setCardsLeftPercentage(cardsLeftPercentage+17)
            const popup = document.querySelectorAll('#popup>#matchpopup')[0]
            const leftslant = document.createElement('div')
            leftslant.classList.add('leftslant')
            leftslant.style.backgroundImage = `url("./static/${openpicutre[0].children[0].getAttribute('imagename')}")`
            popup.appendChild(leftslant)
            const rightslant = document.createElement('div')
            rightslant.style.backgroundImage = `url("./static/${openalphabet[0].children[0].getAttribute('imagename')}")`
            rightslant.classList.add('rightslant')
            popup.appendChild(rightslant)
            openpicutre[0].style.visibility = "hidden";
            openpicutre[0].classList.toggle('is-flipped');
            openalphabet[0].style.visibility = "hidden";
            setTimeout(()=> {
                openalphabet[0].classList.toggle('is-flipped');
            }, 300)
            setMatchVisibility(true)
            const entirepage = document.querySelectorAll('#gamepage')
            entirepage[0].classList.toggle('blur')
            setTimeout(() => {
                setMatchVisibility(false)
                entirepage[0].classList.toggle('blur')
            }, 1000)
        } else {
            setTimeout(()=> {
                openpicutre[0].classList.toggle('is-flipped')
                openalphabet[0].classList.toggle('is-flipped')
            }, 750)
        }
        // if mismatch reset grid

    }

    return (
        <div id="master">
            <div id="scorecard" hidden={!scoreVisibility}>
                <div id="rectangle"></div>
                <div id="bananas">Earned<br/>{score} Banana's</div>
                <div id="monkeywithbanana"></div>
                <div id="scoreribbon"></div>
                <div id="scatteredbananas"></div>
            </div>
            <div
                onClick={handleLastNext}
                hidden={!lastnextVisibility} 
                id="lastnext">
            </div>
            <div id="popup" hidden={!matchVisibility}>
                <div id="matchpopup">

                </div>
                <div id="matchtext">

                </div>
            </div>
        <div id="gamepage">
            <div
                onClick={handleBack} 
                id="backbutton"></div>
            <div id="progressbar">
                <LinearProgress 
                    color={'inherit'}
                    variant="buffer" 
                    value={buffer}
                    valueBuffer={buffer} 
                    id="bar" />
            </div>
            <div id="progressbarbanana">

            </div>
            
            <div id="cardscontainer">
                <div id="alphabetslist">
                    {
                        cards?.map(card => {
                            return <div onClick={handleAlphabetPicutreClick} className="card" key={card.picture}>
                                <div imagename={card.picture} className="cardface cardfront"></div>
                                <div imagename={card.picture} className="cardface cardback"></div>
                            </div>
                        })
                    }
                </div>
                <div id="pictures">
                {
                    cardsCopy?.map(card => {
                        return <div onClick={handleAlphabetClick} className="card" key={card.letter}>
                            <div imagename={card.letter + '.png'} className="cardface cardfront_picture"></div>
                            <div imagename={card.letter + '.png'} className="cardface cardback_picture"></div>
                        </div>
                    })
                }    
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default GamePage;