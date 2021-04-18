import React from "react";
import Modal from "../../common/Modal";
import ScenarioDetailsView from "./ScenarioDetails";
import {Done} from "@material-ui/icons";
import Numbered from "../../model/numbered";

export interface Scenario extends Numbered {
    name: string;
    location: string;
    completed: boolean;
}

interface ViewProps {
    item: Scenario;
    linkDetails?: boolean;
    onComplete?: (s: Scenario) => void
}

export default function ScenarioView({item, linkDetails, onComplete}: ViewProps) {
    const [details, showDetails] = React.useState(false);

    const openDetails = () => {
        showDetails(true);
    };

    const handleClose = () => {
        showDetails(false);
    };

    const getConfirmHandler = (s: Scenario, onComplete?: (s: Scenario) => void) => () => {
        onComplete?.(s);
        handleClose();
    }

    const getOnConfirm = (s: Scenario, onComplete?: (s: Scenario) => void) => {
        return (s.completed || !onComplete) ? undefined : {handle: getConfirmHandler(s, onComplete), text: "COMPLETE"}
    }

    return (
        <>
            <div onClick={openDetails}>
                #{item.number} - {item.name} at {item.location}
                {item.completed ? <Done fontSize={"inherit"}/> : null}
            </div>
            {linkDetails ?
                <div>
                    <Modal isOpen={details}
                           onConfirm={getOnConfirm(item, onComplete)}
                           handleClose={handleClose}>
                        <ScenarioDetailsView id={item.number}/>
                    </Modal>
                </div> : null}
        </>
    )
}