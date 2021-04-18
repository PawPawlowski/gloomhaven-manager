import getData from "../../../common/api/getData";
import {BLOCKED} from "../../../constants/services/ScenarioPath";
import {Scenario} from "../ScenarioView";

const GetBlockedScenarios = () => {
    const {data, fetch} = getData<Scenario>(`${BLOCKED}`);
    return {blocked: data, fetchBlocked: fetch}
}

export default GetBlockedScenarios