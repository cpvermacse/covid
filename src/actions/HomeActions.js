import { FETCH_DATA, FETCH_STATE_DATA } from "./actionType";
import axios from "axios";

export const fetchData = () => (dispatch) => {
  axios
    .get(`https://api.covid19india.org/data.json`)
    .then((response) => {
      console.log("api calling", response);
      dispatch({
        type: FETCH_DATA,
        payload: response.data.statewise,
      });
    })
    .catch((err) => console.log(err));
};

export const fetchStateData = () => (dispatch) => {
  axios
    .get(`https://api.covid19india.org/state_district_wise.json`)
    .then((response) => {
      console.log("api calling", response);
      dispatch({
        type: FETCH_STATE_DATA,
        payload: response,
      });
    })
    .catch((err) => console.log(err));
};
