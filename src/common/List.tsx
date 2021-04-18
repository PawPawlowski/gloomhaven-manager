import React from "react";
import {Grid} from "@material-ui/core";
import styles from "../components/Scenario/ScenarioDetails.module.scss";

export interface SimpleListProps<T> {
    header: string;
    list: T[];
}

export interface ListProps<T> extends SimpleListProps<T> {
    renderFunction: (arg: T) => JSX.Element;
}

export default function List<T>({header, list, renderFunction}: ListProps<T>) {
    return (
        <>
            <h2>{header}</h2>
            {list.map((t, index) => <Grid item key={index} className={styles.center}>{renderFunction(t)}</Grid>)}
        </>
    )
}