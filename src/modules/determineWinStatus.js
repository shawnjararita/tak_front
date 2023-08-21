import { axisCheck, determineSpaceBetween, determineSpaceBetweenSuccess, objectCompare } from './gameWinHelpers.js'

const defaultSpacesD = [
    { space: 'x1 y5', x: 1, y: 5, pieces: ['WF1'], activeSpace: false, moveSquare: false },
    { space: 'x1 y4', x: 1, y: 4, pieces: ['WF12'], activeSpace: false, moveSquare: false },
    { space: 'x1 y3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y1', x: 1, y: 1, pieces: ['WF2'], activeSpace: false, moveSquare: false },
    { space: 'x2 y5', x: 2, y: 5, pieces: ['WF3'], activeSpace: false, moveSquare: false },
    { space: 'x2 y4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y3', x: 2, y: 3, pieces: ['WF4'], activeSpace: false, moveSquare: false },
    { space: 'x2 y2', x: 2, y: 2, pieces: ['WF5'], activeSpace: false, moveSquare: false },
    { space: 'x2 y1', x: 2, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y5', x: 3, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y4', x: 3, y: 4, pieces: ['WF13'], activeSpace: false, moveSquare: false },
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

const defaultSpacesD2 = [
    { space: 'x1 y5', x: 1, y: 5, pieces: ['WF1'], activeSpace: false, moveSquare: false },
    { space: 'x1 y4', x: 1, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y1', x: 1, y: 1, pieces: ['WF2'], activeSpace: false, moveSquare: false },
    { space: 'x2 y5', x: 2, y: 5, pieces: ['WF3'], activeSpace: false, moveSquare: false },
    { space: 'x2 y4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y3', x: 2, y: 3, pieces: ['WF4'], activeSpace: false, moveSquare: false },
    { space: 'x2 y2', x: 2, y: 2, pieces: ['WF12'], activeSpace: false, moveSquare: false },
    { space: 'x2 y1', x: 2, y: 1, pieces: ['WF5'], activeSpace: false, moveSquare: false },
    { space: 'x3 y5', x: 3, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y3', x: 3, y: 3, pieces: ['WF6'], activeSpace: false, moveSquare: false },
    { space: 'x3 y2', x: 3, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y1', x: 3, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y5', x: 4, y: 5, pieces: ['WF10'], activeSpace: false, moveSquare: false },
    { space: 'x4 y4', x: 4, y: 4, pieces: ['WF13'], activeSpace: false, moveSquare: false },
    { space: 'x4 y3', x: 4, y: 3, pieces: ['WF8'], activeSpace: false, moveSquare: false },
    { space: 'x4 y2', x: 4, y: 2, pieces: ['WF7'], activeSpace: false, moveSquare: false },
    { space: 'x4 y1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y5', x: 5, y: 5, pieces: ["WF11"], activeSpace: false, moveSquare: false },
    { space: 'x5 y4', x: 5, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y3', x: 5, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y2', x: 5, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false }
]

const defaultSpacesX = [
    { space: 'x1 y5', x: 1, y: 5, pieces: ['BF1', 'WF1'], activeSpace: false, moveSquare: false },
    { space: 'x1 y4', x: 1, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y1', x: 1, y: 1, pieces: ['WF2'], activeSpace: false, moveSquare: false },
    { space: 'x2 y5', x: 2, y: 5, pieces: ['WF3'], activeSpace: false, moveSquare: false },
    { space: 'x2 y4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y3', x: 2, y: 3, pieces: ['WF4'], activeSpace: false, moveSquare: false },
    { space: 'x2 y2', x: 2, y: 2, pieces: ['WF12'], activeSpace: false, moveSquare: false },
    { space: 'x2 y1', x: 2, y: 1, pieces: ['WF5'], activeSpace: false, moveSquare: false },
    { space: 'x3 y5', x: 3, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y3', x: 3, y: 3, pieces: ['WF6'], activeSpace: false, moveSquare: false },
    { space: 'x3 y2', x: 3, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y1', x: 3, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y5', x: 4, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y4', x: 4, y: 4, pieces: ['WF13'], activeSpace: false, moveSquare: false },
    { space: 'x4 y3', x: 4, y: 3, pieces: ['WF8'], activeSpace: false, moveSquare: false },
    { space: 'x4 y2', x: 4, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y5', x: 5, y: 5, pieces: ["WF11"], activeSpace: false, moveSquare: false },
    { space: 'x5 y4', x: 5, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y3', x: 5, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y2', x: 5, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false }
]

const defaultSpaces = [
    { space: 'x1 y5', x: 1, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y4', x: 1, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y1', x: 1, y: 1, pieces: ['WF2'], activeSpace: false, moveSquare: false },
    { space: 'x2 y5', x: 2, y: 5, pieces: ['WF3', 'BF1'], activeSpace: false, moveSquare: false },
    { space: 'x2 y4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y3', x: 2, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y2', x: 2, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y1', x: 2, y: 1, pieces: ['WF5'], activeSpace: false, moveSquare: false },
    { space: 'x3 y5', x: 3, y: 5, pieces: ['WF99'], activeSpace: false, moveSquare: false },
    { space: 'x3 y4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y3', x: 3, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y2', x: 3, y: 2, pieces: ['WF98'], activeSpace: false, moveSquare: false },
    { space: 'x3 y1', x: 3, y: 1, pieces: ['WF6'], activeSpace: false, moveSquare: false },
    { space: 'x4 y5', x: 4, y: 5, pieces: ['WF10'], activeSpace: false, moveSquare: false },
    { space: 'x4 y4', x: 4, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y3', x: 4, y: 3, pieces: ['WF8'], activeSpace: false, moveSquare: false },
    { space: 'x4 y2', x: 4, y: 2, pieces: ['WF99'], activeSpace: false, moveSquare: false },
    { space: 'x4 y1', x: 4, y: 1, pieces: ['WF9'], activeSpace: false, moveSquare: false },
    { space: 'x5 y5', x: 5, y: 5, pieces: ["WF11"], activeSpace: false, moveSquare: false },
    { space: 'x5 y4', x: 5, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y3', x: 5, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y2', x: 5, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false },
]

const defaultSpacesG2 = [
    { space: 'x1 y5', x: 1, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y4', x: 1, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y3', x: 1, y: 3, pieces: ['WF1'], activeSpace: false, moveSquare: false },
    { space: 'x1 y2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y1', x: 1, y: 1, pieces: ['WF2'], activeSpace: false, moveSquare: false },
    { space: 'x2 y5', x: 2, y: 5, pieces: ['WF3', 'BF1'], activeSpace: false, moveSquare: false },
    { space: 'x2 y4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y3', x: 2, y: 3, pieces: ['WF4'], activeSpace: false, moveSquare: false },
    { space: 'x2 y2', x: 2, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y1', x: 2, y: 1, pieces: ['WF5'], activeSpace: false, moveSquare: false },
    { space: 'x3 y5', x: 3, y: 5, pieces: ['WF99'], activeSpace: false, moveSquare: false },
    { space: 'x3 y4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y3', x: 3, y: 3, pieces: ['WF6'], activeSpace: false, moveSquare: false },
    { space: 'x3 y2', x: 3, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y1', x: 3, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y5', x: 4, y: 5, pieces: ['WF10'], activeSpace: false, moveSquare: false },
    { space: 'x4 y4', x: 4, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y3', x: 4, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y2', x: 4, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y5', x: 5, y: 5, pieces: ["WF11"], activeSpace: false, moveSquare: false },
    { space: 'x5 y4', x: 5, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y3', x: 5, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y2', x: 5, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false }
]

const defaultSpacesG3 = [
    { space: 'x1 y5', x: 1, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y4', x: 1, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x1 y1', x: 1, y: 1, pieces: ['WF2'], activeSpace: false, moveSquare: false },
    { space: 'x2 y5', x: 2, y: 5, pieces: ['WF3', 'BF1'], activeSpace: false, moveSquare: false },
    { space: 'x2 y4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y3', x: 2, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y2', x: 2, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x2 y1', x: 2, y: 1, pieces: ['WF5'], activeSpace: false, moveSquare: false },
    { space: 'x3 y5', x: 3, y: 5, pieces: ['WF99'], activeSpace: false, moveSquare: false },
    { space: 'x3 y4', x: 3, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y3', x: 3, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y2', x: 3, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x3 y1', x: 3, y: 1, pieces: ['WF6'], activeSpace: false, moveSquare: false },
    { space: 'x4 y5', x: 4, y: 5, pieces: ['WF10'], activeSpace: false, moveSquare: false },
    { space: 'x4 y4', x: 4, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y3', x: 4, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y2', x: 4, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x4 y1', x: 4, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y5', x: 5, y: 5, pieces: ["WF11"], activeSpace: false, moveSquare: false },
    { space: 'x5 y4', x: 5, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y3', x: 5, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y2', x: 5, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'x5 y1', x: 5, y: 1, pieces: [], activeSpace: false, moveSquare: false }
]



export function determineWinStatus(spaces, whiteTurn) {
    let topBlackPieceArray = []
    let topWhitePieceArray = []


    // grab the top non-wall piece for each color
    for (let space of spaces) {
        let topPiece = space.pieces[space.pieces.length - 1]

        if (topPiece && topPiece.charAt(1) !== 'W' && topPiece.charAt(0) === 'B') {
            topBlackPieceArray.push(`x${space.x}y${space.y}s${space.pieces.length}${topPiece}`.slice(0, 8))
        }
        if (topPiece && topPiece.charAt(1) !== 'W' && topPiece.charAt(0) === 'W') {
            topWhitePieceArray.push(`x${space.x}y${space.y}s${space.pieces.length}${topPiece}`.slice(0, 8))
        }
    }
    // console.log('blackPieceArray: ', topBlackPieceArray)
    // console.log('whitePieceArray: ', topWhitePieceArray)

    // break-up the top piece array into 5 cols/rows
    let topBlackPieceX1 = topBlackPieceArray.filter((p) => { return p.charAt(1) === '1' })
    let topBlackPieceX2 = topBlackPieceArray.filter((p) => { return p.charAt(1) === '2' })
    let topBlackPieceX3 = topBlackPieceArray.filter((p) => { return p.charAt(1) === '3' })
    let topBlackPieceX4 = topBlackPieceArray.filter((p) => { return p.charAt(1) === '4' })
    let topBlackPieceX5 = topBlackPieceArray.filter((p) => { return p.charAt(1) === '5' })

    let topBlackPieceY1 = topBlackPieceArray.filter((p) => { return p.charAt(3) === '1' })
    let topBlackPieceY2 = topBlackPieceArray.filter((p) => { return p.charAt(3) === '2' })
    let topBlackPieceY3 = topBlackPieceArray.filter((p) => { return p.charAt(3) === '3' })
    let topBlackPieceY4 = topBlackPieceArray.filter((p) => { return p.charAt(3) === '4' })
    let topBlackPieceY5 = topBlackPieceArray.filter((p) => { return p.charAt(3) === '5' })

    let topWhitePieceX1 = topWhitePieceArray.filter((p) => { return p.charAt(1) === '1' })
    let topWhitePieceX2 = topWhitePieceArray.filter((p) => { return p.charAt(1) === '2' })
    let topWhitePieceX3 = topWhitePieceArray.filter((p) => { return p.charAt(1) === '3' })
    let topWhitePieceX4 = topWhitePieceArray.filter((p) => { return p.charAt(1) === '4' })
    let topWhitePieceX5 = topWhitePieceArray.filter((p) => { return p.charAt(1) === '5' })

    let topWhitePieceY1 = topWhitePieceArray.filter((p) => { return p.charAt(3) === '1' })
    let topWhitePieceY2 = topWhitePieceArray.filter((p) => { return p.charAt(3) === '2' })
    let topWhitePieceY3 = topWhitePieceArray.filter((p) => { return p.charAt(3) === '3' })
    let topWhitePieceY4 = topWhitePieceArray.filter((p) => { return p.charAt(3) === '4' })
    let topWhitePieceY5 = topWhitePieceArray.filter((p) => { return p.charAt(3) === '5' })


    // console.log('topWhitePieceX1: ', topWhitePieceX1)
    // console.log('topWhitePieceX2: ', topWhitePieceX2)
    // console.log('topWhitePieceX3: ', topWhitePieceX3)
    // console.log('topWhitePieceX4: ', topWhitePieceX4)
    // console.log('topWhitePieceX5: ', topWhitePieceX5)
    // console.log('topWhitePieceY1: ', topWhitePieceY1)
    // console.log('topWhitePieceY2: ', topWhitePieceY2)
    // console.log('topWhitePieceY3: ', topWhitePieceY3)
    // console.log('topWhitePieceY4: ', topWhitePieceY4)
    // console.log('topWhitePieceY5: ', topWhitePieceY5)

    //----------------------------------------------------------------------------------------------------------------------

    let xBlackObj = axisCheck('x', topBlackPieceX1, topBlackPieceX2, topBlackPieceX3, topBlackPieceX4, topBlackPieceX5)
    let yBlackObj = axisCheck('y', topBlackPieceY1, topBlackPieceY2, topBlackPieceY3, topBlackPieceY4, topBlackPieceY5)
    let xWhiteObj = axisCheck('x', topWhitePieceX1, topWhitePieceX2, topWhitePieceX3, topWhitePieceX4, topWhitePieceX5)
    let yWhiteObj = axisCheck('y', topWhitePieceY1, topWhitePieceY2, topWhitePieceY3, topWhitePieceY4, topWhitePieceY5)

    // console.log(xWhiteObj)

    //----------------------------------------------------------------------------------------------------------------------

    const sampleObjectDelete = {
        done: true,
        oneSpace: [3, 1],
        twoSpace: [4, 1],
        threeSpace: [4, 0]
    }

    let objBlackX = determineSpaceBetween(xBlackObj.abConnect, xBlackObj.bcConnect)
    let objBlackY = determineSpaceBetween(xBlackObj.bcConnect, xBlackObj.cdConnect)
    let objBlackZ = determineSpaceBetween(xBlackObj.cdConnect, xBlackObj.deConnect)
    let objWhiteX = determineSpaceBetween(xWhiteObj.abConnect, xWhiteObj.bcConnect)
    let objWhiteY = determineSpaceBetween(xWhiteObj.bcConnect, xWhiteObj.cdConnect)
    let objWhiteZ = determineSpaceBetween(xWhiteObj.cdConnect, xWhiteObj.deConnect)

    let objBlackA = determineSpaceBetween(yBlackObj.abConnect, yBlackObj.bcConnect)
    let objBlackB = determineSpaceBetween(yBlackObj.bcConnect, yBlackObj.cdConnect)
    let objBlackC = determineSpaceBetween(yBlackObj.cdConnect, yBlackObj.deConnect)
    let objWhiteA = determineSpaceBetween(yWhiteObj.abConnect, yWhiteObj.bcConnect)
    let objWhiteB = determineSpaceBetween(yWhiteObj.bcConnect, yWhiteObj.cdConnect)
    let objWhiteC = determineSpaceBetween(yWhiteObj.cdConnect, yWhiteObj.deConnect)

    //----------------------------------------------------------------------------------------------------------------------

    determineSpaceBetweenSuccess(objBlackX, xBlackObj.row2Array)
    determineSpaceBetweenSuccess(objBlackY, xBlackObj.row3Array)
    determineSpaceBetweenSuccess(objBlackZ, xBlackObj.row4Array)
    determineSpaceBetweenSuccess(objWhiteX, xWhiteObj.row2Array)
    determineSpaceBetweenSuccess(objWhiteY, xWhiteObj.row3Array)
    determineSpaceBetweenSuccess(objWhiteZ, xWhiteObj.row4Array)

    determineSpaceBetweenSuccess(objBlackA, yBlackObj.row2Array)
    determineSpaceBetweenSuccess(objBlackB, yBlackObj.row3Array)
    determineSpaceBetweenSuccess(objBlackC, yBlackObj.row4Array)
    determineSpaceBetweenSuccess(objWhiteA, yWhiteObj.row2Array)
    determineSpaceBetweenSuccess(objWhiteB, yWhiteObj.row3Array)
    determineSpaceBetweenSuccess(objWhiteC, yWhiteObj.row4Array)

    // console.log('objectBlackX: ', objBlackX)
    // console.log('objectBlackY: ', objBlackY)
    // console.log('objectBlackZ: ', objBlackZ)
    // console.log('objectBlackA: ', objBlackA)
    // console.log('objectBlackB: ', objBlackB)
    // console.log('objectBlackC: ', objBlackC)
    // console.log('objectWhiteX: ', objWhiteX)
    // console.log('objectWhiteY: ', objWhiteY)
    // console.log('objectWhiteZ: ', objWhiteZ)
    // console.log('objectWhiteA: ', objWhiteA)
    // console.log('objectWhiteB: ', objWhiteB)
    // console.log('objectWhiteC: ', objWhiteC)

    // console.log('objWhiteX_successArr: ', objWhiteX.successArray())
    // console.log('objWhiteY_successArr: ', objWhiteY.successArray())
    // console.log('objWhiteZ_successArr: ', objWhiteZ.successArray())

    //----------------------------------------------------------------------------------------------------------------------

    let xyzBlackSuccess = objectCompare(objBlackX.successArray(), objBlackY.successArray(), objBlackZ.successArray())
    let abcBlackSuccess = objectCompare(objBlackA.successArray(), objBlackB.successArray(), objBlackC.successArray())
    let xyzWhiteSuccess = objectCompare(objWhiteX.successArray(), objWhiteY.successArray(), objWhiteZ.successArray())
    let abcWhiteSuccess = objectCompare(objWhiteA.successArray(), objWhiteB.successArray(), objWhiteC.successArray())

    // console.log('xyz_White_win: ', xyzWhiteSuccess)
    // console.log('abc_White_win: ', abcWhiteSuccess)

    // *********************************************************************************************************************

    let gameResult = { gameOver: false, winColor: '' }

    if ((xyzBlackSuccess || abcBlackSuccess) && (xyzWhiteSuccess || abcWhiteSuccess) && !whiteTurn) { gameResult = { gameOver: true, winColor: 'black' } }
    else if (xyzBlackSuccess || abcBlackSuccess && !whiteTurn) { gameResult = { gameOver: true, winColor: 'black' } }
    else if (xyzWhiteSuccess || abcWhiteSuccess && !whiteTurn) { gameResult = { gameOver: true, winColor: 'white' } }

    if ((xyzBlackSuccess || abcBlackSuccess) && (xyzWhiteSuccess || abcWhiteSuccess) && whiteTurn) { gameResult = { gameOver: true, winColor: 'white' } }
    else if (xyzBlackSuccess || abcBlackSuccess && whiteTurn) { gameResult = { gameOver: true, winColor: 'black' } }
    else if (xyzWhiteSuccess || abcWhiteSuccess && whiteTurn) { gameResult = { gameOver: true, winColor: 'white' } }

    return gameResult
}
// determineWinStatus(defaultSpaces)


// =========================================================================================================================
// =========================================================================================================================


export function determineFullBoardMaxPieces(spaces, maxBlack, maxWhite) {
    let filledSquares = []
    let fullBoard = false
    let topBlackPieceArray = []
    let topWhitePieceArray = []

    let numWhitePieces = 0
    let numBlackPieces = 0
    let winColor = ''
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
        numBlackPieces = topBlackPieceArray.length
        numWhitePieces = topWhitePieceArray.length
        if (numBlackPieces === numWhitePieces) { console.log('Tie ball game!'); gameOver = true; winColor = 'tie' }
        else if (numBlackPieces > numWhitePieces) { console.log('Black Wins!'); gameOver = true; winColor = 'black' }
        else { console.log('White wins!'); gameOver = true; winColor = 'white' }
        // console.log(topBlackPieceArray)
        // console.log(topWhitePieceArray)
    }

    let gameResult = { gameOver, winColor, numBlackPieces, numWhitePieces }
    return gameResult
}
// console.log(detectFullBoard(defaultSpaces))