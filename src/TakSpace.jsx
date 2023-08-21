import { useEffect, useState } from 'react'
import axios from 'axios'
import { determineMoveSquares, determineMoveSecondSquares } from './modules/determineSquares.js'
import { determineWinStatus, determineFullBoardMaxPieces } from './modules/determineWinStatus.js'

class TakPiece {
    constructor(color, type, number) {
        this.color = color;
        this.type = type;
        this.number = number;

        this.code = function () {
            const code = color.slice(0, 1).toUpperCase() + type.slice(0, 1).toUpperCase() + number
            return code
        }
    }
}

export function TakSpace({ spaces, setSpaces, takGameId, pieceMoveAndCount, setPieceMoveAndCount, gameState, setGameState, displayMessage, setDisplayMessage, pieceType }) {

    useEffect(() => {
        handleUseEffect()

        let piecesStatus = determineFullBoardMaxPieces(spaces, gameState.whiteMaxPiece, gameState.blackMaxPiece)
        // if (piecesStatus) { console.log('pieces_status: ', piecesStatus) }
        // if (piecesStatus) { console.log(`Winner: ${piecesStatus.winColor}, black pieces: ${piecesStatus.numBlackPieces} vs. white pieces: ${piecesStatus.numWhitePieces}`) }
        piecesStatus.gameOver ? alert(`Winner: ${piecesStatus.winColor} \n black pieces: ${piecesStatus.numBlackPieces} vs. white pieces: ${piecesStatus.numWhitePieces}`) : ''

        let roadStatus = determineWinStatus(spaces, gameState.whiteTurn)
        // if (roadStatus) { console.log('road_status: ', roadStatus) }
        roadStatus.gameOver ? setGameState((obj) => { return { ...obj, gameOver: true, winColor: roadStatus.winColor } }) : ''
        roadStatus.gameOver ? alert(`${roadStatus.winColor} Wins!!`) : ''

        return () => { console.log('useEffect cleanup') }
    }, [spaces, pieceMoveAndCount])


    //----------------------------------------------------------------- f ----
    function handleUseEffect() {
        let space
        spaces.map((sp, i) => { if (sp.activeSpace === true) { space = sp.space } })

        if ((pieceMoveAndCount.number > 0 && pieceMoveAndCount.number < 97) && (pieceMoveAndCount.number === pieceMoveAndCount.piecesToMove.length)) {
            setDisplayMessage(`You have selected ${pieceMoveAndCount.number} pieces from ${space}`)
        }
        if ((pieceMoveAndCount.number > 0 && pieceMoveAndCount.number < 97) && (pieceMoveAndCount.piecesToMove.length < 1)) {
            setGameState((obj) => { return { ...obj, whiteTurn: !gameState.whiteTurn } })
            setDisplayMessage('You have placed the last piece in the move stack')
        }
        if (pieceMoveAndCount.number === 0) {
            setDisplayMessage(`You have added a new piece to ${space}`)
        }
        if (pieceMoveAndCount.number === 99) {
            setDisplayMessage('Click the bottom-most piece you want to move')
        }
        if (pieceMoveAndCount.number === 100) {
            setDisplayMessage('Turn #2: Black player place flat on empty')
        }
        if (pieceMoveAndCount.number === undefined) { setDisplayMessage('Welcome to Tak! \n White place first piece') }
    }


    //----------------------------------------------------------------- f ----
    function createPiece(type) {
        // createPiece() determines the piece color using gameState.whiteTurn, creates an "currentPiecesArray" to determine piece number, then creates the piece using the TakPiece class 
        let curentPiecesArray = ['x']
        let currentPieces
        let blackPiecesArray = []
        let whitePiecesArray = []

        // we map the existing pieces to determine which # piece to create
        spaces.map((obj, i) => {
            const pieces = obj.pieces
            curentPiecesArray.push(...pieces)
        })

        blackPiecesArray = curentPiecesArray.filter((code) => { return code.charAt(0) === 'B' })
        whitePiecesArray = curentPiecesArray.filter((code) => { return code.charAt(0) === 'W' })
        // console.log('Black Pieces Array', blackPiecesArray)
        // console.log('White Pieces Array', whitePiecesArray)

        if (!gameState.whiteTurn) {
            if (blackPiecesArray.length === 1 && whitePiecesArray.length === 0) { return new TakPiece('white', 'flat', 1) }  // length=1 because black has a piece on the board on its first turn
            if (blackPiecesArray.length > 0 && whitePiecesArray.length > 0) {
                let numberBlackArray = blackPiecesArray.map((item) => { return parseInt(item.slice(2)) })
                currentPieces = Math.max(...numberBlackArray)
                if (currentPieces < 20) { return new TakPiece('black', type, currentPieces + 1) }
                if (currentPieces === 20) {
                    setGameState((obj) => { return { ...obj, blackMaxPiece: true } })
                    // setPieceMoveAndCount({ source: '', space: '', number: 98, piecesToMove: [] })
                    return new TakPiece('black', type, currentPieces + 1)
                }
            }
            // console.log('black currentPiece#; ', currentPieces)
        }

        if (gameState.whiteTurn) {
            if (whitePiecesArray.length === 0) {
                setPieceMoveAndCount((obj) => { return { source: '', space: '', number: 100, piecesToMove: [] } })
                return new TakPiece('black', 'flat', 1)
            }
            if (whitePiecesArray.length > 0) {
                let numberWhiteArray = whitePiecesArray.reverse().map((item) => { return parseInt(item.slice(2)) })
                currentPieces = Math.max(...numberWhiteArray)
                if (currentPieces < 20) { return new TakPiece('white', type, currentPieces + 1) }
                if (currentPieces === 20) {
                    setGameState((obj) => { return { ...obj, whiteMaxPiece: true } })
                    // setPieceMoveAndCount({ source: '', space: '', number: 98, piecesToMove: [] })
                    return new TakPiece('white', type, currentPieces + 1)
                }
            }
            // console.log('white currentPiece#; ', currentPieces)
        }
    }


    //----------------------------------------------------------------- f ----
    async function movePieces(piecesPickedUp, pieces, spaceId, spaceFound) {
        let sourcePieces = [...pieces]
        let destinationPieces = [...spaceFound.pieces]
        let removedPieces = [...sourcePieces.splice(sourcePieces.length - piecesPickedUp)]
        // console.log('source-1:', sourcePieces)  //skj 8-15-2023 (test)
        // console.log('dest-1:', destinationPieces)  //skj 8-15-2023 (test)
        // console.log('remvd-1:', removedPieces)  //skj 8-15-2023 (test)

        // if the top source piece is a capstone, and the top destination piece a wall, make it flat
        let topRemoved = removedPieces[removedPieces.length - 1].slice(1, 2)
        let topDestination = destinationPieces[destinationPieces.length - 1]?.slice(1, 2)

        if (topRemoved === 'C' && topDestination === 'W') {
            let flatWall = destinationPieces[destinationPieces.length - 1].replace(/(?<=\w)W/, 'F')
            // console.log('flatteded Wall_mf(1): ', flatWall)
            destinationPieces.pop()
            destinationPieces.push(flatWall)
        }
        // console.log('topRemvd:', topRemoved, 'topDest:', topDestination)  // skj 8-15-2023 (test)
        // console.log('removedPieces_mf(1) :', removedPieces)

        destinationPieces.push(removedPieces.shift())  // move 1 piece

        const updatedSpaces = spaces.map((obj) => {
            if (obj.space === pieceMoveAndCount.space) { return { ...obj, pieces: sourcePieces } }  // update source
            if (obj.space === spaceId) { return { ...obj, pieces: destinationPieces } }  // update destination
            else { return obj }
        })

        const updatedSpacesCombo = determineMoveSecondSquares(updatedSpaces, pieceMoveAndCount, spaceFound)
        // --------------------------------------------------------------------------------------------------
        if (takGameId) {
            try {
                if (updatedSpacesCombo) {
                    const res = await axios({
                        url: `/takGame/${takGameId}`,
                        method: 'PUT',
                        data: JSON.stringify(updatedSpacesCombo),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    if (res) {
                        setSpaces(res.data.takSpaces)
                        console.log('--1. axios:move first square')
                    }
                }
            }
            catch (err) { console.log(err) }
        } else { setSpaces(updatedSpacesCombo) }
        // --------------------------------------------------------------------------------------------------
        setPieceMoveAndCount((obj) => { return { ...obj, space: spaceId, piecesToMove: removedPieces } })

        // console.log('updateCombo_mf(1) :', updatedSpacesCombo)
        // console.log('sourcePieces_mf(1) :', sourcePieces)
        // console.log('destinationPieces_mf(1) :', destinationPieces)
    }


    //----------------------------------------------------------------- f ----
    async function movePiecesSecondSquare(piecesToMove, spaceId, spaceFound) {
        let stackPieces = [...piecesToMove]
        let destinationPieces = [...spaceFound.pieces]
        let removedPiece = [stackPieces.shift()]
        // console.log('stack-2:', stackPieces)  //skj 8-15-2023 (test)
        // console.log('dest-2:', destinationPieces)  //skj 8-15-2023 (test)
        // console.log('remvd-2:', removedPiece)  //skj 8-15-2023 (test)

        // if the top source piece is a capstone, and the top destination piece a wall, make it flat
        let topRemoved = removedPiece[removedPiece.length - 1].slice(1, 2)
        let topDestination = destinationPieces[destinationPieces.length - 1]?.slice(1, 2)

        if (topRemoved === 'C' && topDestination === 'W') {
            let flatWall = destinationPieces[destinationPieces.length - 1].replace(/(?<=\w)W/, 'F')
            // console.log('flatteded Wall_mf(2): ', flatWall)
            destinationPieces.pop()
            destinationPieces.push(flatWall)
        }
        // console.log('topRemvd:', topRemoved, 'topDest:', topDestination)  // skj 8-15-2023 (test)
        // console.log('removedPiece_mf(2) :', removedPiece)

        destinationPieces.push(removedPiece.shift())  // move 1 piece

        const updatedSpaces = spaces.map((obj) => {
            if (obj.space === spaceId) { return { ...obj, pieces: destinationPieces } }  // update destination
            else { return obj }
        })

        const updatedSpacesCombo = determineMoveSecondSquares(updatedSpaces, pieceMoveAndCount, spaceFound)
        // --------------------------------------------------------------------------------------------------
        if (takGameId) {
            try {
                if (updatedSpacesCombo) {
                    const res = await axios({
                        url: `/takGame/${takGameId}`,
                        method: 'PUT',
                        data: JSON.stringify(updatedSpacesCombo),
                        headers: {
                            'Content-Type': 'application/json',
                        }
                    })
                    if (res) {
                        setSpaces(res.data.takSpaces)
                        console.log('--2. axios: move second square')
                    }
                }
            }
            catch (err) { console.log(err) }
        } else { setSpaces(updatedSpacesCombo) }
        // --------------------------------------------------------------------------------------------------
        setPieceMoveAndCount((obj) => { return { ...obj, space: spaceId, piecesToMove: stackPieces } })

        // console.log('updateCombo_mf(2) :', updatedSpacesCombo)
        // console.log('stackPieces_mf(2) :', stackPieces)
        // console.log('destinationPieces_mf(2) :', destinationPieces)
    }


    //----------------------------------------------------------------- f ----
    async function handleClickSquare(e) {
        let spaceId = e.target.id
        const spaceFound = spaces.find((obj) => obj.space === spaceId)
        let sourcePieces

        if (spaceFound) {
            let legalMove = spaceFound.moveSquare
            let numberSquarePieces = spaceFound.pieces.length
            let stackSize = pieceMoveAndCount.piecesToMove.length
            let moveNumber = pieceMoveAndCount.number
            let blackMax = gameState.blackMaxPiece
            let whiteMax = gameState.whiteMaxPiece
            let whitesTurn = gameState.whiteTurn
            let blacksTurn = !gameState.whiteTurn

            // add a piece (an empty space with no 'active' move stack affiliation and no maxPieces)
            if (numberSquarePieces === 0 && stackSize === 0 && (!blackMax && blacksTurn || !whiteMax && whitesTurn)
                ||
                numberSquarePieces === 0 && moveNumber === stackSize && legalMove === false && (!blackMax && blacksTurn || !whiteMax && whitesTurn)
            ) {
                setPieceMoveAndCount((obj) => { return { source: '', space: '', number: 0, piecesToMove: [] } })

                let currentPieceCode
                const currentPiece = createPiece(pieceType)
                if (currentPiece) { currentPieceCode = currentPiece.code() }

                const spacePieces = [...spaceFound.pieces, currentPieceCode]
                const updatedSpaces = spaces.map((obj) => {
                    if (obj.space === spaceId) { return { ...obj, pieces: spacePieces, activeSpace: true, moveSquare: false } }
                    else { return { ...obj, activeSpace: false, moveSquare: false } }
                })
                setDisplayMessage('')
                setGameState((obj) => { return { ...obj, whiteTurn: blacksTurn } })
                // --------------------------------------------------------------------------------------------------
                if (takGameId && moveNumber) { // I had to add moveNumber=true because it would do this before createPiece()-->8 lines above (if I did not add a console.log() on top of new TakPiece('black', 'flat', 1) wtf-??); the create 1st piece function sets moveNumber=100
                    try {
                        if (updatedSpaces) {
                            const res = await axios({
                                url: `/takGame/${takGameId}`,
                                method: 'PUT',
                                data: JSON.stringify(updatedSpaces),
                                headers: {
                                    'Content-Type': 'application/json',
                                }
                            })
                            if (res) {
                                setSpaces(res.data.takSpaces)
                                console.log('--0. axios: add a piece to empty space')
                            }
                        }
                    }
                    catch (err) { console.log(err) }
                } else { setSpaces(updatedSpaces) }
            }
            // --------------------------------------------------------------------------------------------------
            // "Reached Max Pieces!" (maxPieces=true when attempting to add a piece on an empty space with no 'active' move stack affiliation)
            if (numberSquarePieces === 0 && stackSize === 0 && (blackMax && blacksTurn || whiteMax && whitesTurn)
                ||
                numberSquarePieces === 0 && moveNumber === stackSize && legalMove === false && (blackMax && blacksTurn || whiteMax && whitesTurn)
            ) {
                setPieceMoveAndCount((obj) => { return { source: '', space: '', number: 98, piecesToMove: [] } })
                setDisplayMessage('You have reached the maximum of 21 pieces!')
            }

            // "this square already has pieces, select piece to move"
            if (numberSquarePieces > 0 &&
                (moveNumber === 0 || moveNumber === 99 || moveNumber === undefined || (moveNumber > 0 && moveNumber < 97) && stackSize === 0)
            ) {
                let topSquarePiece = spaceFound?.pieces[spaceFound.pieces.length - 1].charAt(0)
                // To move a piece, the top piece color must be the current player's color
                if (topSquarePiece === 'B' && blacksTurn || topSquarePiece === 'W' && whitesTurn) {
                    setPieceMoveAndCount((obj) => { return { source: '', space: '', number: 99, piecesToMove: [] } })
                    // the following spaces array update is used just to set the square active for TakSpaceDisplay
                    const activateSpace = spaces.map((obj) => {
                        if (obj.space === spaceId) { return { ...obj, activeSpace: true } }
                        else { return { ...obj, activeSpace: false } }
                    })
                    // setDisplayMessage('x-Click the bottom-most piece you want to move')
                    setSpaces(activateSpace)
                }
                else {
                    setDisplayMessage('The top piece is not your color')
                    console.log('The top piece is not your color')
                }
            }

            // first piece move (+number: = +pieces_to_move)
            if (moveNumber > 0 && stackSize > 0 && moveNumber === stackSize && legalMove === true) {
                const activateSpace = spaces.map((obj) => {
                    if (obj.space === spaceId) { return { ...obj, activeSpace: true } }
                    else { return { ...obj, activeSpace: false } }
                })
                setSpaces(activateSpace)

                spaces.map((obj) => {
                    if (obj.space === pieceMoveAndCount.space) {
                        sourcePieces = obj.pieces.map((p, i) => { return p })
                    }
                })
                movePieces(moveNumber, sourcePieces, spaceId, spaceFound)
                setDisplayMessage(`You have moved from ${pieceMoveAndCount.space} to ${spaceId}`)
            }

            // second piece move (+number: > +pieces_to_move)
            if ((moveNumber > 0 && moveNumber < 97) && stackSize > 0 && moveNumber > stackSize) {
                const activateSpace = spaces.map((obj) => {
                    if (obj.space === spaceId) { return { ...obj, activeSpace: true } }
                    else { return { ...obj, activeSpace: false } }
                })
                setSpaces(activateSpace)
                movePiecesSecondSquare(pieceMoveAndCount.piecesToMove, spaceId, spaceFound)
                setDisplayMessage(`You have moved from ${pieceMoveAndCount.space} to ${spaceId}`)
            }
        }
    }


    //----------------------------------------------------------------- f ----
    function handleNumberPieceMoveClick(e) {
        const numPieces = e.target.id  // id = index+1
        const spaceCode = e.target.parentElement.id
        const spacesCopy = [...spaces]

        let piecesArray = []
        let piecesArrayLength

        let spaceActiveX
        let spaceActiveY

        spacesCopy.filter((obj) => {
            if (obj.space === spaceCode) {
                spaceActiveX = obj.x
                spaceActiveY = obj.y
                piecesArray = [...obj.pieces]
                piecesArrayLength = obj.pieces.length
            }
        })

        let numberSelected = parseInt(numPieces)
        let topSquarePiece = piecesArray[piecesArray.length - 1].charAt(0)
        let moveNumber = pieceMoveAndCount.number
        let blacksTurn = !gameState.whiteTurn
        let whitesTurn = gameState.whiteTurn

        // console.log('piecesArray_before-splice: ', piecesArray)
        // To move a piece, the top piece color must be the current player's color and it must not be move #2 (code)
        if ((topSquarePiece === 'B' && blacksTurn || topSquarePiece === 'W' && whitesTurn) && moveNumber !== 100 && numberSelected < 6) {
            let removedPieces = piecesArray.splice(piecesArray.length - numberSelected)
            setPieceMoveAndCount((obj) => { return { source: spaceCode, space: spaceCode, number: numberSelected, piecesToMove: [...removedPieces] } })

            const updatedSpaces = determineMoveSquares(spacesCopy, spaceCode, spaceActiveX, spaceActiveY, removedPieces)
            setSpaces(updatedSpaces)
            // console.log(`handleMovePiece(f) removed pieces: ${removedPieces}`)
            // console.log(`# selected : ${numberSelected}`)
            // console.log('spaceCode: ', spaceCode)
            // console.log('active-x: ', spaceActiveX)
            // console.log('active-y: ', spaceActiveY)
        }
        else if (moveNumber === 100) {
            setDisplayMessage('Turn#2: Place flat white on empty square')
            console.log('Turn#2: Place flat white on empty square')
        }
        else if (numberSelected > 5) {
            setDisplayMessage('Max 5 pieces in move stack')
            console.log('Max 5 pieces in move stack')
        }
        else {
            setDisplayMessage('The top piece is not your color')
            console.log('The top piece is not your color')
        }
    }

    //------------------------------------------------------------elements ----
    const squareDivArray = spaces.map((sp, i) => {
        return (
            <div
                className={(sp.moveSquare) ? 'takSpaceBold' : 'takSpace'}
                id={sp.space}
                key={i}
                onClick={pieceMoveAndCount.piecesToMove.length > 0 // skj 6-5-2023
                    && pieceMoveAndCount.number > pieceMoveAndCount.piecesToMove.length  // skj now!
                    && !sp.moveSquare
                    ? () => { setDisplayMessage('Click an active square') }
                    : handleClickSquare}
            >
                {sp.pieces && sp.pieces.toReversed().map((piece, index) => {
                    return <span
                        className={`gridSpan${piece.slice(0, 2)}`}
                        id={index + 1}
                        key={index}
                        onClick={(pieceMoveAndCount.piecesToMove?.length > 0 && (pieceMoveAndCount?.number > pieceMoveAndCount.piecesToMove?.length)) // skj 6-5-2023
                            ? () => { setDisplayMessage('Click an active square') }
                            : handleNumberPieceMoveClick}
                    >
                        {piece}</span>
                })}
                <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{sp.space}</div>
            </div>
        )
    })

    //=======================================================================================================================================================

    return (
        <>
            <div className='rightGameBoard'>
                <div className='gridWrapper'>
                    {squareDivArray ? squareDivArray : ''}
                </div>
            </div>
        </>
    )
}