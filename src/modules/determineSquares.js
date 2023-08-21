export function determineMoveSquares(spacesCopy, spaceCode, spaceActiveX, spaceActiveY, removedPieces) {
    let stackTopPiece = removedPieces[0].slice(1, 2)

    const moveSpaces = spacesCopy.map((sp) => {
        let squarePieces = sp.pieces.length
        let squareTopPiece = sp.pieces[sp.pieces.length - 1]?.slice(1, 2)

        // check to make sure the space's top piece is not a capstone or wall
        // ...unless removePieces array has a sole capstone and the destination piece is a wall, or, the destination space has no piece
        if (
            (squarePieces > 0 && squareTopPiece !== 'C' && squareTopPiece !== 'W')
            || (squarePieces > 0 && (squareTopPiece === 'W' && stackTopPiece === 'C'))
            || squarePieces < 1
        ) {
            if ((sp.x === spaceActiveX) && ((spaceActiveY === sp.y + 1) || (spaceActiveY === sp.y - 1))) {
                return { ...sp, activeSpace: false, moveSquare: true }
            }
            if ((sp.y === spaceActiveY) && ((spaceActiveX === sp.x + 1) || (spaceActiveX === sp.x - 1))) {
                return { ...sp, activeSpace: false, moveSquare: true }
            }
            else { return { ...sp, activeSpace: false, moveSquare: false } } // skj 6-5-23
        } else { return { ...sp, activeSpace: false, moveSquare: false } }
    })

    const updatedSpaces = moveSpaces.map((spaces) => {
        if (spaces.space === spaceCode) { return { ...spaces, activeSpace: true, moveSquare: false } }
        else { return { ...spaces, activeSpace: false } }
    })
    // console.log(`determine1(f) topSourcePiece: ${topSourcePiece}`)
    return updatedSpaces
}


