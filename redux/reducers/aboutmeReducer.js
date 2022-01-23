import { ACTIONS } from "../actions/ActionTypes";

const initialState = {
    description:"",
};
const aboutmeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_ABOUT_ME:
      return {
        ...state,
        enable:action.payload.enable,
        description: action.payload.description,
      };
    default:
      return state;
  }
};
export default aboutmeReducer;
