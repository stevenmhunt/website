import React, {FC} from "react";
import CodeBlock from "@theme/CodeBlock";
import {useContentByKeystroke} from "./useContentByKeystroke";

export const KeystrokeCodeBlock: FC<{content: string}> = ({content}) => {
    const partialContent = useContentByKeystroke(content)
    return <CodeBlock
        language="gherkin"
        showLineNumbers>
        {partialContent}
    </CodeBlock>
}