import { ACTIONS, DRAG_DROP, DELETE } from "../actions/ActionTypes";

const initialState = {
  enable: true,
  items: [],
};
const hobbiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADD_HOBBIE:
      const { id, name, enable } = action.payload;
      return {
        ...state,
        enable: enable,
        items: [...state.items, { id: id, name: name }],
      };

    case DRAG_DROP.DRAG_DROP_HOBBIES:
      return {
        ...state,
        items: [...action.payload.result],
      };

    case DELETE.HOBBY:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};
export default hobbiesReducer;
