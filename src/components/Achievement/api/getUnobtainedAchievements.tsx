import {UNOBTAINED} from "../../../constants/services/AchievementPath";
import getData from "../../../common/api/getData";
import {Achievement} from "../Achievement";

const GetUnobtainedAchievements = () => {
    const {data, fetch} = getData<Achievement>(`${UNOBTAINED}`);
    return {unobtained: data, fetchUnobtained: fetch}
}

export default GetUnobtainedAchievements