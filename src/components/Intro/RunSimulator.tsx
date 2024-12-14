import { FC, useEffect, useState } from 'react'
import CodeBlock from '@theme/CodeBlock'
import { demoDuration } from './constants'

interface Props {
  scenarios: number
  steps: number
  enabled: boolean
}

export const RunSimulator: FC<Props> = ({ scenarios, steps, enabled }) => {
  const [completed, setCompleted] = useState(0)
  useEffect(() => {
    if (!enabled) {
      return
    }
    if (completed < steps) {
      setTimeout(
        () => {
          setCompleted(completed + 1)
        },
        Math.floor(demoDuration / steps)
      )
    }
  }, [enabled, steps, completed])
  return (
    <CodeBlock>
      {Array(completed)
        .fill('.')
        .map((thing, index) => {
          return (
            <strong key={index} className="text--primary">
              {thing}
            </strong>
          )
        })}
      <br />
      <br />
      {steps === completed ? (
        <>
          {scenarios} scenarios (<span className="text--primary">{scenarios} passed</span>)<br />
          {steps} steps (<span className="text--primary">{steps} passed</span>)<br />
          0m01.064s
        </>
      ) : (
        <>
          <br />
          <br />
          <br />
        </>
      )}
    </CodeBlock>
  )
}
