import React, {FC} from "react";
import CodeBlock from "@theme/CodeBlock";
import {useContentByKeystroke} from "./useContentByKeystroke";

interface Props {
    content: string
    language?: string
    title?: string
}

export const KeystrokeCodeBlock: FC<Props> = ({content, language, title}) => {
    const partialContent = useContentByKeystroke(content)
    return <CodeBlock
        key={content}
        language={language}
        title={title}>
        {partialContent}
    </CodeBlock>
}