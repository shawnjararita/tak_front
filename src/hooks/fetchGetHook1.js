import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState([])

    useEffect(() => {
        try {
            const axiosFetch = async () => {
                try {
                    const res = await axios({
                        url: url,
                        method: 'GET'
                    })
                    if (res) {
                        setData((data) => { return res })
                        setIsPending(false)
                        setError([])
                    }
                } catch (e) {
                    console.log(`axios error: ${e}`)
                    setError((err) => { return [...err, e] })
                }
            }
            axiosFetch()
        } catch (e) {
            console.log(`useEffect error: ${e}`)
            setError((err) => { return [...err, e] })
        }
    }, [url])
    return { data, isPending, error }
}
export default useGetFetch