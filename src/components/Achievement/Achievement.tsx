import React from "react";
import styles from "./Achievement.module.scss";
import {Close, Done} from "@material-ui/icons";
import {notDefined} from "../../common/utils/ObjectUtil";
import Numbered from "../../model/numbered";

export interface Achievement extends Numbered {
    text: string;
    fullFilled?: boolean | null;
    reqObtained?: boolean | null;
    type: "GLOBAL" | "PARTY" | "PERSONAL";
}

export default function AchievementView({item}: { item: Achievement }) {
    const append = notDefined(item.reqObtained) ? ""
        : item.reqObtained ? " (Obtained)" : " (Not obtained)";

    return <div className={styles.iconText}>
        {notDefined(item.fullFilled) ? null
            : item.fullFilled
                ? <Done fontSize={"inherit"}/>
                : <Close fontSize={"inherit"}/>}
        <span>{item.text + append}</span>
    </div>
}