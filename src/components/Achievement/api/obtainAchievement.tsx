import putData from "../../../common/api/putData";
import {ACHIEVEMENT_BASE} from "../../../constants/services/AchievementPath";

const ObtainAchievement = (refresh: () => void) => {
    const {put} = putData(`${ACHIEVEMENT_BASE}`, refresh, null, {params: {obtain: true}});
    return {obtain: put}
}

export default ObtainAchievement;