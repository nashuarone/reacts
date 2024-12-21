import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "./constants";

export const useGetOneElement = (path: string, id: number) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)    
    const [element, setElement] = useState({})

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel: () => void;
        axios({
            method: 'GET',
            url: `${URL}${path}/${id}`,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setElement(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
            console.error(e)
        }).finally(() => {
            setLoading(false)
        })
        return () => cancel()
    }, [path, id])

    return { loading, error, element }
}
