import {useEffect, useState} from "react";
import axios from "../../api/axios";

const GetData = <T extends Object>(url: string) => {
    const [data, setData] = useState<T[] | null>(null);

    const fetch = () => {
        axios.get<T[]>(url)
            .then(({data: responseData}) => setData(responseData))
    };

    useEffect(fetch, [url]);

    return {data, fetch};
}

export default GetData;
