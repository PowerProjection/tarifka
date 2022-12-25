import axios from 'axios'
import { useEffect, useState } from 'react'

function useFetch(URL) {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const {data:responseData} = await axios.get(URL)
            setData(responseData)
            
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {data}
}


export default useFetch