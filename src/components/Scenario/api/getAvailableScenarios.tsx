import getData from "../../../common/api/getData";
import {AVAILABLE} from "../../../constants/services/ScenarioPath";
import {Scenario} from "../ScenarioView";

const GetAvailableScenarios = () => {
    const {data, fetch} = getData<Scenario>(`${AVAILABLE}`);
    return {available: data, fetchAvailable: fetch}
}

export default GetAvailableScenarios;