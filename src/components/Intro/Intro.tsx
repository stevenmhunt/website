import React, { FC } from 'react'
import clsx from 'clsx'
import { feature, steps } from './constants'
import styles from './Intro.module.scss'
import { RunSimulator } from './RunSimulator'
import Link from '@docusaurus/Link'
import CodeBlock from '@theme/CodeBlock'

export const Intro: FC = () => {
  return (
    <div>
      <div className={clsx('row margin-vert--lg', styles.introRow)}>
        <div className="col col--3">
          <strong>Step 1</strong>
          <h3 className="text--light">Write your scenarios in plain language</h3>
          <p>
            <Link className="button button--secondary" to="/docs/gherkin">
              Learn More
            </Link>
          </p>
        </div>
        <div className="col col--6">
          <CodeBlock
            language="gherkin"
            title="features/greeting.feature"
          >{feature}</CodeBlock>
        </div>
      </div>
      <div className={clsx('row margin-vert--lg', styles.introRow)}>
        <div className="col col--3">
          <strong>Step 2</strong>
          <h3 className="text--light">Add code to link your steps to automation</h3>
          <p>
            <Link className="button button--secondary" to="/docs/cucumber/step-definitions">
              Learn More
            </Link>
          </p>
        </div>
        <div className="col col--6">
          <CodeBlock
            language="javascript"
            title="features/steps.js"
          >{steps}</CodeBlock>
        </div>
      </div>
      <div className={clsx('row margin-vert--lg', styles.introRow)}>
        <div className="col col--3">
          <strong>Step 2</strong>
          <h3 className="text--light">Run your tests</h3>
          <p>
            <Link className="button button--secondary" to="/docs/cucumber/api#running-cucumber">
              Learn More
            </Link>
          </p>
        </div>
        <div className="col col--6">
          <RunSimulator scenarios={1} steps={3} />
        </div>
      </div>
    </div>
  )
}
