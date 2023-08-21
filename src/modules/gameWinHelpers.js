export function axisCheck(axis, topPieceR1, topPieceR2, topPieceR3, topPieceR4, topPieceR5) {
    if (axis === 'x') { axis = 3 }
    if (axis === 'y') { axis = 1 }

    let xAxisObject = {
        row1Array: new Array(5),
        row2Array: new Array(5),
        row3Array: new Array(5),
        row4Array: new Array(5),
        row5Array: new Array(5),
        abConnect: [],
        bcConnect: [],
        cdConnect: [],
        deConnect: []
    }

    let cumArrayAB = []
    let cumArrayBC = []
    let cumArrayCD = []
    let cumArrayDE = []

    // NOTES-A
    // each set of connecting columns (x-axis) must have at least one set of y-axis squares that match in both columns
    // likewise, each set of connecting rows (y-axis) must have at least one set of x-axis squares that match in both rows
    // hereon in, these "matching squares" in adjacent cols/rows are called "connection-indexes" (which are actually trimmed-down to indexes in Notes-C)
    if (topPieceR1.length > 0) {
        for (let piece of topPieceR1) {
            // console.log('1: ', topPieceR2.some((y) => y.charAt(axis) === piece.charAt(axis)))
            let x1 = (topPieceR2.filter((y) => { return y.charAt(axis) === piece.charAt(axis) }))
            if (x1.length > 0) { cumArrayAB.push(...x1) }
        }
    }
    if (cumArrayAB.length > 0) {
        for (let piece of topPieceR2) {
            // console.log('2: ', topPieceR3.some((y) => y.charAt(axis) === piece.charAt(axis)))
            let x2 = (topPieceR3.filter((y) => { return y.charAt(axis) === piece.charAt(axis) }))
            if (x2.length > 0) { cumArrayBC.push(...x2) }
        }
    }
    if (cumArrayBC.length > 0) {
        for (let piece of topPieceR3) {
            // console.log('3: ', topPieceR4.some((y) => y.charAt(axis) === piece.charAt(axis)))
            let x3 = (topPieceR4.filter((y) => { return y.charAt(axis) === piece.charAt(axis) }))
            if (x3.length > 0) { cumArrayCD.push(...x3) }
        }
    }
    if (cumArrayCD.length > 0) {
        for (let piece of topPieceR4) {
            // console.log('4: ', topPieceR5.some((y) => y.charAt(axis) === piece.charAt(axis)))
            let x4 = (topPieceR5.filter((y) => { return y.charAt(axis) === piece.charAt(axis) }))
            if (x4.length > 0) { cumArrayDE.push(...x4) }
        }
    }


    // ******************************************************************************************************************************
    // if (cumArrayAB.length === 0 || cumArrayBC.length === 0 || cumArrayCD.length === 0 || cumArrayDE.length === 0) { return gameWin }

    // NOTES-B
    // this section generates rows# arrays used below... 5 x 5 array grid with empty(Undefined) slots
    let x1 = 0
    while (x1 < topPieceR1.length) {
        // console.log('yyy', parseInt(topPieceR1[x1]?.charAt(axis)))
        xAxisObject.row1Array[5 - parseInt(topPieceR1[x1]?.charAt(axis))] = topPieceR1[x1]?.charAt(axis)
        x1++
    }
    let x2 = 0
    while (x2 < topPieceR2.length) {
        // console.log('yyy', parseInt(topPieceR2[x2]?.charAt(axis)))
        xAxisObject.row2Array[5 - parseInt(topPieceR2[x2]?.charAt(axis))] = topPieceR2[x2]?.charAt(axis)
        x2++
    }
    let x3 = 0
    while (x3 < topPieceR3.length) {
        // console.log('yyy', parseInt(topPieceR3[x3]?.charAt(axis)))
        xAxisObject.row3Array[5 - parseInt(topPieceR3[x3]?.charAt(axis))] = topPieceR3[x3]?.charAt(axis)
        x3++
    }
    let x4 = 0
    while (x4 < topPieceR4.length) {
        // console.log('yyy', parseInt(topPieceR4[x4]?.charAt(axis)))
        xAxisObject.row4Array[5 - parseInt(topPieceR4[x4]?.charAt(axis))] = topPieceR4[x4]?.charAt(axis)
        x4++
    }
    let x5 = 0
    while (x5 < topPieceR5.length) {
        // console.log('yyy', parseInt(topPieceR5[x5]?.charAt(axis)))
        xAxisObject.row5Array[5 - parseInt(topPieceR5[x5]?.charAt(axis))] = topPieceR5[x5]?.charAt(axis)
        x5++
    }
    //---------------------------------------------------------------------------------------

    // NOTES-C
    // this section finds the index number of matching y-axis squares in connecting columns (and vice-versa) using row#Array(notes-B) and cumArray##(notes-A)
    // aka "connection-indexes"
    for (let i = 0; i < cumArrayAB.length; i++) {
        xAxisObject.abConnect.push(xAxisObject.row2Array.findIndex((y) => y === cumArrayAB[i].charAt(axis)))
    }
    for (let i = 0; i < cumArrayBC.length; i++) {
        xAxisObject.bcConnect.push(xAxisObject.row3Array.findIndex((y) => y === cumArrayBC[i].charAt(axis)))
    }
    for (let i = 0; i < cumArrayCD.length; i++) {
        xAxisObject.cdConnect.push(xAxisObject.row4Array.findIndex((y) => y === cumArrayCD[i].charAt(axis)))
    }
    for (let i = 0; i < cumArrayDE.length; i++) {
        xAxisObject.deConnect.push(xAxisObject.row5Array.findIndex((y) => y === cumArrayDE[i].charAt(axis)))
    }

    // console.log('row1 :', xAxisObject.row1Array)
    // console.log('row2 :', xAxisObject.row2Array)
    // console.log('row3 :', xAxisObject.row3Array)
    // console.log('row4 :', xAxisObject.row4Array)
    // console.log('row5 :', xAxisObject.row5Array)

    // console.log('cumArrayAB: ', cumArrayAB)
    // console.log('cumArrayBC: ', cumArrayBC)
    // console.log('cumArrayCD: ', cumArrayCD)
    // console.log('cumArrayDE: ', cumArrayDE)

    // console.log('abConnect: ', xAxisObject.abConnect)
    // console.log('bcConnect: ', xAxisObject.bcConnect)
    // console.log('cdConnect: ', xAxisObject.cdConnect)
    // console.log('deConnect: ', xAxisObject.deConnect)

    return xAxisObject
}


