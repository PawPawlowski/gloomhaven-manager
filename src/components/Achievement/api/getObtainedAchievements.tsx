import {OBTAINED} from "../../../constants/services/AchievementPath";
import getData from "../../../common/api/getData";
import {Achievement} from "../Achievement";

const GetObtainedAchievements = () => {
    const {data, fetch} = getData<Achievement>(`${OBTAINED}`);
    return {obtained: data, fetchObtained: fetch}
}

export default GetObtainedAchievements