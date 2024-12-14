import React, { FC } from 'react'
import CodeBlock from '@theme/CodeBlock'
import { useContentByKeystroke } from './useContentByKeystroke'

interface Props {
  content: string
  language?: string
  title?: string
  enabled: boolean
  onFinished: (val: true) => void
}

export const KeystrokeCodeBlock: FC<Props> = ({
  content,
  language,
  title,
  enabled,
  onFinished,
}) => {
  const partialContent = useContentByKeystroke(content, enabled, onFinished)
  return (
    <CodeBlock key={content} language={language} title={title}>
      {partialContent}
    </CodeBlock>
  )
}
