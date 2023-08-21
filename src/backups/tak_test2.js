// { space: 'A5', x: 1, y: 5, pieces: ['WF1', 'BF1', 'WF2', 'BF2'], activeSpace: false, moveSquare: false  }
const defaultSpaces = [
    { space: 'A5', x: 1, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    // { space: 'A5', x: 1, y: 5, pieces: ['WF1', 'BF1', 'WF2', 'BF2'], activeSpace: false, moveSquare: false },
    { space: 'A4', x: 1, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    // { space: 'A4', x: 1, y: 4, pieces: ['WF3', 'BF3'], activeSpace: false, moveSquare: false },
    { space: 'A3', x: 1, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'A2', x: 1, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'A1', x: 1, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'B5', x: 2, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'B4', x: 2, y: 4, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'B3', x: 2, y: 3, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'B2', x: 2, y: 2, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'B1', x: 2, y: 1, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'C5', x: 3, y: 5, pieces: [], activeSpace: false, moveSquare: false },
    { space: 'C4', x: 3, y: 4, pieces: [], activeSpace: true, moveSquare: false },
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

function determineMoveSquares([...spaces]) {
    let spaceActiveX
    let spaceActiveY
    let updatedSpaces = []

    spaces.forEach((sp, i) => {
        if (sp.activeSpace === true) {
            spaceActiveX = sp.x
            spaceActiveY = sp.y
        }
    })
    console.log('x: ', spaceActiveX)
    console.log('y: ', spaceActiveY)

    updatedSpaces = spaces.map((sp, i) => {
        if ((sp.x === spaceActiveX) && ((spaceActiveY === sp.y + 1) || (spaceActiveY === sp.y - 1))) {
            return { ...sp, moveSquare: true }
        }
        if ((sp.y === spaceActiveY) && ((spaceActiveX === sp.x + 1) || (spaceActiveX === sp.x - 1))) {
            return { ...sp, moveSquare: true }
        }
        else { return { ...sp } }
    })
    console.log('x', updatedSpaces.filter((sp) => { if (sp.moveSquare === true) { return sp } }))
}
// determineMoveSquares(defaultSpaces)


function determineMoveSecondSquares([...spaces], sourceSpace) {
    let spaceActiveX
    let spaceActiveY
    let spaceSourceX
    let spaceSourceY
    let updatedSpaces = []

    spaces.forEach((sp, i) => {
        if (sp.activeSpace === true) {
            spaceActiveX = sp.x
            spaceActiveY = sp.y
        }
    })

    spaces.forEach((sp, i) => {
        if (sp.space === sourceSpace) {
            spaceSourceX = sp.x
            spaceSourceY = sp.y
        }
    })
    console.log('x(s): ', spaceSourceX)
    console.log('y(s): ', spaceSourceY)
    console.log('x(d): ', spaceActiveX)
    console.log('y(d): ', spaceActiveY)

    // x-axis same, 1st move down, all avialable moves
    if (spaceSourceX === spaceActiveX && (spaceSourceY - spaceActiveY > 0)) {
        updatedSpaces = spaces.map((sp, i) => {
            if (spaceActiveX === sp.x && spaceActiveY > sp.y) {
                console.log('1', sp.space)
                return { ...sp, moveSquare: true }
            } else { return { ...sp } }
        })
    }

    // x-axis same, 1st move up, all avialable moves
    if (spaceSourceX === spaceActiveX && (spaceSourceY - spaceActiveY < -0)) {
        updatedSpaces = spaces.map((sp, i) => {
            if (spaceActiveX === sp.x && spaceActiveY < sp.y) {
                console.log('2', sp.space)
                return { ...sp, moveSquare: true }
            } else { return { ...sp } }
        })
    }

    // y-axis same, 1st move to left, all avialable moves
    if (spaceSourceY === spaceActiveY && (spaceSourceX > spaceActiveX)) {
        updatedSpaces = spaces.map((sp, i) => {
            if (spaceActiveY === sp.y && spaceActiveX > sp.x) {
                console.log('3', sp.space)
                return { ...sp, moveSquare: true }
            } else { return { ...sp } }
        })
    }

    // y-axis same, 1st move to right, all avialable moves
    if (spaceSourceY === spaceActiveY && (spaceSourceX < spaceActiveX)) {
        updatedSpaces = spaces.map((sp, i) => {
            if (spaceActiveY === sp.y && spaceActiveX < sp.x) {
                console.log('4', sp.space)
                return { ...sp, moveSquare: true }
            } else { return { ...sp } }
        })
    }
    // console.log('x', updatedSpaces)
    console.log('x', updatedSpaces.filter((sp) => { if (sp.moveSquare === true) { return sp } }))
}
determineMoveSecondSquares(defaultSpaces, 'C3')