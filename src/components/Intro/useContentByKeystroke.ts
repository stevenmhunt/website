import { useEffect, useState } from 'react'
import { demoDuration } from './constants'

export function useContentByKeystroke(
  content: string,
  enabled: boolean,
  onFinished: (val: true) => void
) {
  const trimmed = content.trim()
  const [partial, setPartial] = useState('')
  useEffect(() => {
    if (!enabled) {
      return
    }
    if (partial.length < trimmed.length) {
      setTimeout(
        () => {
          setPartial(trimmed.substring(0, partial.length + 1))
        },
        Math.floor(demoDuration / trimmed.length)
      )
    } else {
      onFinished(true)
    }
  }, [enabled, trimmed, partial, onFinished])
  let normalised = partial
  while (normalised.split('\n').length < trimmed.split('\n').length) {
    normalised += '\n   '
  }
  return normalised
}
