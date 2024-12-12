import React, {FC} from 'react';
import clsx from "clsx";
import {feature, steps} from "./code";
import styles from './Intro.module.scss'
import {KeystrokeCodeBlock} from "../KeystrokeCodeBlock";
import {RunSimulator} from "../RunSimulator";
import Link from "@docusaurus/Link";


export const Intro: FC = () => {
    return <div>
        <div className={clsx('row margin-vert--lg', styles.introRow)}>
            <div className="col col--3">
                <strong>Step 1</strong>
                <h3 className="text--light">Write your scenarios in plain language</h3>
                <p>
                    <Link
                        className="button button--secondary"
                        to="/docs/gherkin">
                        Learn More
                    </Link>
                </p>
            </div>
            <div className="col col--6">
                <KeystrokeCodeBlock content={feature} language="gherkin" title="features/greeting.feature"/>
            </div>
        </div>
        <div className={clsx('row margin-vert--lg', styles.introRow)}>
            <div className="col col--3">
                <strong>Step 2</strong>
                <h3 className="text--light">Add code to link your steps to automation</h3>
                <p>
                    <Link
                        className="button button--secondary"
                        to="/docs/cucumber/step-definitions">
                        Learn More
                    </Link>
                </p>
            </div>
            <div className="col col--6">
                <KeystrokeCodeBlock content={steps} language="javascript" title="features/steps.js"/>
            </div>
        </div>
        <div className={clsx('row margin-vert--lg', styles.introRow)}>
            <div className="col col--3">
                <strong>Step 2</strong>
                <h3 className="text--light">Run your tests</h3>
            </div>
            <div className="col col--6">
                <RunSimulator scenarios={1} steps={3}/>
            </div>
        </div>
    </div>
}
