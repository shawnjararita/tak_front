const defaultSpaces = [
    { space: '1A', x: 'x1', y: 'y1', pieces: ['WF1', 'BF3', 'BF6'] },
    { space: '2A', x: 'x2', y: 'y1', pieces: ['WF2', 'WF4', 'BF4', 'BF7'] },
    { space: '3A', x: 'x3', y: 'y1', pieces: ['BF1', 'WF3', 'WF7'] },
    { space: '4A', x: 'x4', y: 'y1', pieces: ['BF2', 'WF6'] },
    { space: '5A', x: 'x5', y: 'y1', pieces: ['BF5', 'W57'] }
]

// const arr1 = ['WF1', 'BF3', 'BF6']
// const arr2 = ['WF2', 'WF4', 'BF4', 'BF7']
// const arr3 = []

// 1. click move
// 2. click space FROM which pieces will move
// 3. SELECT # of pieces to move
// 4. click the FIRST space TO which pieces will move
// 5. SELECT # of pieces to place
// 6. if 'move array' is empty, no more moves
// 7. if 'move array' still has pieces, ONLY allow clicking on next piece in same direction??
// ...repeat steps 5 & 6


//------------------------------------------------------------------------------------------------------------------------------------
// nested functions test

// function selectPiecesToMove(number) {
//     let removedPieces = arr1.splice(arr1.length - number)

//     return function selectPiecesToPlace(number) {
//         let selectPieces = removedPieces.reverse().splice(removedPieces.length - number)
//         arr2.push(...selectPieces)

//         if (removedPieces.length > 0) {
//             return function selectPiecesToPlace2(number) {
//                 let selectPieces2 = removedPieces.reverse().splice(removedPieces.length - number)
//                 arr3.push(...selectPieces2)
//             }
//         }
//         console.log('Pieces left :', removedPieces)
//     }
// }
// const selectPlace = selectPiecesToMove(2)
// const selectPlace2 = selectPlace(1)
// selectPlace2(1)

// console.log(arr1, arr2, arr3)


//------------------------------------------------------------------------------------------------------------------------------------
// generator test....did not work out

// function* genFunction(number1, number2, array1, array2, array3) {
//     let removedPieces = array1.splice(array1.length - number1)

//     if (number1 === 1) {
//         array2.push(...removedPieces)
//         yield array2
//     }
//     if (number1 === 2 && number2 === 2) {
//         let selectPieces = removedPieces.splice(removedPieces.length - 2)
//         array2.push(...selectPieces)
//         yield array2
//     }
//     if (number1 === 2 && number2 === 1) {
//         let selectPieces = removedPieces.reverse().splice(removedPieces.length - 1)
//         array2.push(...selectPieces)
//         yield array2
//     }
// }

// const genFuncInstance = genFunction(2, 1, arr1, arr2)number1
// console.log(genFuncInstance.next())
// console.log(genFuncInstance.next())


//------------------------------------------------------------------------------------------------------------------------------------
// good single function to move pieces based on # of spices dropped each square

// const arr1 = ['Ar1', 'Ar2', 'Ar3', 'Ar4', 'Ar5']
// const arr2 = []
// // const arr2 = ['WF1', 'WF4', 'WF3', 'WF4']
// const arr3 = []
// const arr4 = []
// const arr5 = []

// function movePieces(piecesPickedUp, number1, number2, number3, array1, array2, array3, array4, array5) {
//     let removedPieces = array1.splice(array1.length - piecesPickedUp)
//     if (number1 === 0) { number1 = 1 }
//     if (number2 === 0) { number2 = 1 }
//     if (number3 === 0) { number3 = 1 }
//     // if (number4 === 0) { number4 = 1 }
//     console.log('removedPieces1: ', removedPieces)

//     if (piecesPickedUp === 1) {
//         array2.push(...removedPieces)
//     }
//     if (number1 === piecesPickedUp) {

