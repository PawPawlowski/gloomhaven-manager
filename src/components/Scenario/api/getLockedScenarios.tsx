import getData from "../../../common/api/getData";
import {LOCKED} from "../../../constants/services/ScenarioPath";
import {Scenario} from "../ScenarioView";

const GetLockedScenarios = () => {
    const {data, fetch} = getData<Scenario>(`${LOCKED}`);
    return {locked: data, fetchLocked: fetch}
}

export default GetLockedScenarios