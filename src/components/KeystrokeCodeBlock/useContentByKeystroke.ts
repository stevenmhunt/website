import {useEffect, useState} from "react";

export function useContentByKeystroke(content: string) {
    const trimmed = content.trim()
    const [partial, setPartial] = useState('')
    useEffect(() => {
        if (partial.length < trimmed.length) {
            setTimeout(() => {
                setPartial(trimmed.substring(0, partial.length + 1))
            }, 5)
        }
    }, [trimmed, partial]);
    let normalised = partial
    while (normalised.split('\n').length < trimmed.split('\n').length) {
        normalised += '\n   '
    }
    return normalised
}