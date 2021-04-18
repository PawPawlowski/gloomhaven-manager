import React, {useEffect} from "react";
import ScenarioView, {Scenario} from "./ScenarioView";
import styles from "./ScenarioDetails.module.scss";
import axios from "../../api/axios";
import {DETAILS} from "../../constants/services/ScenarioPath";
import {Grid} from "@material-ui/core";
import AchievementView, {Achievement} from "../Achievement/Achievement";


export interface ScenarioDetails {
    number: number;
    name: string;
    location: string;
    completed: boolean;
    objective: string;
    rewards: string;
    unlock: Scenario[];
    requirement: Achievement[];
    achievement: Achievement[];
}

export default function ScenarioDetailsView({id}: { id: number }) {
    const [details, setDetails] = React.useState<ScenarioDetails>();

    useEffect(() => {
        const url: string = `${DETAILS}${id}`;
        axios.get<ScenarioDetails>(url).then(({data}) => setDetails(data))
    }, [id])

    if (!details) {
        return <div>No details.
            <br/>
            So far
        </div>
    }

    const {name, number, completed, unlock, achievement, requirement, rewards, objective} = details;

    return (
        <Grid container className={styles.window}>
            <Grid item xs={12}>
                <header>#{number} - {name}</header>
            </Grid>
            <Grid item xs={12} className={styles.center}>
                {completed ? rewards : objective}
            </Grid>
            <Grid container direction={"row"} className={styles.padTop} spacing={3}>

                <Grid item xs={4}>
                    <span className={styles.underline}>Requirements</span>
                    {requirement.map((a, index) => <AchievementView key={index} item={a}/>)}
                </Grid>

                <Grid item xs={4}>
                    <span className={styles.underline}>Unlocks</span>
                    {unlock.map(s => <ScenarioView key={s.number} item={s}/>)}
                </Grid>

                <Grid item xs={4}>
                    <span className={styles.underline}>Achievements</span>
                    {achievement.map((a, index) => <AchievementView key={index} item={a}/>)}
                </Grid>
            </Grid>
        </Grid>
    )
}