// ========================================================================================================================================
// NOTES-D
// determineSpaBetween() takes as parameters two adjacent "connection-index" arrays...coming from the axisCheck() object
// the function determines the amount of squares between adjacent columns' connection-index points and writes the results to an object

// let row1 = [2]
// let row2 = [0, 4]

export function determineSpaceBetween(row1, row2) {
    let obj = {
        noSpace: new Array(),
        oneSpace: new Array(),
        twoSpace: new Array(),
        threeSpace: new Array(),
        noSpaceStatus: false,
        oneSpaceStatus: false,
        twoSpaceStatus: false,
        threeSpaceStatus: false,
        successArray: function () {
            let arr = []
            arr.push(...this.noSpace)
            if (this.oneSpaceStatus) { arr.push(...this.oneSpace) }
            if (this.twoSpaceStatus) { arr.push(...this.twoSpace) }
            if (this.threeSpaceStatus) { arr.push(...this.threeSpace) }
            return arr
        }
    }
    // why arrZ outside? ...the 1-square-away array can have two required comparisons: e.g [0,4] & [2] spaces  1 & 3
    let arrZ = []

    for (let index of row1) {
        if (row2.some((y) => y === index || y - index === 1 || y - index === -1)) {
            let arrX = []
            let arrY = row2.find((y) => y === index || y - index === 1 || y - index === -1)
            arrX.push(index)
            // console.log('111111111111111111', arrY)
            obj.noSpace = [arrY, ...arrX]
            obj.noSpaceStatus = true
        }
        if (row2.some((y) => y - index === 2 || y - index === -2)) {
            let arrY = []
            arrY = row2.filter((y) => y - index === 2 || y - index === -2)
            arrZ.push(index)
            // console.log('2222222222222222', arrY, arrZ)
            obj.oneSpace = [...arrY, ...arrZ]
        }
        if (row2.some((y) => y - index === 3 || y - index === -3)) {
            let arrX = []
            let arrY = row2.find((y) => y - index === 3 || y - index === -3)
            arrX.push(index)
            obj.twoSpace = [arrY, ...arrX]
        }
        if (row2.some((y) => y - index === 4 || y - index === -4)) {
            let arrX = []
            let arrY = row2.find((y) => y - index === 4 || y - index === -4)
            arrX.push(index)
            obj.threeSpace = [arrY, ...arrX]
        }
    }
    return obj
}
// let rowABComapeResult = determineSpaceBetween(row1, row2)
// console.log(rowABComapeResult)


// ========================================================================================================================================
// NOTES-E
// determineSpaceBetweenSuccess() takes the determineSpaceBetween() object and its corresponding row#Array as parameters (ex: X/row2, Y/row3, Z/row4)
// the function checks for pieces (inside the row#) inbetween the "connection-indexes"

export function determineSpaceBetweenSuccess(object, rowArray) {

    if (object.oneSpace.length > 0 && object.oneSpace.length < 3) {
        if (rowArray[Math.min(...object.oneSpace) + 1]) {
            object.oneSpaceStatus = true
            // console.log('Passes 1-appart check!')
        } //else { console.log('Fails 1-appart check!') }

        // the 1-square-away array can have two comparisons: e.g [0,4] & [2]
    } else if (object.oneSpace.length > 2) {
        if (rowArray[1] || rowArray[3]) {
            object.oneSpaceStatus = true
            console.log('Passes 1-appart check!')
        } //else { console.log('Fails 1-appart check!') }
    }

    if (object.twoSpace.length > 0) {
        if (rowArray[Math.min(...object.twoSpace) + 1] && rowArray[Math.min(...object.twoSpace) + 2]) {
            object.twoSpaceStatus = true
            console.log('Passes 2-appart check!')
        } //else { console.log('Fails 2-appart check!') }
    }

    if (object.threeSpace.length > 0) {
        if (rowArray[1] && rowArray[2] && rowArray[3]) {
            object.threeSpaceStatus = true
            console.log('Passes 3-appart check!')
        } //else { console.log('Fails 3-appart check!') }
    }
    return object
}

// ========================================================================================================================================
// NOTES-F
// objectCompare() takes the three successArray() results as parameters...coming from the determineSpaceBetween() object
// the first two arrays, then the second two arrays must have matching connection-indexes

// let sArr1 = [4, 4]
// let sArr2 = [0, 3, 4]
// let sArr3 = [0, 0]

export function objectCompare(arr1, arr2, arr3) {
    for (let item of arr2) {
        // console.log(arr1.some((i) => i === item))
        if (arr1.some((i) => i === item)) {
            // console.log('success1', item)
            for (let item2 of arr3) {
                if (arr2.some((i) => i === item2)) {
                    // console.log('success2', item2)
                    return true
                }
            }
        }
    } return false
}
// objectCompare(sArr1, sArr2, sArr3)
// console.log(objectCompare(sArr1, sArr2, sArr3))