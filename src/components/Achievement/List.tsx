import React from "react";
import List, {SimpleListProps} from "../../common/List";
import AchievementView, {Achievement} from "./Achievement";

export default function AchievementList({header, list}: SimpleListProps<Achievement>) {
    return <List header={header} list={list} renderFunction={a => <AchievementView item={a}/>}/>;
}