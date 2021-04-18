import {MenuItem, Select} from "@material-ui/core";
import styles from "../Scenario/ScenarioDetails.module.scss";
import React from "react";
import Numbered from "../../model/numbered";


interface updaterProps<T extends Numbered> {
    selection: T[];
    sorting?: (a: T, b: T) => number;
    updater: (id: number) => void;
    itemView: (t: T) => JSX.Element;
    buttonText: string;
}

export default function DropdownUpdater<T extends Numbered>({
                                                                selection,
                                                                sorting,
                                                                updater,
                                                                itemView,
                                                                buttonText,
                                                            }: updaterProps<T>) {

    const [select, setSelect] = React.useState<number>();

    const handleOnClick = () => {
        if (select) {
            updater(select);
        }
        setSelect(undefined);
    }

    const comparator = sorting || ((a, b) => {
        return 1
    });

    return (
        <>
            <Select
                className={styles.padTop}
                value={select}
                onChange={(event) => setSelect(event.target.value as number)}>
                {selection?.sort((a, b) => comparator(a, b))
                    .map(s => <MenuItem key={s.number} value={s.number}>
                        {itemView(s)}
                    </MenuItem>)}
            </Select>
            <button onClick={handleOnClick}>{buttonText}</button>
        </>
    )
}