//         let selectPieces = removedPieces.splice(removedPieces.length - number1)
//         array2.push(...selectPieces)
//     }
//     if (number1 === (piecesPickedUp - 1)) {
//         let selectPieces = removedPieces.splice(0, number1)
//         array2.push(...selectPieces)
//         array3.push(...removedPieces)
//         // console.log('selected Pieces: ', selectPieces)
//         // console.log('removedPieces: ', removedPieces)
//     }
//     if (number1 === (piecesPickedUp - 2)) {
//         let selectPieces = removedPieces.splice(0, number1)
//         array2.push(...selectPieces)
//         let selectPieces2 = removedPieces.splice(0, number2)
//         array3.push(...selectPieces2)
//         array4.push(...removedPieces)
//         // console.log('selected Pieces: ', selectPieces)
//         // console.log('selected Pieces2: ', selectPieces2)
//         // console.log('removedPieces: ', removedPieces)
//     }
//     if ((number1 === (piecesPickedUp - 3)) || (number1 === (piecesPickedUp - 4))) {
//         let selectPieces = removedPieces.splice(0, number1)
//         array2.push(...selectPieces)
//         let selectPieces2 = removedPieces.splice(0, number2)
//         array3.push(...selectPieces2)
//         let selectPieces3 = removedPieces.splice(0, number3)
//         array4.push(...selectPieces3)
//         array5.push(...removedPieces)
//         console.log('selected Pieces: ', selectPieces)
//         console.log('selected Pieces2: ', selectPieces2)
//         console.log('selected Pieces3: ', selectPieces3)
//         console.log('removedPieces: ', removedPieces)
//     }

//     console.log(array1)
//     console.log(array2)
//     console.log(array3)
//     console.log(array4)
//     console.log(array5)

// }
// movePieces(5, 5, 2, 2, arr1, arr2, arr3, arr4, arr5)


//------------------------------------------------------------------------------------------------------------------------------------

// let curentPiecesArray = []
// defaultSpaces.map((obj, i) => {
//     const pieces = obj.pieces
//     curentPiecesArray.push(...pieces)
// })
// let blackPiecesArray = curentPiecesArray.filter((code) => { return code.charAt(0) === 'B' })
// console.log(blackPiecesArray)




//------------------------------------------------------------------------------------------------------------------------------------
// test function to change activeSpace

// const testSpaces = [
//     { space: '1A', x: 'x1', y: 'y1', pieces: [], activeSpace: false },
//     { space: '2A', x: 'x2', y: 'y1', pieces: [], activeSpace: false },
//     { space: '3A', x: 'x3', y: 'y1', pieces: [], activeSpace: false },
//     { space: '4A', x: 'x4', y: 'y1', pieces: [], activeSpace: false },
//     { space: '5A', x: 'x5', y: 'y1', pieces: [], activeSpace: false }
// ]
// testSpaces.map((obj, i) => {
//     if (obj.space === '2A') { obj.activeSpace = true }
// })
// console.log(testSpaces)


//------------------------------------------------------------------------------------------------------------------------------------
// testing moving pieces one-at-a-time

const arr1 = ['Ar1', 'Ar2', 'Ar3', 'Ar4', 'Ar5']
const arr2 = []
// const arr2 = ['WF1', 'WF4', 'WF3', 'WF4']
// const arr3 = []
// const arr4 = []
// const arr5 = []

function movePieces(piecesPickedUp, array1, array2) {
    let sourcePieces = [...array1]
    let destinationPieces = [...array2]
    let removedPieces = [...sourcePieces.splice(sourcePieces.length - piecesPickedUp)]
    destinationPieces.push(removedPieces.shift())

    console.log('arr1 :', array1)
    console.log('source :', sourcePieces)
    console.log('arr2 :', array2)
    console.log('destination :', destinationPieces)
    console.log('pieces removed', removedPieces)
}
// movePieces(4, arr1, arr2)


const ar1 = ['WF2', 'BF2']
const ar2 = ['xx']

function movePieces2(array1, array2) {
    let sourcePieces = [...array1]
    let destinationPieces = [...array2]
    let removedPieces = [sourcePieces.shift()]
    destinationPieces.push(removedPieces.shift())

    // console.log('ar1 :', array1)
    console.log('source :', sourcePieces)
    // console.log('ar2 :', array2)
    console.log('destination :', destinationPieces)
    console.log('pieces removed', removedPieces)
}
movePieces2(ar1, ar2)