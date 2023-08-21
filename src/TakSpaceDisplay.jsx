import { determineMoveSquares } from './modules/determineSquares'

export function TakSpaceDisplay({ spaces, pieceMoveAndCount }) {
    const spacesCopy = [...spaces]
    let spaceCode
    let sourcePieces = []
    let piecesToMove = []

    // original
    // spacesCopy.map((sp, i) => {
    //     if (sp.activeSpace === true) {
    //         spaceCode = sp.space
    //         sourcePieces = sp.pieces.toReversed().map((p, i) => {
    //             return <span className={`displaySpan${p.slice(0, 2)}`} id={i + 1} key={i}>{p}</span>
    //         })
    //     }
    // })

    spacesCopy.map((sp, i) => {
        if (sp.activeSpace === true) {
            spaceCode = sp.space // for text above left-side square

            //first click, remove pieces in stack from left-side BEFORE the 1st piece has been moved and sp.pieces has been updated
            if (pieceMoveAndCount.piecesToMove.length > 0 &&
                pieceMoveAndCount.piecesToMove.length === pieceMoveAndCount.number) { // aka: no sp.pieces moved yet

                let numberPickedUp = pieceMoveAndCount.piecesToMove.length
                // console.log('numberPickedUp', numberPickedUp)

                const sourceArray = [...sp.pieces.toReversed().slice(numberPickedUp)]
                sourcePieces = sourceArray.map((p, i) => {
                    return <span className={`displaySpan${p.slice(0, 2)}`} id={i + 1} key={i}>{p}</span>
                })
                // console.log('same', sourceArray)

                // second click, sp.pieces has been updated
            } else {
                sourcePieces = sp.pieces.toReversed().map((p, i) => {
                    // console.log('pieces array ', p)
                    return <span className={`displaySpan${p.slice(0, 2)}`} id={i + 1} key={i}>{p}</span>
                })
            }
        }
    })

    piecesToMove = pieceMoveAndCount.piecesToMove.toReversed().map((p, i) => {
        return <span className={`displaySpan${p.slice(0, 2)}`} id={i + 1} key={i}>{p}</span>
    })

    return (
        <>
            <div className='displayGrid'>
                <div className='displaySourcePieces'>
                    {sourcePieces.length > 0 && <p style={{ fontSize: '0.75em', fontWeight: 'bolder' }}>Source Square: {spaceCode}</p>}
                    {sourcePieces ? sourcePieces : ''}
                </div>
                <div>{(sourcePieces.length > 0 || piecesToMove.length > 0) && <h1>&rarr;</h1>}</div>
                <div className='displayStack'>
                    {piecesToMove.length > 0 && <p style={{ fontSize: '0.75em', fontWeight: 'bolder' }}>Pieces in Hand</p>}
                    {piecesToMove ? piecesToMove : ''}
                </div>
            </div>
        </>
    )
}