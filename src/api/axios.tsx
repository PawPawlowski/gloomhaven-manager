import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import qs from "qs";
import {AVAILABLE, COMPLETE, DETAILS} from "../constants/services/ScenarioPath";
import {ScenarioDetails} from "../components/Scenario/ScenarioDetails";


const axiosApi = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    paramsSerializer(params) {
        return qs.stringify(params, {indices: false});
    },
});

//const mock = new MockAdapter(axiosApi);
/*
mock.onGet(SCENARIO_AVAILABLE).reply(200,
    [{number: 1, name: "Mocked scenario", location: "N-17", completed: true},
        {number: 2, name: "Mocked scene", location: "M-1", completed: false}],
);
 */

//mock.onPut(SCENARIO_COMPLETE).reply(200);
/*
mock.onGet(SCENARIO_DETAILS).reply<ScenarioDetails>(function (config) {
    return [200, {
        number: 11,
        name: "Some scenario",
        location: "M-14",
        completed: true,
        unlock: [{
            number: 12,
            name: "next",
            location: "M-15",
            completed: false,
        }, {
            number: 13,
            name: "or this one",
            location: "M-16",
            completed: false,
        }],
        requirement: [{
            text: "the first one",
            type: "GLOBAL",
            obtained: false,
        }],
        achievement: [{
            text: "Second",
            type: "PARTY",
            obtained: false,
        }]
    }];
});
 */

export default axiosApi;