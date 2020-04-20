import { FETCH_DATA, FETCH_STATE_DATA } from "../actions/actionType";
import { CardActionArea } from "@material-ui/core";

const initialState = {
  data: " ",
  state_data: [],
  state_wise_Data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        data: action.payload,
        state_data: action.payload,
      };
    case FETCH_STATE_DATA:
      return {
        ...state,
        state_wise_Data: action.payload,
      };

    default:
      return state;
  }
}
