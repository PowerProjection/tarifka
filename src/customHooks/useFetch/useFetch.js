import axios from 'axios'
import { useEffect, useState } from 'react'

function useFetch(URL) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchData = async () => {
        try {
            const {data:responseData} = await axios.get(URL)
            setData(responseData)
            setLoading(false)
            
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {data, loading}
}


export default useFetch