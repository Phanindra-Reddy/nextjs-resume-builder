
import { ACTIONS } from "../actions/ActionTypes";

const initialState = {
    font:"",
};
const fontsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_FONT:
      const {font} = action.payload
      return {
        ...state,
        font:font,
      };
    default:
      return state;
  }
};
export default fontsReducer;
