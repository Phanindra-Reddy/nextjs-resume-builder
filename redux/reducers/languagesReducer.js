import { ACTIONS, DELETE, DRAG_DROP } from "../actions/ActionTypes";

const initialState = {
  enable: true,
  items: [],
};
const languagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_LANGUAGE:
      const { id, name, enable } = action.payload;
      return {
        ...state,
        enable: enable,
        items: [...state.items, { id: id, name: name }],
      };

    case DRAG_DROP.DRAG_DROP_LANGUAGES:
      return {
        ...state,
        items: [...action.payload.result],
      };

    case DELETE.LANGUAGE:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
export default languagesReducer;
