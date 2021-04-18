import axios from "../../api/axios";
import {AxiosRequestConfig} from "axios";

const PutData = (url: string, refresh: () => void, data?: any, config?: AxiosRequestConfig) => {

    const put = (id: number) => {
        axios.put(`${url}${id}`, data, config)
            .then(refresh)
    };

    return {put};
}

export default PutData;