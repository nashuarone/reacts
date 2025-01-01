import axios from "axios";
import { useEffect, useState } from "react";
import { URL } from "./constants";

export const useGetNextElements = (path: string, page: number = 0) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [elements, setElements] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        setElements([])
    }, [path])

    useEffect(() => {
        setLoading(true)
        setError(false)
        let cancel: () => void;
        axios({
            method: 'GET',
            url: `${URL}${path}`,
            params: {
                page
            },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            // @ts-ignore
            setElements(prevState => {
                return [...prevState, ...res.data.results]
            })
            setHasMore(res.data.info.next !== null)
        }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
            console.error(e)
        }).finally(() => {
            setLoading(false)
        })
        return () => cancel()
    }, [path, page])

    return {
        loading,
        error,
        elements,
        hasMore
    }
}
