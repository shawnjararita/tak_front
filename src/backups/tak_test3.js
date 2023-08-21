// const arr = [
//     { space: 'A1', x: 1, y: 2, pieces: ['WF1', 'BF1'], activeSpace: false, moveSquare: false },
//     { space: 'A2', x: 1, y: 2, pieces: ['WF2', 'BF2', 'WF4'], activeSpace: false, moveSquare: false },
//     { space: 'A3', x: 1, y: 3, pieces: ['BC4'], activeSpace: false, moveSquare: true },
//     { space: 'A4', x: 1, y: 4, pieces: [], activeSpace: false, moveSquare: true },
//     { space: 'A5', x: 1, y: 5, pieces: ['WF3', 'BF3'], activeSpace: false, moveSquare: true }]

// let newArr = []
// let newArr2 = []

// for (let sp of arr) {
//     newArr.push({ ...sp, moveSquare: false })
// }

// for (let i = 0; i <= newArr.length - 1; i++) {
//     if (newArr[i].pieces.length < 1 || newArr[i].pieces[newArr[i].pieces.length - 1]?.charAt(1) !== 'C') {
//         newArr2.push({ ...newArr[i], moveSquare: true })
//     } else { break }
// }

// for (let item of newArr2) {
//     let index = newArr.findIndex((sp) => sp.space === item.space)
//     newArr.splice(index, 1, item)
//     console.log('index: ', index)
// }

// console.log(newArr)
// // console.log(newArr2)

//-----------------------------------------------------------------------------------------------------------------------
// .slice(1, 2)

const arr = [
    { space: 'A1', x: 1, y: 2, pieces: ['WF1', 'BF1'], activeSpace: false, moveSquare: false },
    { space: 'A2', x: 1, y: 2, pieces: ['WF2', 'BF2', 'WF4'], activeSpace: false, moveSquare: false },
    { space: 'A3', x: 1, y: 3, pieces: ['BC4'], activeSpace: false, moveSquare: true },
    { space: 'A4', x: 1, y: 4, pieces: [], activeSpace: false, moveSquare: true },
    { space: 'A5', x: 1, y: 5, pieces: ['WF3', 'BF3'], activeSpace: false, moveSquare: true }]

let sourcePieces = arr[0].pieces
let destinationPieces = arr[1].pieces
let removedPieces = [...sourcePieces.splice(sourcePieces.length - 1)]

console.log('removed: ', removedPieces[removedPieces.length - 1])
console.log('dest: ', destinationPieces[destinationPieces.length - 1])

if ((removedPieces[removedPieces.length - 1].slice(0, 2) === 'WC' &&
    destinationPieces[destinationPieces.length - 1].slice(0, 2) === 'BW')
    ||
    (removedPieces[removedPieces.length - 1].slice(0, 2) === 'BC' &&
        destinationPieces[destinationPieces.length - 1].slice(0, 2) === 'WW')
) {
    let flatWall = destinationPieces[destinationPieces.length - 1].replace(/(?<=\w)W/, 'F')
    console.log('flatteded Wall: ', flatWall)
    destinationPieces.pop()
    destinationPieces.push(flatWall)
}
destinationPieces.push(removedPieces.shift())

console.log('sourcePieces :', sourcePieces)
console.log('destinationPieces :', destinationPieces)
console.log('removedPieces :', removedPieces)