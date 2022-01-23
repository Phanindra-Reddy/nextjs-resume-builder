
import { ACTIONS } from "../actions/ActionTypes";

const initialState = {
    templateId:"",
};
const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SELECT_TEMPLATE:
      const {id} = action.payload
      return {
        ...state,
        templateId:id
      };
    default:
      return state;
  }
};
export default templateReducer;
