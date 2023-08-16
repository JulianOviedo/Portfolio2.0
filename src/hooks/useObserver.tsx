import { useEffect, useRef, useState } from "react"

type UseObserverProps = [
    IntersectionObserver | null, 
    React.Dispatch<React.SetStateAction<Element[]>>,
    IntersectionObserverEntry[]
  ];

export const useObserver = (options: IntersectionObserverInit):UseObserverProps => {
    const [elements, setElements] = useState<Element[]>([])
    const [entries, setEntries] = useState<IntersectionObserverEntry[]>([])

    const observer = useRef(new IntersectionObserver(observedEntries => {
        setEntries(observedEntries)
    }, options))

    useEffect(() => {
        const { current: currentObserver } = observer
        currentObserver.disconnect()
        if (elements.length > 0) {
            elements.forEach(element => currentObserver.observe(element))
        }
        return function cleanUp() {
            if (currentObserver) {
                currentObserver.disconnect()
            }
        }
    }, [elements])

    return [observer.current, setElements, entries]
}