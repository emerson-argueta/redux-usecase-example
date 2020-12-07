import { useRef } from "react"

export const useCountRenders = () => {
    const ref = useRef(0)
    return ref.current++
};