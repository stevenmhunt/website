import {FC} from "react";
import CodeBlock from "@theme/CodeBlock";

interface Props {
    scenarios: number
    steps: number
}

export const RunSimulator: FC<Props> = ({scenarios, steps}) => {
    return <CodeBlock>
        {Array(steps).fill('.').map((thing, index) => {
            return <span key={index} className="text--primary">{thing}</span>
        })}<br/>
        <br/>
        {scenarios} scenarios (<span className="text--primary">{scenarios} passed</span>)<br/>
        {steps} steps (<span className="text--primary">{steps} passed</span>)<br/>
        0m00.210s
    </CodeBlock>
}