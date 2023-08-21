const defaultSpaces2 = [
    { space: 'x1 y5', x: 1, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y4', x: 1, y: 4, pieces: ['WF3', 'BF3'], activeSpace: false, moveSquare: false },
    { space: 'x1 y3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y1', x: 1, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y5', x: 2, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y3', x: 2, y: 3, pieces: ['BF15'], activeSpace: false, moveSquare: false },
    { space: 'x2 y2', x: 2, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y1', x: 2, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y5', x: 3, y: 5, pieces: ['BF6', 'WF7', 'BF7', 'WF8'], activeSpace: false, moveSquare: false },
    { space: 'x3 y4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y3', x: 3, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y2', x: 3, y: 2, pieces: ['BF1'], activeSpace: false, moveSquare: false },
    { space: 'x3 y1', x: 3, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y5', x: 4, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y4', x: 4, y: 4, pieces: ['WW20'], activeSpace: false, moveSquare: false },
    { space: 'x4 y3', x: 4, y: 3, pieces: ['BW5', 'BC6'], activeSpace: false, moveSquare: false },
    { space: 'x4 y2', x: 4, y: 2, pieces: ['WF4', 'BF4', 'WW5'], activeSpace: false, moveSquare: false },
    { space: 'x4 y1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y5', x: 5, y: 5, pieces: ['BF17', 'WF18', 'BF18', 'WF19', 'BF19'], activeSpace: false, moveSquare: false },
    { space: 'x5 y4', x: 5, y: 4, pieces: ['BF14', 'WF15', 'WF16', 'BF16', 'WF17'], activeSpace: false, moveSquare: false },
    { space: 'x5 y3', x: 5, y: 3, pieces: ['BF11', 'WF12', 'BF12', 'WF13', 'BF13', 'WF14'], activeSpace: false, moveSquare: false },
    { space: 'x5 y2', x: 5, y: 2, pieces: ['BF8', 'WF9', 'BF9', 'WF10', 'BF10', 'WF11'], activeSpace: false, moveSquare: false },
    { space: 'x5 y1', x: 5, y: 1, pieces: ['WF1', 'WF2', 'BF2'], activeSpace: false, moveSquare: false }
]

const defaultSpaces = [
    { space: 'x1 y5', x: 1, y: 5, pieces: ['WF1'], activeSpace: false, moveSquare: false },
    { space: 'x1 y4', x: 1, y: 4, pieces: ['WF12'], activeSpace: false, moveSquare: false },
    { space: 'x1 y3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y1', x: 1, y: 1, pieces: ['WF2'], activeSpace: false, moveSquare: false },
    { space: 'x2 y5', x: 2, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y4', x: 2, y: 4, pieces: ['WF3'], activeSpace: false, moveSquare: false },
    { space: 'x2 y3', x: 2, y: 3, pieces: ['WF4'], activeSpace: false, moveSquare: false },
    { space: 'x2 y2', x: 2, y: 2, pieces: ['WF5'], activeSpace: false, moveSquare: false },
    { space: 'x2 y1', x: 2, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y5', x: 3, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y3', x: 3, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y2', x: 3, y: 2, pieces: ['WF6'], activeSpace: false, moveSquare: false },
    { space: 'x3 y1', x: 3, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y5', x: 4, y: 5, pieces: ['WF10'], activeSpace: false, moveSquare: false },
    { space: 'x4 y4', x: 4, y: 4, pieces: ['WF9'], activeSpace: false, moveSquare: false },
    { space: 'x4 y3', x: 4, y: 3, pieces: ['WF8'], activeSpace: false, moveSquare: false },
    { space: 'x4 y2', x: 4, y: 2, pieces: ['WF7'], activeSpace: false, moveSquare: false },
    { space: 'x4 y1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y5', x: 5, y: 5, pieces: ['WF11'], activeSpace: false, moveSquare: false },
    { space: 'x5 y4', x: 5, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y3', x: 5, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y2', x: 5, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false }
]

//---------------------------------------------------------------------------------------
// a. pull all the top non-wall pieces, output an array of 'piece codes' indicating x/y-axis

let topBlackPieceXArray = []
let topWhitePieceXArray = []

let topBlackPieceYArray = []
let topWhitePieceYArray = []

for (let space of defaultSpaces) {
    if (space.pieces[space.pieces.length - 1]
        && space.pieces[space.pieces.length - 1].charAt(1) !== 'W'
        && space.pieces[space.pieces.length - 1].charAt(0) === 'B') {
        topBlackPieceXArray.push(`x${space.x}y${space.y}s${space.pieces.length}${space.pieces[space.pieces.length - 1]}`.slice(0, 8))
    }
    if (space.pieces[space.pieces.length - 1]
        && space.pieces[space.pieces.length - 1].charAt(1) !== 'W'
        && space.pieces[space.pieces.length - 1].charAt(0) === 'W') {
        topWhitePieceXArray.push(`x${space.x}y${space.y}s${space.pieces.length}${space.pieces[space.pieces.length - 1]}`.slice(0, 8))
    }
}

for (let space of defaultSpaces.sort((a, b) => a.y - b.y)) {
    if (space.pieces[space.pieces.length - 1]
        && space.pieces[space.pieces.length - 1].charAt(1) !== 'W'
        && space.pieces[space.pieces.length - 1].charAt(0) === 'B') {
        topBlackPieceYArray.push(`x${space.x}y${space.y}s${space.pieces.length}${space.pieces[space.pieces.length - 1]}`.slice(0, 8))
    }
    if (space.pieces[space.pieces.length - 1]
        && space.pieces[space.pieces.length - 1].charAt(1) !== 'W'
        && space.pieces[space.pieces.length - 1].charAt(0) === 'W') {
        topWhitePieceYArray.push(`x${space.x}y${space.y}s${space.pieces.length}${space.pieces[space.pieces.length - 1]}`.slice(0, 8))
    }
}

console.log('blackX: ', topBlackPieceXArray)
console.log('whiteX: ', topWhitePieceXArray)
console.log('blackY: ', topBlackPieceYArray)
console.log('whiteY: ', topWhitePieceYArray)

//---------------------------------------------------------------------------------------
// b. create array of x/y-axis positions, cretae a Set() of x/y-axis positions then turn those into an arrays

const blackXSet = new Set()
const blackYSet = new Set()
const whiteXSet = new Set()
const whiteYSet = new Set()


for (let blackPiece of topBlackPieceXArray) {
    blackXSet.add(blackPiece.slice(0, 2))
    blackYSet.add(blackPiece.slice(2, 4))
}
for (let whitePiece of topWhitePieceXArray) {
    whiteXSet.add(whitePiece.slice(0, 2))
    whiteYSet.add(whitePiece.slice(2, 4))
}

let blackXSetArray = Array.from(blackXSet)
let blackYSetArray = Array.from(blackYSet)
let whiteXSetArray = Array.from(whiteXSet)
let whiteYSetArray = Array.from(whiteYSet)

console.log('blackXSet: ', blackXSetArray)
console.log('blackYSet: ', blackYSetArray)
console.log('whiteXSet: ', whiteXSetArray)
console.log('whiteYSet: ', whiteYSetArray)

//---------------------------------------------------------------------------------------
// c. compare the positions of each axis' squares, push the index onto an array if they are 1 or less appart

let blackXCompare = []
let blackYCompare = []
let whiteXCompare = []
let whiteYCompare = []
let newTry = []

// for (let i = 0; i < topWhitePieceXArray.length - 1; i++) {
//     if (
//         (topWhitePieceXArray[i + 1].slice(1, 2) === topWhitePieceXArray[i].slice(1, 2))
//         && ((topWhitePieceXArray[i + 1].slice(3, 4) - topWhitePieceXArray[i].slice(3, 4)) === 1)
//         // || ((topWhitePieceXArray[i + 1].slice(3, 4) - topWhitePieceXArray[i].slice(3, 4)) === 1))
//     ) { whiteYCompare.push(topWhitePieceXArray[i + 1], topWhitePieceXArray[i]) }
// }

// for (let i = 0; i < topWhitePieceYArray.length - 1; i++) {
//     if (
//         (topWhitePieceYArray[i].slice(3, 4) === topWhitePieceYArray[i + 1].slice(3, 4))
//         && ((topWhitePieceYArray[i + 1].slice(1, 2) - topWhitePieceYArray[i].slice(1, 2)) === -1)
//         //     || ((topWhitePieceYArray[i + 1].slice(1, 2) - topWhitePieceYArray[i].slice(1, 2)) === 1))
//     ) { whiteXCompare.push(topWhitePieceYArray[i + 1], topWhitePieceYArray[i]) }
// }

for (let i = 0; i < topWhitePieceXArray.length - 1; i++) {
    if (
        ((topWhitePieceXArray[i].slice(1, 2) - topWhitePieceXArray[i + 1].slice(1, 2)) === -1) && (topWhitePieceXArray[i].slice(3, 4) === topWhitePieceXArray[i + 1].slice(3, 4))
        // || ((topWhitePieceXArray[i + 1].slice(3, 4) - topWhitePieceXArray[i].slice(3, 4)) === -1)
        // || ((topWhitePieceXArray[i + 1].slice(3, 4) - topWhitePieceXArray[i].slice(3, 4)) === 1))
        // ) { newTry.push(i) }
    ) { newTry.push(topWhitePieceXArray[i], topWhitePieceXArray[i + 1]) }
}

console.log('blackYCompare: ', blackYCompare)
console.log('blackXCompare: ', blackXCompare)
console.log('whiteYCompare: ', whiteYCompare)
console.log('whiteXCompare: ', whiteXCompare)
console.log('newTry: ', newTry)


//---------------------------------------------------------------------------------------
// d. check for Set() arrays === 5 and make sure

// if (blackYSetArray === 5 && blackXCompare?.length === blackXArray?.length) { console.log('Black wins with road on Y-axis') }
