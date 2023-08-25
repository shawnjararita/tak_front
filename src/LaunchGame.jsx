import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import CopyField from './CopyField'
import { TakSpace } from './TakSpace'
import { TakSpaceDisplay } from './TakSpaceDisplay'
import './App.css'

const defaultSpaces = {
    _id: undefined,
    takSpaces: [
        { space: 'X5', x: 1, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'A4', x: 1, y: 4, pieces: ['WF1', 'WF2', 'WC3'], activeSpace: false, moveSquare: false },
        { space: 'A3', x: 1, y: 3, pieces: ['BF1', 'BF2', 'BC3'], activeSpace: false, moveSquare: false },
        { space: 'A2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'A1', x: 1, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B5', x: 2, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B3', x: 2, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B2', x: 2, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B1', x: 2, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C5', x: 3, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C3', x: 3, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C2', x: 3, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C1', x: 3, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D5', x: 4, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D4', x: 4, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D3', x: 4, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D2', x: 4, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E5', x: 5, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E4', x: 5, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E3', x: 5, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E2', x: 5, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false }
    ]
}

const defaultSpacesTest = {
    _id: undefined,
    takSpaces: [
        { space: 'X5', x: 1, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'A4', x: 1, y: 4, pieces: ['BF1', 'BF2'], activeSpace: false, moveSquare: false },
        { space: 'A3', x: 1, y: 3, pieces: ['WF1', 'WF2'], activeSpace: false, moveSquare: false },
        { space: 'A2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'A1', x: 1, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B5', x: 2, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B4', x: 2, y: 4, pieces: ['BF3'], activeSpace: false, moveSquare: false },
        { space: 'B3', x: 2, y: 3, pieces: ['WF3'], activeSpace: false, moveSquare: false },
        { space: 'B2', x: 2, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B1', x: 2, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C5', x: 3, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C4', x: 3, y: 4, pieces: ['BF4'], activeSpace: false, moveSquare: false },
        { space: 'C3', x: 3, y: 3, pieces: ['WF4'], activeSpace: false, moveSquare: false },
        { space: 'C2', x: 3, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C1', x: 3, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D5', x: 4, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D4', x: 4, y: 4, pieces: ['BF5', 'WF7'], activeSpace: false, moveSquare: false },
        { space: 'D3', x: 4, y: 3, pieces: ['WF5', 'BF7'], activeSpace: false, moveSquare: false },
        { space: 'D2', x: 4, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E5', x: 5, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E4', x: 5, y: 4, pieces: ['BF6'], activeSpace: false, moveSquare: false },
        { space: 'E3', x: 5, y: 3, pieces: ['WF6'], activeSpace: false, moveSquare: false },
        { space: 'E2', x: 5, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false }
    ]
}

const defaultSpacesMax = {
    _id: undefined,
    takSpaces: [
        { space: 'x1 y5', x: 1, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x1 y4', x: 1, y: 4, pieces: ['WF3', 'BF3'], activeSpace: false, moveSquare: false },
        { space: 'x1 y3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x1 y2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x1 y1', x: 1, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x2 y5', x: 2, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x2 y4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x2 y3', x: 2, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x2 y2', x: 2, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x2 y1', x: 2, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x3 y5', x: 3, y: 5, pieces: ['BF6', 'WF7', 'BF7', 'WF8'], activeSpace: false, moveSquare: false },
        { space: 'x3 y4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x3 y3', x: 3, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x3 y2', x: 3, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x3 y1', x: 3, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x4 y5', x: 4, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x4 y4', x: 4, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x4 y3', x: 4, y: 3, pieces: ['BF5', 'BC6'], activeSpace: false, moveSquare: false },
        { space: 'x4 y2', x: 4, y: 2, pieces: ['WF4', 'BF4', 'WF5'], activeSpace: false, moveSquare: false },
        { space: 'x4 y1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x5 y5', x: 5, y: 5, pieces: ['BF17', 'WF18', 'BF18', 'WF19', 'BF19'], activeSpace: false, moveSquare: false },
        { space: 'x5 y4', x: 5, y: 4, pieces: ['BF14', 'WF15', 'BF15', 'WF16', 'BF16', 'WF17'], activeSpace: false, moveSquare: false },
        { space: 'x5 y3', x: 5, y: 3, pieces: ['BF11', 'WF12', 'BF12', 'WF13', 'BF13', 'WF14'], activeSpace: false, moveSquare: false },
        { space: 'x5 y2', x: 5, y: 2, pieces: ['BF8', 'WF9', 'BF9', 'WF10', 'BF10', 'WF11'], activeSpace: false, moveSquare: false },
        { space: 'x5 y1', x: 5, y: 1, pieces: ['WF1', 'BF1', 'WF2', 'BF2'], activeSpace: false, moveSquare: false }
    ]
}

const defaultSpacesOrig = {
    _id: undefined,
    takSpaces: [
        // { space: 'X5', x: 1, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'X5', x: 1, y: 5, pieces: ['WF1', 'BF1', 'WF2', 'BF2', 'BF8', 'WF9', 'BF9'], activeSpace: false, moveSquare: false },
        // { space: 'X5', x: 1, y: 5, pieces: ['WF1', 'BF1', 'WF2', 'BF2'], activeSpace: false, moveSquare: false },
        // { space: 'A4', x: 1, y: 4, pieces: [], activeSpace: false, moveSquare: false  },
        { space: 'A4', x: 1, y: 4, pieces: ['WF3', 'BF3'], activeSpace: false, moveSquare: false },
        { space: 'A3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'A2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'A1', x: 1, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B5', x: 2, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B3', x: 2, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B2', x: 2, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'B1', x: 2, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C5', x: 3, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C3', x: 3, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'C2', x: 3, y: 2, pieces: ['BF6', 'WF7', 'BF7', 'WF8'], activeSpace: false, moveSquare: false },
        { space: 'C1', x: 3, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D5', x: 4, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D4', x: 4, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'D3', x: 4, y: 3, pieces: ['BF5', 'WC6'], activeSpace: false, moveSquare: false },
        { space: 'D2', x: 4, y: 2, pieces: ['WF4', 'BF4', 'WF5'], activeSpace: false, moveSquare: false },
        { space: 'D1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E5', x: 5, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E4', x: 5, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E3', x: 5, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E2', x: 5, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'E1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false }
    ]
}

const defaultSpaces2 = {
    _id: undefined,
    takSpaces: [
        { space: 'x1 y5', x: 1, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x1 y4', x: 1, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x1 y3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x1 y2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x1 y1', x: 1, y: 1, pieces: ['WF2'], activeSpace: false, moveSquare: false },
        { space: 'x2 y5', x: 2, y: 5, pieces: ['WF3', 'BF1'], activeSpace: false, moveSquare: false },
        { space: 'x2 y4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x2 y3', x: 2, y: 3, pieces: ['WF4'], activeSpace: false, moveSquare: false },
        { space: 'x2 y2', x: 2, y: 2, pieces: ['WF12'], activeSpace: false, moveSquare: false },
        { space: 'x2 y1', x: 2, y: 1, pieces: ['WF5'], activeSpace: false, moveSquare: false },
        { space: 'x3 y5', x: 3, y: 5, pieces: ['WF1'], activeSpace: false, moveSquare: false },
        { space: 'x3 y4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x3 y3', x: 3, y: 3, pieces: ['WF6'], activeSpace: false, moveSquare: false },
        { space: 'x3 y2', x: 3, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x3 y1', x: 3, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x4 y5', x: 4, y: 5, pieces: ['WF10'], activeSpace: false, moveSquare: false },
        { space: 'x4 y4', x: 4, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x4 y3', x: 4, y: 3, pieces: ['WF8'], activeSpace: false, moveSquare: false },
        { space: 'x4 y2', x: 4, y: 2, pieces: ['WF7'], activeSpace: false, moveSquare: false },
        { space: 'x4 y1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x5 y5', x: 5, y: 5, pieces: ["WF11"], activeSpace: false, moveSquare: false },
        { space: 'x5 y4', x: 5, y: 4, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x5 y3', x: 5, y: 3, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x5 y2', x: 5, y: 2, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x5 y1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false }
    ]
}

const defaultSpacesFull = {
    _id: undefined,
    takSpaces: [
        { space: 'x1 y5', x: 1, y: 5, pieces: ['BF1'], activeSpace: false, moveSquare: false },
        { space: 'x1 y4', x: 1, y: 4, pieces: ['BF2'], activeSpace: false, moveSquare: false },
        { space: 'x1 y3', x: 1, y: 3, pieces: ['WF1'], activeSpace: false, moveSquare: false },
        { space: 'x1 y2', x: 1, y: 2, pieces: ['BF3'], activeSpace: false, moveSquare: false },
        { space: 'x1 y1', x: 1, y: 1, pieces: ['WF2', 'WF5'], activeSpace: false, moveSquare: false },
        { space: 'x2 y5', x: 2, y: 5, pieces: ['WF3', 'BF13'], activeSpace: false, moveSquare: false },
        { space: 'x2 y4', x: 2, y: 4, pieces: ['BF4'], activeSpace: false, moveSquare: false },
        { space: 'x2 y3', x: 2, y: 3, pieces: ['WF4'], activeSpace: false, moveSquare: false },
        { space: 'x2 y2', x: 2, y: 2, pieces: ['BF5'], activeSpace: false, moveSquare: false },
        { space: 'x2 y1', x: 2, y: 1, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x3 y5', x: 3, y: 5, pieces: ['WF9'], activeSpace: false, moveSquare: false },
        { space: 'x3 y4', x: 3, y: 4, pieces: ['WF8'], activeSpace: false, moveSquare: false },
        { space: 'x3 y3', x: 3, y: 3, pieces: ['WF6', 'WF13'], activeSpace: false, moveSquare: false },
        { space: 'x3 y2', x: 3, y: 2, pieces: ['BF6', 'WF11'], activeSpace: false, moveSquare: false },
        { space: 'x3 y1', x: 3, y: 1, pieces: ['BF7'], activeSpace: false, moveSquare: false },
        { space: 'x4 y5', x: 4, y: 5, pieces: ['WF10'], activeSpace: false, moveSquare: false },
        { space: 'x4 y4', x: 4, y: 4, pieces: ['WF7'], activeSpace: false, moveSquare: false },
        { space: 'x4 y3', x: 4, y: 3, pieces: ['BF8'], activeSpace: false, moveSquare: false },
        { space: 'x4 y2', x: 4, y: 2, pieces: ['BF9', 'WF14'], activeSpace: false, moveSquare: false },
        { space: 'x4 y1', x: 4, y: 1, pieces: ['BF10'], activeSpace: false, moveSquare: false },
        { space: 'x5 y5', x: 5, y: 5, pieces: [], activeSpace: false, moveSquare: false },
        { space: 'x5 y4', x: 5, y: 4, pieces: ['BF11'], activeSpace: false, moveSquare: false },
        { space: 'x5 y3', x: 5, y: 3, pieces: ['WF12'], activeSpace: false, moveSquare: false },
        { space: 'x5 y2', x: 5, y: 2, pieces: ['BF12'], activeSpace: false, moveSquare: false },
        { space: 'x5 y1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false }
    ]
}

function LaunchGame() {
    const [spaces, setSpaces] = useState(defaultSpaces.takSpaces)
    const [takGameId, setTakGameId] = useState(defaultSpaces._id)
    const [pieceMoveAndCount, setPieceMoveAndCount] = useState({ source: '', space: '', number: undefined, piecesToMove: [] })
    const [gameState, setGameState] = useState({ whiteTurn: true, blackMaxPiece: false, whiteMaxPiece: false, gameOver: false, winColor: '' })
    const [displayMessage, setDisplayMessage] = useState()
    const [pieceType, setPieceType] = useState('flat')
    const [userLeaving, setUserLeaving] = useState(false)

    const gameId = useRef(null)  // for the joinGameButton <input> box

    // this function enables line feeds (aka: /n) in diplayMessage; in render()=-->dangerouslySetInnerHTML={}
    function replaceWithBr() {
        if (displayMessage) {
            return displayMessage.replace(/\n/g, "<br />")
        }
    }


    // -- exit game DELETE ------------------------------------------------------
    async function deleteTakGameOnExit() {
        let deleteGameId
        if (takGameId) { deleteGameId = { id: takGameId } }

        if (deleteGameId) {
            try {
                const res = await axios({
                    // url: '/takGame/deleteOnExit',
                    url: 'https://tak-game-mern.onrender.com/takGame/deleteOnExit',  // skj 8-25-2023
                    method: 'POST',  // skj, yes...using POST to delete
                    data: JSON.stringify(deleteGameId),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                if (res) {
                    console.log(`frontend: axios...Tak game has been deleted on exit`)
                }
            }
            catch (err) { console.log(err) }
        }
        // delete localStorage
        let prevSpacesCreator = JSON.parse(localStorage.getItem('prevSpacesCreator'))  // skj 8-25-2023
        if (prevSpacesCreator) { localStorage.removeItem('prevSpacesCreator') }  // skj 8-25-2023
        let prevSpacesJoiner = JSON.parse(localStorage.getItem('prevSpacesJoiner'))  // skj 8-25-2023
        if (prevSpacesJoiner) { localStorage.removeItem('prevSpacesJoiner') }  // skj 8-25-2023
        let takGameIdCreator = JSON.parse(localStorage.getItem('takGameIdCreator'))  // skj 8-25-2023
        if (takGameIdCreator) { localStorage.removeItem('takGameIdCreator') }  // skj 8-25-2023
        let takGameIdJoiner = JSON.parse(localStorage.getItem('takGameIdJoiner'))  // skj 8-25-2023
        if (takGameIdJoiner) { localStorage.removeItem('takGameIdJoiner') }  // skj 8-25-2023
    }

    window.addEventListener('beforeunload', (event) => {
        event.preventDefault()
        setUserLeaving(true)
        console.log('frontend: eventListener...you have exited out of takGame')
    })

    useEffect(() => {
        if (!takGameId) {
            localStorage.setItem('prevSpacesCreator', JSON.stringify(spaces))  // skj 8-25-2023
            localStorage.setItem('takGameIdCreator', JSON.stringify('Local_Game'))  // skj 8-25-2023
        }

        if (userLeaving) { deleteTakGameOnExit() }
        console.log('useEffect running')
        return () => { document.removeEventListener('beforeunload', setUserLeaving) }
    }, [userLeaving])


    // -- start new game DELETE -------------------------------------------------
    async function deleteTakGame() {
        let deleteGameId
        if (takGameId) { deleteGameId = { id: takGameId } }

        if (deleteGameId) {
            try {
                const res = await axios({
                    // url: '/takGame/delete',
                    url: 'https://tak-game-mern.onrender.com/takGame/delete',
                    method: 'POST',  // skj, yes...using POST to delete
                    data: JSON.stringify(deleteGameId),
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                if (res) {
                    console.log(`Tak game #${res.data} has been deleted`)
                }
            }
            catch (err) { console.log(err) }
        }
        // delete localStorage
        let prevSpacesCreator = JSON.parse(localStorage.getItem('prevSpacesCreator'))  // skj 8-25-2023
        if (prevSpacesCreator) { localStorage.removeItem('prevSpacesCreator') }  // skj 8-25-2023
        let prevSpacesJoiner = JSON.parse(localStorage.getItem('prevSpacesJoiner'))  // skj 8-25-2023
        if (prevSpacesJoiner) { localStorage.removeItem('prevSpacesJoiner') }  // skj 8-25-2023
        let takGameIdCreator = JSON.parse(localStorage.getItem('takGameIdCreator'))  // skj 8-25-2023
        if (takGameIdCreator) { localStorage.removeItem('takGameIdCreator') }  // skj 8-25-2023
        let takGameIdJoiner = JSON.parse(localStorage.getItem('takGameIdJoiner'))  // skj 8-25-2023
        if (takGameIdJoiner) { localStorage.removeItem('takGameIdJoiner') }  // skj 8-25-2023
    }

    // -- start new game --------------------------------------------------------
    async function handleNewGameClick(e) {
        deleteTakGame()

        // start new tak game an add _id to state
        try {
            const res = await axios({
                // url: '/takGame',
                url: 'https://tak-game-mern.onrender.com/takGame',
                method: 'POST'
            })
            if (res) {
                setSpaces(res.data.takSpaces)
                setTakGameId(res.data._id)
                // copy data to localStorage
                localStorage.setItem('prevSpacesCreator', JSON.stringify(res.data.takSpaces))  // skj 8-25-2023
                localStorage.setItem('takGameIdCreator', JSON.stringify(res.data._id))  // skj 8-25-2023   
            }
        } catch (e) {
            console.log(`axios_new_game error: ${e}`)
        }
    }

    // -- join game -------------------------------------------------------------
    async function handleJoinGame(e) {
        e.preventDefault()

        let id = gameId.current?.value
        console.log(id)

        // delete creator localStorage
        let prevSpacesCreator = JSON.parse(localStorage.getItem('prevSpacesCreator'))  // skj 8-25-2023
        if (prevSpacesCreator) { localStorage.removeItem('prevSpacesCreator') }  // skj 8-25-2023
        let takGameIdCreator = JSON.parse(localStorage.getItem('takGameIdCreator'))  // skj 8-25-2023
        if (takGameIdCreator) { localStorage.removeItem('takGameIdCreator') }  // skj 8-25-2023

        try {
            const res = await axios({
                // url: `/takGame/${id}`,
                url: `https://tak-game-mern.onrender.com/takGame/${id}`,
                method: 'GET'
            })
            if (res) {
                // console.log(res.data)
                setSpaces(res.data.takSpaces)
                setTakGameId(res.data._id)
                // copy data to localStorage
                localStorage.setItem('prevSpacesJoiner', JSON.stringify(res.data.takSpaces))  // skj 8-25-2023
                localStorage.setItem('takGameIdJoiner', JSON.stringify(res.data._id))   // skj 8-25-2023
            }
        } catch (e) {
            console.log(`axios_get_game error: ${e}`)
        }
    }

    return (
        <>
            <div className='leftGameBoard'>

                <h1>{gameState.whiteTurn ? 'White\'s Turn' : 'Black\'s Turn'}</h1>

                {(pieceType === 'flat' && gameState.whiteTurn) && <h3>Current Piece: White Flat</h3>}
                {(pieceType === 'flat' && !gameState.whiteTurn) && <h3>Current Piece: Black Flat</h3>}
                {(pieceType === 'wall' && gameState.whiteTurn) && <h3>Current Piece: White Wall</h3>}
                {(pieceType === 'wall' && !gameState.whiteTurn) && <h3>Current Piece: Black Wall</h3>}
                {(pieceType === 'capstone' && gameState.whiteTurn) && <h3>Current Piece: White Capstone</h3>}
                {(pieceType === 'capstone' && !gameState.whiteTurn) && <h3>Current Piece: Black Capstone</h3>}
                <div className='takButtons'>
                    <button onClick={() => setPieceType('flat')}>Flat</button>
                    <button onClick={() => setPieceType('wall')}>Wall</button>
                    <button onClick={() => setPieceType('capstone')}>Capstone</button>
                </div>

                {/* {displayMessage ? <h3>{displayMessage}</h3> : null} */}
                {displayMessage ? <h3 dangerouslySetInnerHTML={{ __html: replaceWithBr() }} /> : null}

                <TakSpaceDisplay spaces={spaces} pieceMoveAndCount={pieceMoveAndCount} />

                <div>
                    {spaces && <p>{spaces[0].space}</p>}
                    {<span>gameId: {takGameId && <span>{takGameId}</span>}</span>}
                    {<p>Active Piece Type: {pieceType}</p>}
                    <p>Piece Move & Count</p>
                    {<p>source: {pieceMoveAndCount.source}</p>}
                    {<p>space: {pieceMoveAndCount.space}</p>}
                    {<p>number: {pieceMoveAndCount.number}</p>}
                    {pieceMoveAndCount.piecesToMove.map((p, i) => { return <span key={i}>{p + '-' + i}, </span> })}

                </div>

                <div className='startGameButton' style={{ backgroundColor: 'yellow', padding: '1em' }}>
                    <button onClick={handleNewGameClick}>Start New Tak Game</button>
                </div>
                <form className='joinGameButton' style={{ backgroundColor: 'blue', padding: '1em' }}>
                    <input
                        type='text'
                        name='gameId'
                        placeholder="game id goes here"
                        ref={gameId}
                    />
                    <button onClick={handleJoinGame} style={{ marginLeft: '10px' }}>Join New Tak Game</button>
                </form>
                <div style={{ backgroundColor: 'green', padding: '1em' }}>
                    <CopyField takGameId={takGameId} />
                </div>
            </div>

            <TakSpace
                spaces={spaces}
                setSpaces={setSpaces}
                takGameId={takGameId}
                pieceMoveAndCount={pieceMoveAndCount}
                setPieceMoveAndCount={setPieceMoveAndCount}
                gameState={gameState}
                setGameState={setGameState}
                displayMessage={displayMessage}
                setDisplayMessage={setDisplayMessage}
                pieceType={pieceType}
            />
        </>
    )
}
export default LaunchGame