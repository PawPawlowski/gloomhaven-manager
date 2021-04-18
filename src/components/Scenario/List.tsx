import React from "react";
import ScenarioView, {Scenario} from "./ScenarioView";
import List, {SimpleListProps} from "../../common/List";

export default function ScenarioList({header, list}: SimpleListProps<Scenario>) {
    return <List header={header} list={list} renderFunction={s => <ScenarioView item={s} linkDetails={true}/>}/>;
}