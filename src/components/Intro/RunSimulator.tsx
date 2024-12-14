import { FC } from 'react'
import CodeBlock from '@theme/CodeBlock'

interface Props {
  scenarios: number
  steps: number
}

export const RunSimulator: FC<Props> = ({ scenarios, steps }) => {
  return (
    <CodeBlock>
      {Array(steps)
        .fill('.')
        .map((thing, index) => {
          return (
            <strong key={index} className="text--success">
              {thing}
            </strong>
          )
        })}
      <br />
      <br />
      {scenarios} scenarios (<span className="text--success">{scenarios} passed</span>)<br />
      {steps} steps (<span className="text--success">{steps} passed</span>)<br />
      0m01.000s
    </CodeBlock>
  )
}
