const defaultSpaces = [
    { space: 'x1 y5', x: 1, y: 5, pieces: ['BF1'], activeSpace: false, moveSquare: false },
    { space: 'x1 y4', x: 1, y: 4, pieces: ['BF2'], activeSpace: false, moveSquare: false },
    { space: 'x1 y3', x: 1, y: 3, pieces: ['WF1'], activeSpace: false, moveSquare: false },
    { space: 'x1 y2', x: 1, y: 2, pieces: ['BF3'], activeSpace: false, moveSquare: false },
    { space: 'x1 y1', x: 1, y: 1, pieces: ['WF2'], activeSpace: false, moveSquare: false },
    { space: 'x2 y5', x: 2, y: 5, pieces: ['WF3', 'BF13'], activeSpace: false, moveSquare: false },
    { space: 'x2 y4', x: 2, y: 4, pieces: ['BF4'], activeSpace: false, moveSquare: false },
    { space: 'x2 y3', x: 2, y: 3, pieces: ['WF4'], activeSpace: false, moveSquare: false },
    { space: 'x2 y2', x: 2, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    // { space: 'x2 y2', x: 2, y: 2, pieces: ['BF99'], activeSpace: false, moveSquare: false },
    { space: 'x2 y1', x: 2, y: 1, pieces: ['WF5'], activeSpace: false, moveSquare: false },
    { space: 'x3 y5', x: 3, y: 5, pieces: ['WF9'], activeSpace: false, moveSquare: false },
    { space: 'x3 y4', x: 3, y: 4, pieces: ['WF8'], activeSpace: false, moveSquare: false },
    { space: 'x3 y3', x: 3, y: 3, pieces: ['WF6'], activeSpace: false, moveSquare: false },
    { space: 'x3 y2', x: 3, y: 2, pieces: ['BF6'], activeSpace: false, moveSquare: false },
    { space: 'x3 y1', x: 3, y: 1, pieces: ['BF7'], activeSpace: false, moveSquare: false },
    { space: 'x4 y5', x: 4, y: 5, pieces: ['WF10'], activeSpace: false, moveSquare: false },
    { space: 'x4 y4', x: 4, y: 4, pieces: ['WF7'], activeSpace: false, moveSquare: false },
    { space: 'x4 y3', x: 4, y: 3, pieces: ['BF8'], activeSpace: false, moveSquare: false },
    { space: 'x4 y2', x: 4, y: 2, pieces: ['BF9', 'WF14'], activeSpace: false, moveSquare: false },
    { space: 'x4 y1', x: 4, y: 1, pieces: ['BF10'], activeSpace: false, moveSquare: false },
    { space: 'x5 y5', x: 5, y: 5, pieces: ['WF11', 'BF14'], activeSpace: false, moveSquare: false },
    { space: 'x5 y4', x: 5, y: 4, pieces: ['BF11'], activeSpace: false, moveSquare: false },
    { space: 'x5 y3', x: 5, y: 3, pieces: ['WF12'], activeSpace: false, moveSquare: false },
    { space: 'x5 y2', x: 5, y: 2, pieces: ['BF12'], activeSpace: false, moveSquare: false },
    { space: 'x5 y1', x: 5, y: 1, pieces: ['WF13'], activeSpace: false, moveSquare: false }
]

function detectFullBoardMaxPiece(spaces, maxBlack, maxWhite) {
    let filledSquares = []
    let fullBoard = false
    let topBlackPieceArray = []
    let topWhitePieceArray = []
    let winColor
    let gameOver = false

    // detrmine if al squares are filled withe pieces
    for (let space of spaces) {
        if (space.pieces.length > 0) { filledSquares.push(true) }
        if (filledSquares.length === 25) { fullBoard = true }
    }

    // grab and count all the top non-wall pieces for each color
    if (fullBoard || maxWhite || maxBlack) {
        for (let space of spaces) {
            let topPiece = space.pieces[space.pieces.length - 1]

            if (topPiece && topPiece.charAt(1) !== 'W' && topPiece.charAt(0) === 'B') {
                topBlackPieceArray.push(`${topPiece}`.slice(0, 2))
            }
            if (topPiece && topPiece.charAt(1) !== 'W' && topPiece.charAt(0) === 'W') {
                topWhitePieceArray.push(`${topPiece}`.slice(0, 2))
            }
        }

        // color with most flat pieces wins
        let numBlackPieces = topBlackPieceArray.length
        let numWhitePieces = topWhitePieceArray.length
        if (numBlackPieces === numWhitePieces) { console.log('Tie ball game!'); winColor = 'tie' }
        else if (numBlackPieces > numWhitePieces) { console.log('Black Wins!'); winColor = 'black' }
        else { console.log('White wins!'); winColor = 'white' }
        // console.log(topBlackPieceArray)
        // console.log(topWhitePieceArray)
    }

    return { gameOver, winColor }
}
console.log(detectFullBoard(defaultSpaces))