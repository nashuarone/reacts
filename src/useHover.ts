import { useEffect, useRef, useState } from "react"

export function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef<null | HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseOver = () => {
            setHovered(true)
        }

        const handleMouseOut = () => {
            setHovered(false)
        }

        if (ref.current) {
            ref.current.addEventListener('mouseover', handleMouseOver)
            ref.current.addEventListener('mouseout', handleMouseOut)

            return () => {
            if (ref.current) {
                ref.current.removeEventListener('mouseover', handleMouseOver)
                ref.current.removeEventListener('mouseout', handleMouseOut)
            }
        }
        }
    }, [])

    return { hovered, ref }
}
