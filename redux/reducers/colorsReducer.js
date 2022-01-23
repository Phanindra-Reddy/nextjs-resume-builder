
import { ACTIONS } from "../actions/ActionTypes";

const initialState = {
    primaryColor:"",
    secondColor:""
};
const colorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_COLORS:
      const {primaryColor, secondColor} = action.payload
      return {
        ...state,
        primaryColor,
        secondColor
      };
    default:
      return state;
  }
};
export default colorsReducer;
