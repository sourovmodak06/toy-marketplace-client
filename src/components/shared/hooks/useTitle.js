import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `SuperHero ToyStore | ${title}`;
    }, [title])
}

export default useTitle;