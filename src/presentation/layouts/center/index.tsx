import { PropsWithChildren } from "react";

import { CenterLayoutProperties } from "./center.properties";

import "./center.styles.scss"

export function CenterLayout(properties: PropsWithChildren<CenterLayoutProperties>) {

    const classNameContainer = ["center-layout-container"]

    if (properties.isBackdrop) {
        classNameContainer.push("backdrop")
    }

    return (
        <section className={classNameContainer.join(' ')}>
            {properties.children}
        </section>
    )
}