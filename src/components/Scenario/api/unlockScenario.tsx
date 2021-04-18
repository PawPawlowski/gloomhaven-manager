import putData from "../../../common/api/putData";
import {UNLOCK} from "../../../constants/services/ScenarioPath";

const UnlockScenario = (refresh: () => void) => {
    const {put} = putData(`${UNLOCK}`, refresh);
    return {unlock: put}
}

export default UnlockScenario