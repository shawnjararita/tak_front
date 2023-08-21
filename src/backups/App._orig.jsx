import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TakSpace } from './takSpace'

function Clock(props) {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => getNewTime(), 1000)

        //return()ing a function runs when the component 1st mounts $ when it unmounts
        return () => { console.log('stopping timer'); clearInterval(timer) }
    }, [])

    function getNewTime() {
        setDate(new Date())
        console.log('tick . . .')
    }

    return (
        <div>
            <h1>The current date and time are: {date.toLocaleString()}</h1>
            <h3>{props.author}</h3>
        </div>
    )
}

//---------------------------------------------------------------------------------------------

function App() {
    const [count, setCount] = useState(2)
    const [mLeft, setMLeft] = useState(50)
    const [visible, setVisable] = useState(true)

    // function handleClick() {
    //   setCount((count) => count + 1)
    // }

    const handleClick = () => {
        setCount((count) => count + 1)
    }

    function selectHeader(x) {
        let header
        if (x > 1) {
            header = (<h1>Have a nice day</h1>)
        } else {
            header = (<h1>Welcome!</h1>)
        }
        return header
    }
    let header2 = selectHeader(0)

    function handleDotMove() {
        setMLeft((x) => (x += 50))
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            {header2}
            <h1>Vite + React</h1>
            <div style={{ marginLeft: `${mLeft}px`, width: '50px', borderRadius: '50%', backgroundColor: 'red' }} onClick={handleDotMove}>d</div>
            <div className="card">
                <button onClick={handleClick}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <br />
            <br />
            <button onClick={() => setVisable(!visible)}>Toggle Clock Visability</button>
            <br />
            {visible && <Clock author='skj' />}
        </>
    )
}

export default App
