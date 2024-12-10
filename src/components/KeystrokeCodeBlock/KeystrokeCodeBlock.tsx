import React, {FC} from "react";
import CodeBlock from "@theme/CodeBlock";

export const KeystrokeCodeBlock: FC<{content: string}> = ({content}) => {
    return <CodeBlock
        language="gherkin"
        showLineNumbers>
        {content}
    </CodeBlock>
}