import React from "react";
import {Grid} from "@material-ui/core";
import ScenarioList from "./List";
import ScenarioView, {Scenario} from "./ScenarioView";
import AchievementList from "../Achievement/List";
import getUnobtainedAchievements from "../Achievement/api/getUnobtainedAchievements";
import getObtainedAchievements from "../Achievement/api/getObtainedAchievements";
import getAvailableScenarios from "./api/getAvailableScenarios";
import getLockedScenarios from "./api/getLockedScenarios";
import obtainAchievement from "../Achievement/api/obtainAchievement";
import unlockScenario from "./api/unlockScenario";
import DropdownUpdater from "../common/DropdownUpdater";
import {Achievement} from "../Achievement/Achievement";
import getBlockedScenarios from "./api/getBlockedScenarios";

export default function ScenarioOverview() {

    const {available, fetchAvailable} = getAvailableScenarios();
    const {locked, fetchLocked} = getLockedScenarios();
    const {blocked, fetchBlocked} = getBlockedScenarios();
    const {unobtained, fetchUnobtained} = getUnobtainedAchievements();
    const {obtained, fetchObtained} = getObtainedAchievements();

    const fetchEverything = () => {
        fetchAvailable();
        fetchLocked();
        fetchBlocked();
        fetchUnobtained();
        fetchObtained();
    }

    const {obtain} = obtainAchievement(fetchEverything);
    const {unlock} = unlockScenario(fetchEverything);

    return (
        <Grid container>
            <Grid item xs={12}>
                <h1>SCENARIOS</h1>
            </Grid>
            <Grid item xs={3}>
                <ScenarioList header={"Available"}
                              list={available?.filter(s => !s.completed) || []}
                />
                <DropdownUpdater<Scenario>
                    buttonText={"Unlock"}
                    selection={locked || []}
                    updater={unlock}
                    itemView={s => <ScenarioView item={s} linkDetails={false}/>}
                />
            </Grid>
            <Grid item xs={3}>
                <ScenarioList header={"Completed"}
                              list={available?.filter(s => s.completed) || []}
                />
            </Grid>
            <Grid item xs={3}>
                <ScenarioList header={"Blocked"}
                              list={blocked || []}
                />
            </Grid>
            <Grid item xs={3}>
                <AchievementList header={"Achievements"} list={obtained || []}/>
                <DropdownUpdater<Achievement>
                    buttonText={"Obtain"}
                    selection={unobtained || []}
                    sorting={(a, b) => a.text.localeCompare(b.text)}
                    updater={obtain}
                    itemView={(a) => {
                        return <>{a.text}</>
                    }}
                />
            </Grid>
        </Grid>
    );
}