export function determineMoveSecondSquares(spaces, pieceMoveAndCount, spaceFound) {
    let spaceSourceX
    let spaceSourceY
    let spaceActiveX = spaceFound.x
    let spaceActiveY = spaceFound.y
    let pieceCode
    let topSourcePiece = pieceMoveAndCount.piecesToMove[pieceMoveAndCount.piecesToMove.length - 1]?.slice(1, 2) || 'Y'
    let stackSize = pieceMoveAndCount.piecesToMove.length
    let updatedSpaces = []
    let tempArray = []
    let tempArray2 = []

    spaces.forEach((sp, i) => {
        if (sp.space === pieceMoveAndCount.source) {
            spaceSourceX = sp.x
            spaceSourceY = sp.y
        }
    })
    // console.log('x(s): ', spaceSourceX)
    // console.log('y(s): ', spaceSourceY)
    // console.log('x(d): ', spaceActiveX)
    // console.log('y(d): ', spaceActiveY)


    // x-axis same, 1st move down, all avialable moves--------------------------------------------------------------------------------------
    if (spaceSourceX === spaceActiveX && (spaceSourceY - spaceActiveY > 0)) {
        // 1a. populate 'updatedSpaces' array with 'moveSquare: false' for all 25 spaces except the clicked space (spaceFound.space) when the stack has pieces.
        // NOTE: piecesToMove.length in both steps 1 & 3 are increased by 1 because the update function for piecesToMove comes after this determine function.
        for (let space of spaces) {
            if ((spaceFound.space === space.space) && stackSize > 1) { updatedSpaces.push({ ...space, moveSquare: true }) }
            else { updatedSpaces.push({ ...space, moveSquare: false }) }
        }
        // 2a. populate a tempArray with spaces below (above/left/right) of the clicked space
        for (let space of updatedSpaces) {
            if ((spaceActiveX === space.x) && (spaceActiveY > space.y) && (stackSize > spaceActiveY - space.y)
            ) {
                tempArray.push(space)
            }
        }
        // 3a. populate a tempArray2 with the newArray data truncated at the point it finds a capstone or wall
        // ...unless an capstone is on the top of the stack and the destination piece is a wall
        for (let i = 0; i <= tempArray.length - 1; i++) {
            pieceCode = tempArray[i].pieces[tempArray[i].pieces.length - 1]?.slice(1, 2) || 'Z'

            if (pieceCode === 'W' && topSourcePiece === 'C' && stackSize === 2) {
                tempArray2.push({ ...tempArray[i], moveSquare: true })
            }
            if (tempArray[i].pieces.length < 1 || pieceCode !== 'C' && pieceCode !== 'W') {
                tempArray2.push({ ...tempArray[i], moveSquare: true })
            } else { break }
        }
        // console.log('if(1-tempArray)', tempArray)
        // console.log('if(1-tempArray2)', tempArray2)

        // 4a. update the 'updatedSpaces' array with the spaces inside newArray2
        for (let space of tempArray2) {
            let index = updatedSpaces.findIndex((sp) => sp.space === space.space)
            updatedSpaces.splice(index, 1, space)
        }
    }

    // x-axis same, 1st move up, all avialable moves--------------------------------------------------------------------------------------
    if (spaceSourceX === spaceActiveX && (spaceSourceY - spaceActiveY < 0)) {

        for (let space of spaces) {
            if ((spaceFound.space === space.space) && stackSize > 1) { updatedSpaces.push({ ...space, moveSquare: true }) }
            else { updatedSpaces.push({ ...space, moveSquare: false }) }
        }
        // 2b. populate a tempArray with spaces to the right of clicked space, and sort() on y-axis so the 'break' in step 3 works
        for (let space of updatedSpaces) {
            if ((spaceActiveX === space.x) && (spaceActiveY < space.y) && (stackSize > space.y - spaceActiveY)
            ) {
                tempArray.push(space)
                tempArray.sort((a, b) => a.y - b.y)
            }
        }

        for (let i = 0; i <= tempArray.length - 1; i++) {
            pieceCode = tempArray[i].pieces[tempArray[i].pieces.length - 1]?.slice(1, 2) || 'Z'

            if (pieceCode === 'W' && topSourcePiece === 'C' && stackSize === 2) {
                tempArray2.push({ ...tempArray[i], moveSquare: true })
            }
            if (tempArray[i].pieces.length < 1 || pieceCode !== 'C' && pieceCode !== 'W') {
                tempArray2.push({ ...tempArray[i], moveSquare: true })
            } else { break }
        }
        // console.log('if(2-tempArray)', tempArray)
        // console.log('if(2-tempArray2)', tempArray2)

        for (let space of tempArray2) {
            let index = updatedSpaces.findIndex((sp) => sp.space === space.space)
            updatedSpaces.splice(index, 1, space)
        }
    }

    // y-axis same, 1st move to left, all avialable moves--------------------------------------------------------------------------------------
    if (spaceSourceY === spaceActiveY && (spaceSourceX > spaceActiveX)) {

        for (let space of spaces) {
            if ((spaceFound.space === space.space) && stackSize > 1) { updatedSpaces.push({ ...space, moveSquare: true }) }
            else { updatedSpaces.push({ ...space, moveSquare: false }) }
        }
        // 2c. populate a tempArray with spaces to the right of clicked space, and sort() on x-axis so the 'break' in step 3 works
        for (let space of updatedSpaces) {
            if ((spaceActiveY === space.y) && (spaceActiveX > space.x) && (stackSize > spaceActiveX - space.x)
            ) {
                tempArray.push(space)
                tempArray.sort((a, b) => b.x - a.x)
            }
        }

        for (let i = 0; i <= tempArray.length - 1; i++) {
            pieceCode = tempArray[i].pieces[tempArray[i].pieces.length - 1]?.slice(1, 2) || 'Z'

            if (pieceCode === 'W' && topSourcePiece === 'C' && stackSize === 2) {
                tempArray2.push({ ...tempArray[i], moveSquare: true })
            }
            if (tempArray[i].pieces.length < 1 || pieceCode !== 'C' && pieceCode !== 'W') {
                tempArray2.push({ ...tempArray[i], moveSquare: true })
            } else { break }
        }
        // console.log('if(3-tempArray)', tempArray)
        // console.log('if(3-tempArray2)', tempArray2)

        for (let space of tempArray2) {
            let index = updatedSpaces.findIndex((sp) => sp.space === space.space)
            updatedSpaces.splice(index, 1, space)
        }
    }

    // y-axis same, 1st move to right, all avialable moves--------------------------------------------------------------------------------------
    if (spaceSourceY === spaceActiveY && (spaceSourceX < spaceActiveX)) {

        for (let space of spaces) {
            if ((spaceFound.space === space.space) && stackSize > 1) { updatedSpaces.push({ ...space, moveSquare: true }) }
            else { updatedSpaces.push({ ...space, moveSquare: false }) }
        }

        for (let space of updatedSpaces) {
            if ((spaceActiveY === space.y) && (spaceActiveX < space.x) && (stackSize > space.x - spaceActiveX)
            ) {
                tempArray.push(space)
            }
        }

        for (let i = 0; i <= tempArray.length - 1; i++) {
            pieceCode = tempArray[i].pieces[tempArray[i].pieces.length - 1]?.slice(1, 2) || 'Z'

            if (pieceCode === 'W' && topSourcePiece === 'C' && stackSize === 2) {
                tempArray2.push({ ...tempArray[i], moveSquare: true })
            }
            if (tempArray[i].pieces.length < 1 || pieceCode !== 'C' && pieceCode !== 'W') {
                tempArray2.push({ ...tempArray[i], moveSquare: true })
            } else { break }
        }
        // console.log('if(4-tempArray)', tempArray)
        // console.log('if(4-tempArray2)', tempArray2)

        for (let space of tempArray2) {
            let index = updatedSpaces.findIndex((sp) => sp.space === space.space)
            updatedSpaces.splice(index, 1, space)
        }
    }

    // console.log('pieceCode: ', pieceCode)
    // console.log('topSourcePiece', topSourcePiece)
    // console.log('updatedSpaces', updatedSpaces)
    // console.log('x', updatedSpaces.filter((sp) => { if (sp.moveSquare === true) { return sp } }))
    return updatedSpaces
}